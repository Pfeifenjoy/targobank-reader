#!/usr/bin/env node

/**
 * @file CLI entry point for targobank-reader
 */

import { cli } from './cli.js'

cli().catch((error) => {
	console.error(error.message)
	process.exit(1)
})
