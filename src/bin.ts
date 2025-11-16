#!/usr/bin/env node

/**
 * @file CLI entry point for targobank-reader
 */

import { cli } from "./cli.js"
import { LoggerService } from "./services/index.js"

const logger = new LoggerService()

cli(logger).catch((error) => {
	logger.error("CLI error", error)
	process.exit(1)
})
