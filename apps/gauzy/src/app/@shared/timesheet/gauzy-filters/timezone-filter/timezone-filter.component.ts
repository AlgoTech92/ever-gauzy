import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { combineLatest, filter } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as moment from 'moment-timezone';
import { distinctUntilChange } from '@gauzy/ui-sdk/common';
import {
	DEFAULT_TIME_FORMATS,
	IOrganization,
	ISelectedEmployee,
	IUser,
	PermissionsEnum,
	TimeFormatEnum,
	TimeZoneEnum
} from '@gauzy/contracts';
import { Store } from '../../../../@core/services';

@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'ga-timezone-filter',
	templateUrl: './timezone-filter.component.html',
	styleUrls: ['./timezone-filter.component.scss']
})
export class TimezoneFilterComponent implements AfterViewInit, OnInit, OnDestroy {
	timeZoneOptions: { value: TimeZoneEnum; label: string }[] = [
		{ value: TimeZoneEnum.UTC_TIMEZONE, label: 'UTC' },
		{ value: TimeZoneEnum.ORG_TIMEZONE, label: 'Org Timezone' },
		{ value: TimeZoneEnum.MINE_TIMEZONE, label: 'My Timezone' }
	];
	timeFormatsOptions = DEFAULT_TIME_FORMATS;
	selectedTimeFormat: TimeFormatEnum = TimeFormatEnum.FORMAT_12_HOURS;
	selectedTimeZone: TimeZoneEnum = TimeZoneEnum.UTC_TIMEZONE;

	/*
	 * Getter & Setter
	 */
	private _isTimezone: boolean = true;
	get isTimezone(): boolean {
		return this._isTimezone;
	}
	@Input() set isTimezone(value: boolean) {
		this._isTimezone = value;
	}

	/*
	 * Getter & Setter
	 */
	private _isTimeformat: boolean = true;
	get isTimeformat(): boolean {
		return this._isTimeformat;
	}
	@Input() set isTimeformat(value: boolean) {
		this._isTimeformat = value;
	}

	/*
	 * Getter & Setter
	 */
	private _navigate: boolean = true;
	get navigate(): boolean {
		return this._navigate;
	}
	@Input() set navigate(value: boolean) {
		this._navigate = value;
	}

	@Output() timeZoneChange = new EventEmitter<string>();
	@Output() timeFormatChange = new EventEmitter<TimeFormatEnum>();

	constructor(
		private readonly _route: ActivatedRoute,
		private readonly _router: Router,
		private readonly _store: Store
	) {}

	/**
	 *
	 */
	ngOnInit(): void {
		// Extract query parameter
		const queryParams$ = this._route.queryParams.pipe(
			filter((params: Params) => !!params),
			distinctUntilChange()
		);
		const storeOrganization$ = this._store.selectedOrganization$.pipe(
			filter((organization: IOrganization) => !!organization),
			distinctUntilChange()
		);
		const storeEmployee$ = this._store.selectedEmployee$.pipe(
			filter((employee: ISelectedEmployee) => !!employee && !!employee.id),
			filter(() => this._store.hasPermission(PermissionsEnum.CHANGE_SELECTED_EMPLOYEE))
		);

		combineLatest([queryParams$, storeOrganization$])
			.pipe(
				distinctUntilChange(),
				tap(([queryParams, organization]) => {
					console.log('Combined query params and store organization');
					const { time_zone, time_format } = queryParams;
					//
					const permission = this._store.hasPermission(PermissionsEnum.CHANGE_SELECTED_EMPLOYEE);

					// Apply query parameters first
					if (time_format) {
						this.selectTimeFormat(time_format);
					} else if (permission && organization.timeFormat) {
						this.selectTimeFormat(organization.timeFormat);
					}

					// Apply query parameters first
					if (time_zone) {
						this.selectTimeZone(time_zone);
					} else if (permission && organization.timeZone) {
						this.selectTimeZone(TimeZoneEnum.ORG_TIMEZONE);
					}
				}),
				// Handle component lifecycle to avoid memory leaks
				untilDestroyed(this)
			)
			.subscribe();

		storeEmployee$
			.pipe(
				tap((employee: ISelectedEmployee) => {
					console.log('route store employee');
					console.log(employee.timeFormat, employee.timeZone);

					// Only update the time format if it's not present in the query parameters
					if (!this._route.snapshot.queryParamMap.get('time_format') && employee.timeFormat) {
						this.selectTimeFormat(employee.timeFormat);
					}
				}),
				untilDestroyed(this)
			)
			.subscribe();
	}

