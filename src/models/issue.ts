export interface CreateIssueRequest {
	fields: {
		project: {
			key: string;
		};
		summary: string;
		issuetype: {
			name: string;
		};
		description: string;
	};
}

export interface CreateIssueResponse {
	id: string;
	key: string;
	self: string;
}

export interface CustomFieldOption {
	self: string;
	value: string;
	id: string;
	disabled: boolean;
	child?: CustomFieldOption;
}

export interface User {
	self: string;
	name: string;
	key: string;
	emailAddress: string;
	avatarUrls: {
		"48x48": string;
		"24x24": string;
		"16x16": string;
		"32x32": string;
	};
	displayName: string;
	active: boolean;
	timeZone: string;
}

export interface StatusCategory {
	self: string;
	id: number;
	key: string;
	colorName: string;
	name: string;
}

export interface Status {
	self: string;
	description: string;
	iconUrl: string;
	name: string;
	id: string;
	statusCategory: StatusCategory;
}

export interface IssueType {
	self: string;
	id: string;
	description: string;
	iconUrl: string;
	name: string;
	subtask: boolean;
	avatarId: number;
}

export interface Priority {
	self: string;
	iconUrl: string;
	name: string;
	id: string;
}

export interface Project {
	self: string;
	id: string;
	key: string;
	name: string;
	projectTypeKey: string;
	avatarUrls: {
		"48x48": string;
		"24x24": string;
		"16x16": string;
		"32x32": string;
	};
}

export interface Votes {
	self: string;
	votes: number;
	hasVoted: boolean;
}

export interface Worklog {
	startAt: number;
	maxResults: number;
	total: number;
	worklogs: unknown[];
}

export interface Progress {
	progress: number;
	total: number;
}

export interface Comment {
	comments: unknown[];
	maxResults: number;
	total: number;
	startAt: number;
}

export interface Fields {
	[key: string]: unknown; // For custom fields you don’t need now
	summary: string;
	description?: string;
	project?: Project;
	issuetype: IssueType;
	reporter?: User;
	assignee?: User | null;
	priority?: Priority;
	labels?: string[];
	votes?: Votes;
	worklog?: Worklog;
	progress?: Progress;
	comment?: Comment;
	creator: User;
}

export interface JiraIssue {
	expand?: string;
	id: string;
	self: string;
	key: string;
	fields: Fields;
	renderedFields?: unknown | null;
}
