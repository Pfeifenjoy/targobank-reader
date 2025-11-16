#!/usr/bin/env node

/**
 * @file CLI entry point for targobank-reader
 */

import {
	LoggerService,
	CliService,
	EnvironmentService,
} from "./services/index.js"

const environmentService = new EnvironmentService()
const environment = environmentService.getEnvironment()
const logger = new LoggerService(environment)
const cliService = new CliService(logger)

try {
	const program = await cliService.getProgram()
	await program.parseAsync()
} catch (error) {
	logger.error("CLI error", error instanceof Error ? error : undefined)
	process.exit(1)
}
