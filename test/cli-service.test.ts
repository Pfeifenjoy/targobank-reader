/**
 * @file Tests for CliService
 */

import { test, expect } from "@playwright/test"
import {
	CliService,
	LoggerService,
	EnvironmentService,
} from "../src/services/index.js"

test.describe("CliService", () => {
	test("should get program", async () => {
		const environmentService = new EnvironmentService()
		const environment = environmentService.getEnvironment()
		const logger = new LoggerService(environment)
		const cliService = new CliService(logger)

		const program = await cliService.getProgram()
		expect(program).toBeDefined()
		expect(program.name()).toBe("targobank-reader")
	})
})
