import { loadEnv } from "vite";
import { defineConfig } from "vitest/config";

export default defineConfig(({ mode }) => ({
	test: {
		environment: "node",
		env: loadEnv(mode, process.cwd(), ""),
		globals: true,
		reporters: ["default", ["junit", { suiteName: "JIRA API tests" }]],
		outputFile: "testResultReport/vitest-junit.xml",
		setupFiles: ["./src/env.ts"],
	},
}));
