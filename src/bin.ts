#!/usr/bin/env node

/**
 * @file CLI entry point for targobank-reader
 */

import { LoggerService, CliService } from "./services/index.js"

const logger = new LoggerService()
const cliService = new CliService(logger)

try {
	const program = await cliService.getProgram()
	await program.parseAsync()
} catch (error) {
	logger.error("CLI error", error instanceof Error ? error : undefined)
	process.exit(1)
}
