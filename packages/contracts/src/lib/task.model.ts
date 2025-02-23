import { IBasePerTenantAndOrganizationEntityModel, IBaseRelationsEntityModel, ID } from './base-entity.model';
import { IEmployee, IEmployeeEntityInput } from './employee.model';
import { IInvoiceItem } from './invoice-item.model';
import { IRelationalOrganizationProject } from './organization-projects.model';
import {
	IOrganizationSprint,
	IRelationalOrganizationSprint,
	IOrganizationSprintTaskHistory
} from './organization-sprint.model';
import { IOrganizationTeam, IRelationalOrganizationTeam } from './organization-team.model';
import { ITag } from './tag.model';
import { IUser } from './user.model';
import { ITaskStatus, TaskStatusEnum } from './task-status.model';
import { ITaskPriority, TaskPriorityEnum } from './task-priority.model';
import { ITaskSize, TaskSizeEnum } from './task-size.model';
import { IOrganizationProjectModule } from './organization-project-module.model';
import { TaskTypeEnum } from './issue-type.model';
import { IMentionUserIds } from './mention.model';

export interface ITask
	extends IBasePerTenantAndOrganizationEntityModel,
		IRelationalOrganizationProject,
		IRelationalOrganizationSprint {
	title: string;
	number?: number;
	public?: boolean;
	prefix?: string;
	description?: string;
	status?: TaskStatusEnum;
	priority?: TaskPriorityEnum;
	size?: TaskSizeEnum;
	startDate?: Date;
	resolvedAt?: Date;
	dueDate?: Date;
	estimate?: number;
	tags?: ITag[];
	members?: IEmployee[];
	invoiceItems?: IInvoiceItem[];
	teams?: IOrganizationTeam[];
	modules?: IOrganizationProjectModule[];
	taskSprints?: IOrganizationSprint[];
	taskSprintHistories?: IOrganizationSprintTaskHistory[];
	creator?: IUser;
	creatorId?: ID;
	isDraft?: boolean; // Define if task is still draft (E.g : Task description not completed yet)
	isScreeningTask?: boolean; // Defines if the task still in discussion before to be accepted

	version?: string;
	issueType?: string;

	parent?: ITask;
	parentId?: ID; // Optional field for specifying the parent task ID
	children?: ITask[];

	taskStatus?: ITaskStatus;
	taskSize?: ITaskSize;
	taskPriority?: ITaskPriority;
	taskStatusId?: ID;
	taskSizeId?: ID;
	taskPriorityId?: ID;

	rootEpic?: ITask;
}

export interface IGetTaskOptions extends IBasePerTenantAndOrganizationEntityModel {
	projectId?: ID;
	isScreeningTask?: boolean;
}

export interface IGetTaskByEmployeeOptions extends IBaseRelationsEntityModel {
	where?: IGetTaskOptions;
}

export type IGetSprintsOptions = IGetTaskOptions;

export enum TaskParticipantEnum {
	EMPLOYEES = 'employees',
	TEAMS = 'teams'
}

export interface ITaskCreateInput extends ITask, IMentionUserIds {}

export interface ITaskUpdateInput extends ITaskCreateInput {
	id?: string;
	taskSprintMoveReason?: string;
}

export interface IGetTaskById {
	includeRootEpic?: boolean;
}

export interface IGetTasksByViewFilters extends IBasePerTenantAndOrganizationEntityModel, ITaskAdvancedFilter {
	statuses?: TaskStatusEnum[];
	priorities?: TaskPriorityEnum[];
	sizes?: TaskSizeEnum[];
	types?: TaskTypeEnum[];
	startDates?: Date[];
	dueDates?: Date[];
}

export interface ITaskDateFilterInput
	extends IBasePerTenantAndOrganizationEntityModel,
		Pick<ITask, 'isScreeningTask' | 'projectId' | 'organizationSprintId' | 'creatorId'>,
		IEmployeeEntityInput,
		IRelationalOrganizationTeam,
		Pick<IGetTasksByViewFilters, 'relations'> {
	startDateFrom?: Date;
	startDateTo?: Date;
	dueDateFrom?: Date;
	dueDateTo?: Date;
}

export interface ITaskAdvancedFilter {
	projects?: ID[];
	teams?: ID[];
	modules?: ID[];
	sprints?: ID[];
	members?: ID[];
	tags?: ID[];
	statusIds?: ID[];
	priorityIds?: ID[];
	sizeIds?: ID[];
	parentIds?: ID[];
	creators?: ID[];
	dailyPlans?: ID[];

	// Relations
	relations?: string[];
}

export interface IAdvancedTaskFiltering {
	filters?: ITaskAdvancedFilter;
}