	ngAfterViewInit() {
		const storeUser$ = this._store.user$.pipe(
			filter((user: IUser) => !!user),
			filter(() => !this._store.hasPermission(PermissionsEnum.CHANGE_SELECTED_EMPLOYEE))
		);
		storeUser$
			.pipe(
				tap((user: IUser) => {
					console.log('route store user');
					if (user.timeFormat) {
						this.selectTimeFormat(user.timeFormat);
					}
					if (user.timeZone) {
						this.selectTimeZone(TimeZoneEnum.MINE_TIMEZONE);
					}
				}),
				untilDestroyed(this)
			)
			.subscribe();
	}

	/**
	 * Sets the selected time format based on the provided time format.
	 *
	 * @param timeFormat The time format to set.
	 */
	selectTimeFormat(timeFormat: TimeFormatEnum): void {
		const is24Hours = timeFormat == TimeFormatEnum.FORMAT_24_HOURS;
		this.selectedTimeFormat = is24Hours ? TimeFormatEnum.FORMAT_24_HOURS : TimeFormatEnum.FORMAT_12_HOURS;
	}

	/**
	 * Sets the selected timezone based on the provided timezone enum value.
	 * @param timeZone The timezone enum value to set.
	 */
	selectTimeZone(timeZone: TimeZoneEnum): void {
		switch (timeZone) {
			case TimeZoneEnum.ORG_TIMEZONE:
			case TimeZoneEnum.MINE_TIMEZONE:
				this.selectedTimeZone = timeZone;
				break;
			default:
				this.selectedTimeZone = TimeZoneEnum.UTC_TIMEZONE;
				break;
		}
	}

	/**
	 * Updates the selected time format and updates the corresponding query parameter.
	 * @param timeFormat The time format to update.
	 */
	async updateSelectedTimeFormat(timeFormat: TimeFormatEnum): Promise<void> {
		// Update the selected time format
		this.selectTimeFormat(timeFormat);

		this.timeFormatChange.emit(timeFormat);

		if (this.navigate) {
			// Update query parameter 'time_format'
			await this._router.navigate([], {
				relativeTo: this._route,
				queryParams: { time_format: timeFormat.toString() },
				queryParamsHandling: 'merge'
			});
		}
	}

	/**
	 * Updates the selected time zone and updates the corresponding query parameter.
	 * @param timeZone The time zone to update.
	 */
	async updateSelectedTimeZone(timeZone: TimeZoneEnum): Promise<void> {
		// Update the selected time zone
		this.selectTimeZone(timeZone);

		this.timeZoneChange.emit(this.getTimeZone(this.selectedTimeZone));

		if (this.navigate) {
			// Update query parameter 'time_zone'
			await this._router.navigate([], {
				relativeTo: this._route,
				queryParams: { time_zone: timeZone.toString() },
				queryParamsHandling: 'merge'
			});
		}
	}

	/**
	 * Retrieves the timezone abbreviation with the region and city for the given zone.
	 * @returns
	 */
	getTimeZoneWithOffset(): string {
		const zone = this.getTimeZone(this.selectedTimeZone);

		let region = '';
		let city = '';

		// Split the zone into region and city if it contains '/'
		if (zone.includes('/')) {
			[region, city] = zone.split('/');
			city = city.replace('_', ' '); // Replace underscores with spaces if any
		} else {
			city = zone;
		}

		// Get the timezone abbreviation
		const offset = moment.tz(zone).format('z');

		// Construct the return string
		return `${offset}: ${region} - ${city}`;
	}

	/**
	 * Gets the time zone based on the selected time zone.
	 * @returns The time zone string.
	 */
	getTimeZone(zone: string): string {
		const defaultTimeZone = 'Etc/UTC';
		let timeZone: string;

		switch (zone) {
			case TimeZoneEnum.MINE_TIMEZONE:
				timeZone = this._store.user?.timeZone || moment.tz.guess();
				break;
			case TimeZoneEnum.ORG_TIMEZONE:
				timeZone = this._store.selectedOrganization?.timeZone || defaultTimeZone;
				break;
			case TimeZoneEnum.UTC_TIMEZONE:
			default:
				timeZone = defaultTimeZone;
				break;
		}
		return timeZone;
	}

	/**
	 *
	 */
	ngOnDestroy(): void {}
}
