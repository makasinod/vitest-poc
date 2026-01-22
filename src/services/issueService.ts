import type { HttpClient } from "../httpClient";
import type { CreateIssueRequest, CreateIssueResponse, JiraIssue } from "../models/issue";

export class IssueService {
	constructor(private api: HttpClient) {}

	createIssue(payload: CreateIssueRequest) {
		return this.api.post<CreateIssueResponse, CreateIssueRequest>("issue", payload);
	}

	getIssue(issueId: string) {
		return this.api.get<JiraIssue>(`issue/${issueId}`);
	}
}
