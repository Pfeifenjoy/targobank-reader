#!/usr/bin/env node

import { cli } from './cli.js'

cli().catch((error) => {
	console.error(error.message)
	process.exit(1)
})
