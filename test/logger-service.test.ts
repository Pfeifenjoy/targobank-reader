/**
 * @file Tests for LoggerService
 */

import { test, expect } from "@playwright/test"
import { LoggerService, EnvironmentService } from "../src/services/index.js"

test.describe("LoggerService", () => {
	test("should create logger instance", () => {
		const environmentService = new EnvironmentService()
		const environment = environmentService.getEnvironment()
		const logger = new LoggerService(environment)
		expect(logger).toBeDefined()
	})

	test("should have info method", () => {
		const environmentService = new EnvironmentService()
		const environment = environmentService.getEnvironment()
		const logger = new LoggerService(environment)
		expect(typeof logger.info).toBe("function")
		logger.info("test message")
	})

	test("should have error method", () => {
		const environmentService = new EnvironmentService()
		const environment = environmentService.getEnvironment()
		const logger = new LoggerService(environment)
		expect(typeof logger.error).toBe("function")
		logger.error("test error")
	})

	test("should have debug method", () => {
		const environmentService = new EnvironmentService()
		const environment = environmentService.getEnvironment()
		const logger = new LoggerService(environment)
		expect(typeof logger.debug).toBe("function")
		logger.debug("test debug")
	})

	test("should handle error with Error object", () => {
		const environmentService = new EnvironmentService()
		const environment = environmentService.getEnvironment()
		const logger = new LoggerService(environment)
		const error = new Error("test error")
		logger.error("test message", error)
	})
})
