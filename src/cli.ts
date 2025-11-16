/**
 * @file Command-line interface implementation
 */

import { Command } from "commander"
import { MetadataService, LoggerService } from "./services/index.js"

/**
 * Main CLI function that sets up and runs the command-line interface
 */
export const cli = async (logger: LoggerService): Promise<void> => {
	const program = new Command()
	const metadataService = new MetadataService()
	const metadata = await metadataService.getMetadata()

	program
		.name("targobank-reader")
		.description("Convert Targobank PDF statements to hledger journal format")
		.version(metadata.version)

	program
		.command("convert")
		.description("Convert PDF statement to hledger format")
		.argument("<file>", "PDF file to convert")
		.option("-o, --output <file>", "Output file (default: stdout)")
		.action(() => {
			logger.info("Not implemented yet")
		})

	await program.parseAsync()
}
