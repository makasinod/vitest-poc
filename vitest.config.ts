import { defineConfig } from 'vitest/config';
import { loadEnv } from 'vite';

export default defineConfig(({ mode }) => ({
  test: {
    environment: 'node',
    env: loadEnv(mode, process.cwd(), ''),
    globals: true,
    reporters: [
      'default',
      ['junit', { suiteName: 'JIRA API tests'}]
    ],
    outputFile: 'testResultReport/vitest-junit.xml',
    setupFiles: ['./src/env.ts'],
  }
}));
