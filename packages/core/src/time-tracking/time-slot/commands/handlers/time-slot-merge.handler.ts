import { CommandBus, CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { In } from 'typeorm';
import * as moment from 'moment';
import { chain, omit, pluck, uniq } from 'underscore';
import { DateRange, IActivity, IScreenshot, ITimeLog, ITimeSlot } from '@gauzy/contracts';
import { isNotEmpty } from '@gauzy/common';
import { TimeSlotMergeCommand } from '../time-slot-merge.command';
import { Activity, Screenshot, TimeSlot } from './../../../../core/entities/internal';
import { RequestContext } from './../../../../core/context';
import { getDateRangeFormat } from './../../../../core/utils';
import { TimesheetRecalculateCommand } from './../../../timesheet/commands';
import { UpdateEmployeeTotalWorkedHoursCommand } from './../../../../employee/commands';
import { prepareSQLQuery as p } from './../../../../database/database.helper';
import { TypeOrmTimeSlotRepository } from '../../repository/type-orm-time-slot.repository';

@CommandHandler(TimeSlotMergeCommand)
export class TimeSlotMergeHandler implements ICommandHandler<TimeSlotMergeCommand> {
	constructor(
		private readonly typeOrmTimeSlotRepository: TypeOrmTimeSlotRepository,
		private readonly commandBus: CommandBus
	) {}

	/**
	 * Execute the TimeSlot merge command
	 *
	 * @param command - The TimeSlotMergeCommand to execute
	 */
	public async execute(command: TimeSlotMergeCommand) {
		let { organizationId, employeeId, start, end, forceDelete } = command;
		const tenantId = RequestContext.currentTenantId();

		// Round start and end dates to the nearest 10 minutes
		const { start: startedAt, end: stoppedAt } = this.getRoundedDateRange(start, end);
		console.log({ startedAt, stoppedAt }, 'Time Slot Merging Dates');

		// GET Time Slots for the given date range slot
		const timeSlots = await this.getTimeSlots({
			organizationId,
			employeeId,
			tenantId,
			startedAt,
			stoppedAt
		});

		const createdTimeSlots: ITimeSlot[] = [];

		if (isNotEmpty(timeSlots)) {
			const groupByTimeSlots = chain(timeSlots).groupBy((timeSlot) => {
				let date = moment(timeSlot.startedAt);
				const minutes = date.get('minute');
				date = date
					.set('minute', minutes - (minutes % 10))
					.set('second', 0)
					.set('millisecond', 0);
				return date.format('YYYY-MM-DD HH:mm:ss');
			});
			const savePromises = groupByTimeSlots
				.mapObject(async (timeSlots, slotStart) => {
					const [timeSlot] = timeSlots;

					let timeLogs: ITimeLog[] = [];
					let screenshots: IScreenshot[] = [];
					let activities: IActivity[] = [];

					let duration = 0;
					let keyboard = 0;
					let mouse = 0;
					let overall = 0;

					const calculateValue = (value: number | undefined): number => parseInt(value as any, 10) || 0;

					duration += timeSlots.reduce((acc, slot) => acc + calculateValue(slot.duration), 0);
					keyboard += timeSlots.reduce((acc, slot) => acc + calculateValue(slot.keyboard), 0);
					mouse += timeSlots.reduce((acc, slot) => acc + calculateValue(slot.mouse), 0);
					overall += timeSlots.reduce((acc, slot) => acc + calculateValue(slot.overall), 0);

					screenshots = screenshots.concat(...timeSlots.map((slot) => slot.screenshots || []));
					timeLogs = timeLogs.concat(...timeSlots.map((slot) => slot.timeLogs || []));
					activities = activities.concat(...timeSlots.map((slot) => slot.activities || []));

					const nonZeroKeyboardSlots = timeSlots.filter((item: ITimeSlot) => item.keyboard !== 0);
					const timeSlotsLength = nonZeroKeyboardSlots.length;

					keyboard = Math.round(keyboard / timeSlotsLength || 0);
					mouse = Math.round(mouse / timeSlotsLength || 0);

					const activity = {
						duration: Math.max(0, Math.min(600, duration)),
						overall: Math.max(0, Math.min(600, overall)),
						keyboard: Math.max(0, Math.min(600, keyboard)),
						mouse: Math.max(0, Math.min(600, mouse))
					};
					/*
					 * Map old screenshots newly created TimeSlot
					 */
					screenshots = screenshots.map((item) => new Screenshot(omit(item, ['timeSlotId'])));
					/*
					 * Map old activities newly created TimeSlot
					 */
					activities = activities.map((item) => new Activity(omit(item, ['timeSlotId'])));

					timeLogs = uniq(timeLogs, (log: ITimeLog) => log.id);

					const newTimeSlot = new TimeSlot({
						...omit(timeSlot),
						...activity,
						screenshots,
						activities,
						timeLogs,
						startedAt: moment(slotStart).toDate(),
						tenantId,
						organizationId,
						employeeId
					});
					console.log('Newly Created Time Slot', newTimeSlot);

					await this.updateTimeLogAndEmployeeTotalWorkedHours(newTimeSlot);

					await this.typeOrmTimeSlotRepository.save(newTimeSlot);
					createdTimeSlots.push(newTimeSlot);

					// Clean up old time slots if needed
					await this.cleanUpOldTimeSlots(timeSlots, forceDelete);
				})
				.values()
				.value();
			await Promise.all(savePromises);
		}
		return createdTimeSlots;
	}

	/**
	 * Rounds start and end dates to the nearest 10 minutes and returns the formatted date range.
	 *
	 * @param start - Start date of the range
	 * @param end - End date of the range
	 * @returns The formatted start and end dates
	 */
	private getRoundedDateRange(start: Date, end: Date): DateRange {
		const startDate = this.roundToNearestTenMinutes(moment(start).utc());
		const endDate = this.roundToNearestTenMinutes(moment(end).utc().add(10, 'minutes'));
		return getDateRangeFormat(startDate, endDate);
	}

	/**
	 * Deletes or soft-deletes old time slots based on the `forceDelete` flag.
	 *
	 * @param slots - Array of time slots to clean up
	 * @param forceDelete - Flag to indicate if deletion should be permanent
	 */
	private async cleanUpOldTimeSlots(slots: ITimeSlot[], forceDelete: boolean) {
		const idsToDelete = pluck(slots, 'id'); // Exclude the first ID as the latest time slot
		idsToDelete.splice(0, 1);

		console.log('---------------TimeSlots Ids Will Be Deleted---------------', idsToDelete);

		if (isNotEmpty(idsToDelete)) {
			if (forceDelete) {
				// Hard delete (permanent deletion)
				return await this.typeOrmTimeSlotRepository.delete({ id: In(idsToDelete) });
			}

			// Soft delete (mark records as deleted)
			return await this.typeOrmTimeSlotRepository.softDelete({ id: In(idsToDelete) });
		}
	}

	/**
	 * Round a moment date to the nearest 10 minutes
	 *
	 * @param date - The moment date to round
	 * @returns The rounded moment date
	 */
	private roundToNearestTenMinutes(date: moment.Moment): moment.Moment {
		const minutes = date.minutes();
		return date
			.minutes(minutes - (minutes % 10))
			.seconds(0)
			.milliseconds(0);
	}

	/**
	 * Get time slots for the given date range.
	 *
	 * @param params - An object containing parameters like organizationId, employeeId, tenantId, startedAt, and stoppedAt.
	 * @returns A promise that resolves to an array of TimeSlot instances.
	 */
	private async getTimeSlots({ organizationId, employeeId, tenantId, startedAt, stoppedAt }): Promise<TimeSlot[]> {
		// Create a query builder for the TimeSlot entity
		const query = this.typeOrmTimeSlotRepository.createQueryBuilder();
		query
			.leftJoinAndSelect(`${query.alias}.timeLogs`, 'timeLogs')
			.leftJoinAndSelect(`${query.alias}.screenshots`, 'screenshots')
			.leftJoinAndSelect(`${query.alias}.activities`, 'activities');
		query
			.where(p(`"${query.alias}"."startedAt" >= :startedAt AND "${query.alias}"."startedAt" < :stoppedAt`), {
				startedAt,
				stoppedAt
			})
			.andWhere(p(`"${query.alias}"."employeeId" = :employeeId`), { employeeId })
			.andWhere(p(`"${query.alias}"."organizationId" = :organizationId`), { organizationId })
			.andWhere(p(`"${query.alias}"."tenantId" = :tenantId`), { tenantId })
			.addOrderBy(p(`"${query.alias}"."createdAt"`), 'ASC');

		// Execute the query and return the results
		return await query.getMany();
	}

	/**
	 * Updates time logs and recalculates the total worked hours for an employee based on the given time slot.
	 *
	 * @param newTimeSlot - The newly created time slot containing time logs and employee information.
	 */
	private async updateTimeLogAndEmployeeTotalWorkedHours(newTimeSlot: ITimeSlot): Promise<void> {
		/**
		 * Update TimeLog Entry Every TimeSlot Request From Desktop Timer
		 * RECALCULATE timesheet activity
		 */
		for await (const timeLog of newTimeSlot.timeLogs) {
			await this.commandBus.execute(new TimesheetRecalculateCommand(timeLog.timesheetId));
		}

		/**
		 * UPDATE employee total worked hours
		 */
		if (newTimeSlot.employeeId) {
			await this.commandBus.execute(new UpdateEmployeeTotalWorkedHoursCommand(newTimeSlot.employeeId));
		}
	}
}
