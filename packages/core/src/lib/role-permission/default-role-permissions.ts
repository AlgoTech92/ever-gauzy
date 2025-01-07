import { PermissionsEnum, RolesEnum } from '@gauzy/contracts';

export const DEFAULT_ROLE_PERMISSIONS = [
	{
		role: RolesEnum.SUPER_ADMIN,
		defaultEnabledPermissions: [
			PermissionsEnum.ADMIN_DASHBOARD_VIEW,
			PermissionsEnum.TEAM_DASHBOARD,
			PermissionsEnum.PROJECT_MANAGEMENT_DASHBOARD,
			PermissionsEnum.TIME_TRACKING_DASHBOARD,
			PermissionsEnum.ACCOUNTING_DASHBOARD,
			PermissionsEnum.HUMAN_RESOURCE_DASHBOARD,
			PermissionsEnum.ORG_PAYMENT_VIEW,
			PermissionsEnum.ORG_PAYMENT_ADD_EDIT,
			PermissionsEnum.ORG_INCOMES_VIEW,
			PermissionsEnum.ORG_INCOMES_EDIT,
			PermissionsEnum.ORG_EXPENSES_VIEW,
			PermissionsEnum.ORG_EXPENSES_EDIT,
			PermissionsEnum.EMPLOYEE_EXPENSES_VIEW,
			PermissionsEnum.EMPLOYEE_EXPENSES_EDIT,
			PermissionsEnum.ORG_PROPOSALS_VIEW,
			PermissionsEnum.ORG_PROPOSALS_EDIT,
			PermissionsEnum.ORG_PROPOSAL_TEMPLATES_VIEW,
			PermissionsEnum.ORG_PROPOSAL_TEMPLATES_EDIT,
			PermissionsEnum.ORG_TASK_ADD,
			PermissionsEnum.ORG_TASK_VIEW,
			PermissionsEnum.ORG_TASK_EDIT,
			PermissionsEnum.ORG_TASK_DELETE,
			/** Organization Task Setting Permissions Start */
			PermissionsEnum.ORG_TASK_SETTING,
			/** Organization Task Setting Permissions End */
			/** Employee CRUD Permissions Start */
			PermissionsEnum.ORG_EMPLOYEES_ADD,
			PermissionsEnum.ORG_EMPLOYEES_VIEW,
			PermissionsEnum.ORG_EMPLOYEES_EDIT,
			PermissionsEnum.ORG_EMPLOYEES_DELETE,
			/** Employee CRUD Permissions End */
			/** Member View Permissions Start */
			PermissionsEnum.ORG_MEMBERS_VIEW,
			/** Member View Permissions End */
			PermissionsEnum.ORG_CANDIDATES_VIEW,
			PermissionsEnum.ORG_CANDIDATES_EDIT,
			PermissionsEnum.ORG_CANDIDATES_TASK_EDIT,
			PermissionsEnum.ORG_CANDIDATES_INTERVIEW_EDIT,
			PermissionsEnum.ORG_CANDIDATES_INTERVIEW_VIEW,
			PermissionsEnum.ORG_CANDIDATES_INTERVIEWERS_EDIT,
			PermissionsEnum.ORG_CANDIDATES_INTERVIEWERS_VIEW,
			PermissionsEnum.ORG_INVENTORY_VIEW,
			PermissionsEnum.ORG_INVENTORY_PRODUCT_EDIT,
			PermissionsEnum.ORG_CANDIDATES_DOCUMENTS_VIEW,
			PermissionsEnum.ORG_HELP_CENTER_EDIT,
			PermissionsEnum.ORG_USERS_VIEW,
			PermissionsEnum.ORG_USERS_EDIT,
			PermissionsEnum.ALL_ORG_VIEW,
			PermissionsEnum.ALL_ORG_EDIT,
			/** Equipment Sharing Policy Permissions Start */
			PermissionsEnum.EQUIPMENT_SHARING_POLICY_ADD,
			PermissionsEnum.EQUIPMENT_SHARING_POLICY_VIEW,
			PermissionsEnum.EQUIPMENT_SHARING_POLICY_EDIT,
			PermissionsEnum.EQUIPMENT_SHARING_POLICY_DELETE,
			/** Equipment Sharing Policy Permissions End */
			PermissionsEnum.APPROVAL_POLICY_EDIT,
			PermissionsEnum.APPROVAL_POLICY_VIEW,
			PermissionsEnum.REQUEST_APPROVAL_EDIT,
			PermissionsEnum.REQUEST_APPROVAL_VIEW,
			/** Time Off Permissions Start */
			PermissionsEnum.TIME_OFF_ADD,
			PermissionsEnum.TIME_OFF_VIEW,
			PermissionsEnum.TIME_OFF_EDIT,
			PermissionsEnum.TIME_OFF_DELETE,
			/** Time Off Permissions End */
			PermissionsEnum.CHANGE_SELECTED_EMPLOYEE,
			PermissionsEnum.CHANGE_SELECTED_CANDIDATE,
			PermissionsEnum.CHANGE_SELECTED_ORGANIZATION,
			PermissionsEnum.CHANGE_ROLES_PERMISSIONS,
			PermissionsEnum.ORG_INVITE_VIEW,
			PermissionsEnum.ORG_INVITE_EDIT,
			PermissionsEnum.ACCESS_PRIVATE_PROJECTS,
			PermissionsEnum.TIMESHEET_EDIT_TIME,
			PermissionsEnum.SUPER_ADMIN_EDIT,
			PermissionsEnum.PUBLIC_PAGE_EDIT,
			PermissionsEnum.INVOICES_VIEW,
			PermissionsEnum.INVOICES_EDIT,
			PermissionsEnum.ESTIMATES_VIEW,
			PermissionsEnum.ESTIMATES_EDIT,
			PermissionsEnum.ORG_CANDIDATES_FEEDBACK_EDIT,
			/** Tags Permissions Start */
			PermissionsEnum.ORG_TAGS_ADD,
			PermissionsEnum.ORG_TAGS_VIEW,
			PermissionsEnum.ORG_TAGS_EDIT,
			PermissionsEnum.ORG_TAGS_DELETE,
			/** Tags Permissions End */
			/** Tags Types Permissions Start */
			PermissionsEnum.ORG_TAG_TYPES_ADD,
			PermissionsEnum.ORG_TAG_TYPES_VIEW,
			PermissionsEnum.ORG_TAG_TYPES_EDIT,
			PermissionsEnum.ORG_TAG_TYPES_DELETE,
			/** Tags Types Permissions End */
			PermissionsEnum.ORG_TAGS_VIEW,
			PermissionsEnum.ORG_TAGS_EDIT,
			PermissionsEnum.ORG_TAGS_DELETE,
			PermissionsEnum.VIEW_ALL_EMAILS,
			PermissionsEnum.VIEW_ALL_EMAIL_TEMPLATES,
			PermissionsEnum.VIEW_SALES_PIPELINES,
			PermissionsEnum.EDIT_SALES_PIPELINES,
			PermissionsEnum.CAN_APPROVE_TIMESHEET,
			PermissionsEnum.ORG_SPRINT_ADD,
			PermissionsEnum.ORG_SPRINT_EDIT,
			PermissionsEnum.ORG_SPRINT_VIEW,
			PermissionsEnum.ORG_SPRINT_DELETE,
			PermissionsEnum.ORG_PROJECT_ADD,
			PermissionsEnum.ORG_PROJECT_VIEW,
			PermissionsEnum.ORG_PROJECT_EDIT,
			PermissionsEnum.ORG_PROJECT_DELETE,
			PermissionsEnum.ORG_CONTACT_EDIT,
			PermissionsEnum.ORG_CONTACT_VIEW,
			/** Daily CRUD Permissions Start */
			PermissionsEnum.DAILY_PLAN_CREATE,
			PermissionsEnum.DAILY_PLAN_READ,
			PermissionsEnum.DAILY_PLAN_UPDATE,
			PermissionsEnum.DAILY_PLAN_DELETE,
			/** Daily CRUD Permissions End */
			/** Project Module Permissions start */
			PermissionsEnum.PROJECT_MODULE_CREATE,
			PermissionsEnum.PROJECT_MODULE_READ,
			PermissionsEnum.PROJECT_MODULE_UPDATE,
			PermissionsEnum.PROJECT_MODULE_DELETE,
			/** Project Module Permissions end */
			/** Dashboard Permissions Start */
			PermissionsEnum.DASHBOARD_CREATE,
			PermissionsEnum.DASHBOARD_READ,
			PermissionsEnum.DASHBOARD_UPDATE,
			PermissionsEnum.DASHBOARD_DELETE,
			/** Dashboard Permissions End */
			/** Organization Team */
			PermissionsEnum.ORG_TEAM_ADD,
			PermissionsEnum.ORG_TEAM_VIEW,
			PermissionsEnum.ORG_TEAM_EDIT,
			PermissionsEnum.ORG_TEAM_DELETE,
			PermissionsEnum.ORG_TEAM_EDIT_ACTIVE_TASK,
			PermissionsEnum.ORG_TEAM_REMOVE_ACCOUNT_AS_MEMBER,
			PermissionsEnum.ORG_TEAM_JOIN_REQUEST_VIEW,
			PermissionsEnum.ORG_TEAM_JOIN_REQUEST_EDIT,
			PermissionsEnum.ORG_CONTRACT_EDIT,
			PermissionsEnum.EVENT_TYPES_VIEW,
			PermissionsEnum.TENANT_ADD_EXISTING_USER,
			/** Integration CRUD Permissions Start */
			PermissionsEnum.INTEGRATION_ADD,
			PermissionsEnum.INTEGRATION_VIEW,
			PermissionsEnum.INTEGRATION_EDIT,
			PermissionsEnum.INTEGRATION_DELETE,
			/** Integration CRUD Permissions End */
			PermissionsEnum.IMPORT_ADD,
			PermissionsEnum.EXPORT_ADD,
			PermissionsEnum.FILE_STORAGE_VIEW,
			PermissionsEnum.PAYMENT_GATEWAY_VIEW,
			PermissionsEnum.SMS_GATEWAY_VIEW,
			PermissionsEnum.CUSTOM_SMTP_VIEW,
			/** Job Post Permissions Start */
			PermissionsEnum.ORG_JOB_EMPLOYEE_VIEW,
			PermissionsEnum.ORG_JOB_MATCHING_VIEW,
			PermissionsEnum.ORG_JOB_SEARCH,
			PermissionsEnum.ORG_JOB_APPLY,
			PermissionsEnum.ORG_JOB_EDIT,
			/** Job Post Permissions End */
			PermissionsEnum.ORG_EQUIPMENT_VIEW,
			PermissionsEnum.ORG_EQUIPMENT_EDIT,
			PermissionsEnum.ORG_EQUIPMENT_SHARING_VIEW,
			PermissionsEnum.ORG_EQUIPMENT_SHARING_EDIT,
			PermissionsEnum.EQUIPMENT_MAKE_REQUEST,
			PermissionsEnum.EQUIPMENT_APPROVE_REQUEST,
			PermissionsEnum.ORG_PRODUCT_TYPES_VIEW,
			PermissionsEnum.ORG_PRODUCT_TYPES_EDIT,
			PermissionsEnum.ORG_PRODUCT_CATEGORIES_VIEW,
			PermissionsEnum.ORG_PRODUCT_CATEGORIES_EDIT,
			PermissionsEnum.VIEW_ALL_ACCOUNTING_TEMPLATES,
			PermissionsEnum.MIGRATE_GAUZY_CLOUD,
			PermissionsEnum.INVENTORY_GALLERY_ADD,
			PermissionsEnum.INVENTORY_GALLERY_VIEW,
			PermissionsEnum.INVENTORY_GALLERY_EDIT,
			PermissionsEnum.INVENTORY_GALLERY_DELETE,
			PermissionsEnum.MEDIA_GALLERY_ADD,
			PermissionsEnum.MEDIA_GALLERY_VIEW,
			PermissionsEnum.MEDIA_GALLERY_EDIT,
			PermissionsEnum.MEDIA_GALLERY_DELETE,
			PermissionsEnum.ACCESS_DELETE_ACCOUNT,
			PermissionsEnum.ACCESS_DELETE_ALL_DATA,
			PermissionsEnum.PROFILE_EDIT,
			PermissionsEnum.TIME_TRACKER,
			PermissionsEnum.TENANT_SETTING,
			PermissionsEnum.ALLOW_DELETE_TIME,
			PermissionsEnum.ALLOW_MODIFY_TIME,
			PermissionsEnum.ALLOW_MANUAL_TIME,
			PermissionsEnum.DELETE_SCREENSHOTS,
			PermissionsEnum.ORG_MEMBER_LAST_LOG_VIEW,
			/** API Call Log */
			PermissionsEnum.API_CALL_LOG_READ,
			PermissionsEnum.API_CALL_LOG_DELETE
		]
	},
	{
		role: RolesEnum.ADMIN,
		defaultEnabledPermissions: [
			PermissionsEnum.ADMIN_DASHBOARD_VIEW,
			PermissionsEnum.TEAM_DASHBOARD,
			PermissionsEnum.PROJECT_MANAGEMENT_DASHBOARD,
			PermissionsEnum.TIME_TRACKING_DASHBOARD,
			PermissionsEnum.ACCOUNTING_DASHBOARD,
			PermissionsEnum.HUMAN_RESOURCE_DASHBOARD,
			PermissionsEnum.ORG_PAYMENT_VIEW,
			PermissionsEnum.ORG_PAYMENT_ADD_EDIT,
			PermissionsEnum.ORG_INCOMES_VIEW,
			PermissionsEnum.ORG_INCOMES_EDIT,
			PermissionsEnum.ORG_EXPENSES_VIEW,
			PermissionsEnum.ORG_EXPENSES_EDIT,
			PermissionsEnum.EMPLOYEE_EXPENSES_VIEW,
			PermissionsEnum.EMPLOYEE_EXPENSES_EDIT,
			PermissionsEnum.ORG_PROPOSALS_VIEW,
			PermissionsEnum.ORG_PROPOSALS_EDIT,
			PermissionsEnum.ORG_PROPOSAL_TEMPLATES_VIEW,
			PermissionsEnum.ORG_PROPOSAL_TEMPLATES_EDIT,
			PermissionsEnum.ORG_TASK_ADD,
			PermissionsEnum.ORG_TASK_VIEW,
			PermissionsEnum.ORG_TASK_EDIT,
			PermissionsEnum.ORG_TASK_DELETE,
			/** Organization Task Setting */
			PermissionsEnum.ORG_TASK_SETTING,
			/** Employee CRUD Permissions Start */
			PermissionsEnum.ORG_EMPLOYEES_ADD,
			PermissionsEnum.ORG_EMPLOYEES_VIEW,
			PermissionsEnum.ORG_EMPLOYEES_EDIT,
			PermissionsEnum.ORG_EMPLOYEES_DELETE,
			/** Employee CRUD Permissions End */
			/** Member View Permissions Start */
			PermissionsEnum.ORG_MEMBERS_VIEW,
			/** Member View Permissions End */
			PermissionsEnum.ORG_EMPLOYEES_EDIT,
			PermissionsEnum.ORG_CANDIDATES_VIEW,
			PermissionsEnum.ORG_CANDIDATES_EDIT,
			PermissionsEnum.ORG_CANDIDATES_TASK_EDIT,
			PermissionsEnum.ORG_CANDIDATES_INTERVIEW_EDIT,
			PermissionsEnum.ORG_CANDIDATES_INTERVIEW_VIEW,
			PermissionsEnum.ORG_CANDIDATES_INTERVIEWERS_EDIT,
			PermissionsEnum.ORG_CANDIDATES_INTERVIEWERS_VIEW,
			PermissionsEnum.ORG_INVENTORY_VIEW,
			PermissionsEnum.ORG_INVENTORY_PRODUCT_EDIT,
			PermissionsEnum.ORG_CANDIDATES_DOCUMENTS_VIEW,
			PermissionsEnum.ORG_HELP_CENTER_EDIT,
			PermissionsEnum.ORG_USERS_VIEW,
			PermissionsEnum.ORG_USERS_EDIT,
			PermissionsEnum.ALL_ORG_VIEW,
			PermissionsEnum.ALL_ORG_EDIT,
			/** Equipment Sharing Policy Permissions Start */
			PermissionsEnum.EQUIPMENT_SHARING_POLICY_ADD,
			PermissionsEnum.EQUIPMENT_SHARING_POLICY_VIEW,
			PermissionsEnum.EQUIPMENT_SHARING_POLICY_EDIT,
			PermissionsEnum.EQUIPMENT_SHARING_POLICY_DELETE,
			/** Equipment Sharing Policy Permissions End */
			PermissionsEnum.APPROVAL_POLICY_EDIT,
			PermissionsEnum.APPROVAL_POLICY_VIEW,
			PermissionsEnum.REQUEST_APPROVAL_EDIT,
			PermissionsEnum.REQUEST_APPROVAL_VIEW,
			/** Time Off Permissions Start */
			PermissionsEnum.TIME_OFF_ADD,
			PermissionsEnum.TIME_OFF_VIEW,
			PermissionsEnum.TIME_OFF_EDIT,
			PermissionsEnum.TIME_OFF_DELETE,
			/** Time Off Permissions End */
			PermissionsEnum.CHANGE_SELECTED_EMPLOYEE,
			PermissionsEnum.CHANGE_SELECTED_CANDIDATE,
			PermissionsEnum.CHANGE_SELECTED_ORGANIZATION,
			PermissionsEnum.CHANGE_ROLES_PERMISSIONS,
			PermissionsEnum.ORG_INVITE_VIEW,
			PermissionsEnum.ORG_INVITE_EDIT,
			PermissionsEnum.ACCESS_PRIVATE_PROJECTS,
			PermissionsEnum.TIMESHEET_EDIT_TIME,
			PermissionsEnum.PUBLIC_PAGE_EDIT,
			PermissionsEnum.INVOICES_VIEW,
			PermissionsEnum.INVOICES_EDIT,
			PermissionsEnum.ESTIMATES_VIEW,
			PermissionsEnum.ESTIMATES_EDIT,
			PermissionsEnum.ORG_CANDIDATES_FEEDBACK_EDIT,
			/** Tags Permissions Start */
			PermissionsEnum.ORG_TAGS_ADD,
			PermissionsEnum.ORG_TAGS_VIEW,
			PermissionsEnum.ORG_TAGS_EDIT,
			PermissionsEnum.ORG_TAGS_DELETE,
			/** Tags Permissions End */
			/** Tags Types Permissions Start */
			PermissionsEnum.ORG_TAG_TYPES_ADD,
			PermissionsEnum.ORG_TAG_TYPES_VIEW,
			PermissionsEnum.ORG_TAG_TYPES_EDIT,
			PermissionsEnum.ORG_TAG_TYPES_DELETE,
			/** Tags Types Permissions End */
			PermissionsEnum.VIEW_ALL_EMAILS,
			PermissionsEnum.VIEW_ALL_EMAIL_TEMPLATES,
			PermissionsEnum.VIEW_SALES_PIPELINES,
			PermissionsEnum.EDIT_SALES_PIPELINES,
			PermissionsEnum.CAN_APPROVE_TIMESHEET,
			PermissionsEnum.ORG_SPRINT_ADD,
			PermissionsEnum.ORG_SPRINT_EDIT,
			PermissionsEnum.ORG_SPRINT_VIEW,
			PermissionsEnum.ORG_SPRINT_DELETE,
			PermissionsEnum.ORG_PROJECT_ADD,
			PermissionsEnum.ORG_PROJECT_VIEW,
			PermissionsEnum.ORG_PROJECT_EDIT,
			PermissionsEnum.ORG_PROJECT_DELETE,
			PermissionsEnum.ORG_CONTACT_EDIT,
			PermissionsEnum.ORG_CONTACT_VIEW,

			/** Daily CRUD Permissions Start */
			PermissionsEnum.DAILY_PLAN_CREATE,
			PermissionsEnum.DAILY_PLAN_READ,
			PermissionsEnum.DAILY_PLAN_UPDATE,
			PermissionsEnum.DAILY_PLAN_DELETE,
			/** Daily CRUD Permissions End */

			/** Project Module Permissions start */
			PermissionsEnum.PROJECT_MODULE_CREATE,
			PermissionsEnum.PROJECT_MODULE_READ,
			PermissionsEnum.PROJECT_MODULE_UPDATE,
			PermissionsEnum.PROJECT_MODULE_DELETE,
			/** Project Module Permissions end */

			/** Dashboard Permissions Start */
			PermissionsEnum.DASHBOARD_CREATE,
			PermissionsEnum.DASHBOARD_READ,
			PermissionsEnum.DASHBOARD_UPDATE,
			PermissionsEnum.DASHBOARD_DELETE,
			/** Dashboard Permissions End */

			/** Organization Team */
			PermissionsEnum.ORG_TEAM_ADD,
			PermissionsEnum.ORG_TEAM_VIEW,
			PermissionsEnum.ORG_TEAM_EDIT,
			PermissionsEnum.ORG_TEAM_EDIT_ACTIVE_TASK,
			PermissionsEnum.ORG_TEAM_DELETE,
			PermissionsEnum.ORG_TEAM_REMOVE_ACCOUNT_AS_MEMBER,
			PermissionsEnum.ORG_TEAM_JOIN_REQUEST_VIEW,
			PermissionsEnum.ORG_TEAM_JOIN_REQUEST_EDIT,
			PermissionsEnum.ORG_CONTRACT_EDIT,
			PermissionsEnum.EVENT_TYPES_VIEW,
			PermissionsEnum.TENANT_ADD_EXISTING_USER,

			/** Integration CRUD Permissions Start */
			PermissionsEnum.INTEGRATION_ADD,
			PermissionsEnum.INTEGRATION_VIEW,
			PermissionsEnum.INTEGRATION_EDIT,
			PermissionsEnum.INTEGRATION_DELETE,
			/** Integration CRUD Permissions End */

			PermissionsEnum.IMPORT_ADD,
			PermissionsEnum.EXPORT_ADD,
			PermissionsEnum.FILE_STORAGE_VIEW,
			PermissionsEnum.PAYMENT_GATEWAY_VIEW,
			PermissionsEnum.SMS_GATEWAY_VIEW,
			PermissionsEnum.CUSTOM_SMTP_VIEW,
			/** Job Post Permissions Start */
			PermissionsEnum.ORG_JOB_EMPLOYEE_VIEW,
			PermissionsEnum.ORG_JOB_MATCHING_VIEW,
			PermissionsEnum.ORG_JOB_SEARCH,
			PermissionsEnum.ORG_JOB_APPLY,
			PermissionsEnum.ORG_JOB_EDIT,
			/** Job Post Permissions End */
			PermissionsEnum.ORG_EQUIPMENT_VIEW,
			PermissionsEnum.ORG_EQUIPMENT_EDIT,
			PermissionsEnum.ORG_EQUIPMENT_SHARING_VIEW,
			PermissionsEnum.ORG_EQUIPMENT_SHARING_EDIT,
			PermissionsEnum.EQUIPMENT_MAKE_REQUEST,
			PermissionsEnum.EQUIPMENT_APPROVE_REQUEST,
			PermissionsEnum.ORG_PRODUCT_TYPES_VIEW,
			PermissionsEnum.ORG_PRODUCT_TYPES_EDIT,
			PermissionsEnum.ORG_PRODUCT_CATEGORIES_VIEW,
			PermissionsEnum.ORG_PRODUCT_CATEGORIES_EDIT,
			PermissionsEnum.VIEW_ALL_ACCOUNTING_TEMPLATES,
			PermissionsEnum.MIGRATE_GAUZY_CLOUD,
			PermissionsEnum.INVENTORY_GALLERY_ADD,
			PermissionsEnum.INVENTORY_GALLERY_VIEW,
			PermissionsEnum.INVENTORY_GALLERY_EDIT,
			PermissionsEnum.INVENTORY_GALLERY_DELETE,
			PermissionsEnum.MEDIA_GALLERY_ADD,
			PermissionsEnum.MEDIA_GALLERY_VIEW,
			PermissionsEnum.MEDIA_GALLERY_EDIT,
			PermissionsEnum.MEDIA_GALLERY_DELETE,
			PermissionsEnum.ACCESS_DELETE_ACCOUNT,
			PermissionsEnum.ACCESS_DELETE_ALL_DATA,
			PermissionsEnum.PROFILE_EDIT,
			PermissionsEnum.TIME_TRACKER,
			PermissionsEnum.TENANT_SETTING,
			PermissionsEnum.ALLOW_DELETE_TIME,
			PermissionsEnum.ALLOW_MODIFY_TIME,
			PermissionsEnum.ALLOW_MANUAL_TIME,
			PermissionsEnum.DELETE_SCREENSHOTS,
			PermissionsEnum.ORG_MEMBER_LAST_LOG_VIEW,
			/** API Call Log */
			PermissionsEnum.API_CALL_LOG_READ,
			PermissionsEnum.API_CALL_LOG_DELETE
		]
	},
	{
		role: RolesEnum.DATA_ENTRY,
		defaultEnabledPermissions: [
			PermissionsEnum.ORG_PAYMENT_VIEW,
			PermissionsEnum.ORG_PAYMENT_ADD_EDIT,
			PermissionsEnum.ORG_EXPENSES_EDIT,
			PermissionsEnum.ORG_EXPENSES_VIEW,
			PermissionsEnum.ORG_INCOMES_EDIT,
			PermissionsEnum.ORG_INCOMES_VIEW,
			PermissionsEnum.CHANGE_SELECTED_ORGANIZATION,
			PermissionsEnum.INVOICES_VIEW,
			PermissionsEnum.INVOICES_EDIT,
			PermissionsEnum.ESTIMATES_VIEW,
			PermissionsEnum.ESTIMATES_EDIT,
			PermissionsEnum.ORG_TASK_ADD,
			PermissionsEnum.ORG_TASK_VIEW,
			PermissionsEnum.ORG_TASK_EDIT,
			PermissionsEnum.ORG_TASK_DELETE,
			PermissionsEnum.PROJECT_MODULE_CREATE,
			PermissionsEnum.PROJECT_MODULE_READ,
			PermissionsEnum.PROJECT_MODULE_UPDATE,
			PermissionsEnum.PROJECT_MODULE_DELETE,
			PermissionsEnum.DASHBOARD_CREATE,
			PermissionsEnum.DASHBOARD_READ,
			PermissionsEnum.DASHBOARD_UPDATE,
			PermissionsEnum.DASHBOARD_DELETE,
			PermissionsEnum.ORG_CANDIDATES_TASK_EDIT,
			PermissionsEnum.ORG_CANDIDATES_INTERVIEW_EDIT,
			PermissionsEnum.ORG_CANDIDATES_INTERVIEW_VIEW,
			PermissionsEnum.ORG_CANDIDATES_INTERVIEWERS_EDIT,
			PermissionsEnum.ORG_CANDIDATES_INTERVIEWERS_VIEW,
			PermissionsEnum.ORG_INVENTORY_PRODUCT_EDIT,
			PermissionsEnum.ORG_HELP_CENTER_EDIT,
			PermissionsEnum.PROFILE_EDIT
		]
	},
	{
		role: RolesEnum.EMPLOYEE,
		defaultEnabledPermissions: [
			PermissionsEnum.ADMIN_DASHBOARD_VIEW,
			PermissionsEnum.PROJECT_MANAGEMENT_DASHBOARD,
			PermissionsEnum.TIME_TRACKING_DASHBOARD,
			PermissionsEnum.HUMAN_RESOURCE_DASHBOARD,
			PermissionsEnum.ORG_PROPOSALS_VIEW,
			PermissionsEnum.ORG_PROPOSALS_EDIT,
			PermissionsEnum.ORG_PROPOSAL_TEMPLATES_VIEW,
			PermissionsEnum.ORG_PROPOSAL_TEMPLATES_EDIT,
			/** Time Off Permissions Start */
			PermissionsEnum.TIME_OFF_VIEW,
			/** Time Off Permissions End */
			PermissionsEnum.ORG_INVITE_VIEW,
			PermissionsEnum.ORG_INVITE_EDIT,
			/** Equipment Sharing Policy Permissions Start */
			PermissionsEnum.EQUIPMENT_SHARING_POLICY_VIEW,
			/** Equipment Sharing Policy Permissions End */
			PermissionsEnum.APPROVAL_POLICY_EDIT,
			PermissionsEnum.APPROVAL_POLICY_VIEW,
			PermissionsEnum.REQUEST_APPROVAL_EDIT,
			PermissionsEnum.REQUEST_APPROVAL_VIEW,
			PermissionsEnum.ORG_TASK_ADD,
			PermissionsEnum.ORG_TASK_VIEW,
			PermissionsEnum.ORG_TASK_EDIT,
			/** Member View Permissions Start */
			PermissionsEnum.ORG_MEMBERS_VIEW,
			/** Member View Permissions End */
			PermissionsEnum.ORG_CANDIDATES_TASK_EDIT,
			PermissionsEnum.EVENT_TYPES_VIEW,
			PermissionsEnum.TIME_TRACKER,
			PermissionsEnum.INVOICES_VIEW,
			PermissionsEnum.INVOICES_EDIT,
			PermissionsEnum.ESTIMATES_VIEW,
			PermissionsEnum.ESTIMATES_EDIT,
			PermissionsEnum.ORG_CONTACT_VIEW,
			PermissionsEnum.ORG_PROJECT_ADD,
			PermissionsEnum.ORG_PROJECT_VIEW,
			/** Daily Plan */
			PermissionsEnum.DAILY_PLAN_CREATE,
			PermissionsEnum.DAILY_PLAN_READ,
			PermissionsEnum.DAILY_PLAN_UPDATE,
			PermissionsEnum.DAILY_PLAN_DELETE,
			/** Project Module */
			PermissionsEnum.PROJECT_MODULE_CREATE,
			PermissionsEnum.PROJECT_MODULE_READ,
			PermissionsEnum.PROJECT_MODULE_UPDATE,
			PermissionsEnum.PROJECT_MODULE_DELETE,
			/** Dashboard */
			PermissionsEnum.DASHBOARD_CREATE,
			PermissionsEnum.DASHBOARD_READ,
			PermissionsEnum.DASHBOARD_UPDATE,
			PermissionsEnum.DASHBOARD_DELETE,
			/** Organization Team */
			PermissionsEnum.ORG_TEAM_ADD,
			PermissionsEnum.ORG_TEAM_VIEW,
			PermissionsEnum.ORG_TEAM_EDIT,
			PermissionsEnum.ORG_TEAM_DELETE,
			PermissionsEnum.ORG_TEAM_EDIT_ACTIVE_TASK,
			PermissionsEnum.ORG_TEAM_REMOVE_ACCOUNT_AS_MEMBER,
			PermissionsEnum.ORG_TEAM_JOIN_REQUEST_VIEW,
			/** Tags Permissions Start */
			PermissionsEnum.ORG_TAGS_ADD,
			PermissionsEnum.ORG_TAGS_VIEW,
			PermissionsEnum.ORG_TAGS_EDIT,
			PermissionsEnum.ORG_TAGS_DELETE,
			/** Tags Permissions End */
			/** Tags Types Permissions Start */
			PermissionsEnum.ORG_TAG_TYPES_ADD,
			PermissionsEnum.ORG_TAG_TYPES_VIEW,
			PermissionsEnum.ORG_TAG_TYPES_EDIT,
			PermissionsEnum.ORG_TAG_TYPES_DELETE,
			/** Tags Types Permissions End */
			PermissionsEnum.EMPLOYEE_EXPENSES_VIEW,
			PermissionsEnum.EMPLOYEE_EXPENSES_EDIT,
			PermissionsEnum.INVENTORY_GALLERY_ADD,
			PermissionsEnum.INVENTORY_GALLERY_VIEW,
			PermissionsEnum.INVENTORY_GALLERY_EDIT,
			PermissionsEnum.INVENTORY_GALLERY_DELETE,
			PermissionsEnum.MEDIA_GALLERY_ADD,
			PermissionsEnum.MEDIA_GALLERY_VIEW,
			PermissionsEnum.MEDIA_GALLERY_EDIT,
			PermissionsEnum.MEDIA_GALLERY_DELETE,
			PermissionsEnum.ORG_INVENTORY_VIEW,
			PermissionsEnum.ORG_EQUIPMENT_VIEW,
			PermissionsEnum.ORG_EQUIPMENT_SHARING_VIEW,
			PermissionsEnum.EQUIPMENT_MAKE_REQUEST,
			PermissionsEnum.ORG_PRODUCT_TYPES_VIEW,
			PermissionsEnum.ORG_PRODUCT_CATEGORIES_VIEW,
			PermissionsEnum.ACCESS_DELETE_ACCOUNT,
			PermissionsEnum.PROFILE_EDIT,
			PermissionsEnum.ALLOW_DELETE_TIME,
			PermissionsEnum.ALLOW_MODIFY_TIME,
			PermissionsEnum.ALLOW_MANUAL_TIME,
			PermissionsEnum.DELETE_SCREENSHOTS,
			PermissionsEnum.ORG_MEMBER_LAST_LOG_VIEW
		]
	},
	{
		role: RolesEnum.INTERVIEWER,
		defaultEnabledPermissions: [
			PermissionsEnum.ORG_CANDIDATES_INTERVIEW_EDIT,
			PermissionsEnum.ORG_CANDIDATES_INTERVIEW_VIEW,
			PermissionsEnum.ORG_CANDIDATES_DOCUMENTS_VIEW
		]
	},
	{
		role: RolesEnum.CANDIDATE,
		defaultEnabledPermissions: []
	},
	{
		role: RolesEnum.MANAGER,
		defaultEnabledPermissions: []
	},
	{
		role: RolesEnum.VIEWER,
		defaultEnabledPermissions: []
	}
];
