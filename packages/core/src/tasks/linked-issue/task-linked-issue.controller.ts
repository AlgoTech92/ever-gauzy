import { Body, Controller, HttpCode, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ID, ITaskLinkedIssue, PermissionsEnum } from '@gauzy/contracts';
import { PermissionGuard, TenantPermissionGuard } from '../../shared/guards';
import { UUIDValidationPipe, UseValidationPipe } from '../../shared/pipes';
import { Permissions } from '../../shared/decorators';
import { CrudController } from '../../core/crud';
import { TaskLinkedIssue } from './task-linked-issue.entity';
import { TaskLinkedIssueService } from './task-linked-issue.service';
import { CreateTaskLinkedIssueDTO, UpdateTaskLinkedIssueDTO } from './dto';
import { TaskLinkedIssueCreateCommand, TaskLinkedIssueUpdateCommand } from './commands';

@ApiTags('Linked Issue')
@UseGuards(TenantPermissionGuard, PermissionGuard)
@Permissions(PermissionsEnum.ALL_ORG_EDIT)
@Controller()
export class TaskLinkedIssueController extends CrudController<TaskLinkedIssue> {
	constructor(
		protected readonly taskLinkedIssueService: TaskLinkedIssueService,
		private readonly commandBus: CommandBus
	) {
		super(taskLinkedIssueService);
	}

	/**
	 * Create new Linked Issue
	 *
	 * @param entity - The input data for creating a task linked issue.
	 */

	@ApiOperation({ summary: 'Create Task Linked Issue' })
	@ApiResponse({
		status: HttpStatus.CREATED,
		description: 'The record has been successfully created.'
	})
	@ApiResponse({
		status: HttpStatus.BAD_REQUEST,
		description: 'Invalid input, The response body may contain clues as to what went wrong'
	})
	@HttpCode(HttpStatus.CREATED)
	@Permissions(PermissionsEnum.ALL_ORG_EDIT, PermissionsEnum.ORG_TASK_ADD)
	@Post()
	@UseValidationPipe({ whitelist: true })
	async create(@Body() entity: CreateTaskLinkedIssueDTO): Promise<ITaskLinkedIssue> {
		return await this.commandBus.execute(new TaskLinkedIssueCreateCommand(entity));
	}

	/**
	 * Update existing Linked Issue
	 *
	 * @param id - The ID of the task linked issue to update.
	 * @param entity - The input data for updating the task linked issue.
	 * @returns
	 */
	@ApiOperation({ summary: 'Update an existing task linked issue' })
	@ApiResponse({
		status: HttpStatus.CREATED,
		description: 'The record has been successfully edited.'
	})
	@ApiResponse({
		status: HttpStatus.NOT_FOUND,
		description: 'Record not found'
	})
	@ApiResponse({
		status: HttpStatus.BAD_REQUEST,
		description: 'Invalid input, The response body may contain clues as to what went wrong'
	})
	@HttpCode(HttpStatus.ACCEPTED)
	@Permissions(PermissionsEnum.ALL_ORG_EDIT, PermissionsEnum.ORG_TASK_EDIT)
	@Put(':id')
	@UseValidationPipe({ whitelist: true })
	async update(
		@Param('id', UUIDValidationPipe) id: ID,
		@Body() entity: UpdateTaskLinkedIssueDTO
	): Promise<ITaskLinkedIssue> {
		return await this.commandBus.execute(new TaskLinkedIssueUpdateCommand(id, entity));
	}
}
