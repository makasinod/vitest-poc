import { beforeAll, describe, expect, it } from "vitest";
import { HttpClient } from "../src/httpClient";
import { IssueService } from "../src/services/issueService";
import { createIssuePayload } from "./payloads/inputPayloads";

const api = new HttpClient();
const issueService = new IssueService(api);

describe("JIRA API", () => {
	const context = {} as { isssueId: string };
	const summary = `Creating issue for tests - ${new Date().toISOString()}`;
	console.log("Test Issue Summary:", summary);

	beforeAll(async () => {
		createIssuePayload.fields.summary = summary;
		const response = await issueService.createIssue(createIssuePayload);
		console.log("Created Issue ID:", response.id);
		context.isssueId = response.id;
	});

	it("should return issue by ID", async () => {
		const ticketResult = await issueService.getIssue(context.isssueId);

		expect(ticketResult.fields.creator.displayName).toBe("Maksym Klovan");
		expect(ticketResult.fields.summary).toBe(`${summary}`);
		expect(ticketResult.fields.issuetype.name).toBe("Task");
	});
});
