/**
 * @file CLI service implementation
 */

import { Command } from "commander"
import { MetadataService, LoggerService } from "./index.js"

/**
 * CLI service for command-line interface management
 */
export class CliService {
	/**
	 * Create a new CLI service instance
	 */
	constructor(private logger: LoggerService) {}

	/**
	 * Get the configured commander program
	 */
	async getProgram(): Promise<Command> {
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
				this.logger.info("Not implemented yet")
			})

		return program
	}
}
