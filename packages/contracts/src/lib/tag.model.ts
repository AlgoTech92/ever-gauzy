import { IRelationalOrganizationTeam } from './organization-team.model';
import { IBasePerTenantAndOrganizationEntityModel, ID } from './base-entity.model';

export interface ITaggable {
	tags?: ITag[];
}

export interface ITag extends IBasePerTenantAndOrganizationEntityModel, IRelationalOrganizationTeam {
	name: string;
	color: string;
	textColor?: string;
	icon?: string;
	description?: string;
	isSystem?: boolean;
	tagTypeId?: ID;
	tagType?: ITagType;
}

export interface ITagFindInput extends IBasePerTenantAndOrganizationEntityModel, Pick<ITag, 'organizationTeamId'> {
	name?: string;
	color?: string;
	textColor?: string;
	description?: string;
	isSystem?: boolean;
	tagTypeId?: ID;
}

export interface ITagCreateInput extends ITag {}

export interface ITagType extends IBasePerTenantAndOrganizationEntityModel {
	type: string;
	tags?: ITag[];
}

export interface ITagUpdateInput extends Partial<ITagCreateInput> {
	id?: ID;
}

export interface ITagTypeCreateInput extends ITagType {}
export interface ITagTypeUpdateInput extends Partial<ITagTypeCreateInput> {}

/**
 * Default task tags
 */
export enum TagEnum {
	MOBILE = 'Mobile',
	FRONTEND = 'Frontend',
	BACKEND = 'Backend',
	WEB = 'WEB',
	UI_UX = 'UI/UX',
	FULL_STACK = 'Full-Stack',
	TABLET = 'Tablet',
	BUG = 'Bug'
}
