import { describe, it, expect, beforeAll } from 'vitest';
import { HttpClient } from '../src/httpClient';
import { createIssuePayload } from './payloads/inputPayloads';

describe('JIRA API', () => {

  const api = new HttpClient();
  const context = {} as { isssueId: string };
  const summary = 'Creating issue for tests - ' + new Date().toISOString();
  console.log('Test Issue Summary:', summary);

  beforeAll(async () => {
    
    createIssuePayload.fields.summary = summary;
    const response = await api.post('issue', createIssuePayload);
    console.log('Created Issue ID:', response.id);
    context.isssueId = response.id;
  });


  it('should return issue by ID', async () => {
    
    const response = await api.get(`issue/${context.isssueId}`);

    expect(response.fields.creator.displayName).toBe('Maksym Klovan');
    expect(response.fields.summary).toBe(`${summary}`);
    expect(response.fields.issuetype.name).toBe('Task');
  });
});
