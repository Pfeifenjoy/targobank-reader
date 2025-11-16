/**
 * @file Command-line interface implementation
 */

import { Command } from 'commander'

/**
 * Main CLI function that sets up and runs the command-line interface
 */
export const cli = async (): Promise<void> => {
	const program = new Command()

	program
		.name('targobank-reader')
		.description('Convert Targobank PDF statements to hledger journal format')
		.version('0.1.0')

	program
		.command('convert')
		.description('Convert PDF statement to hledger format')
		.argument('<file>', 'PDF file to convert')
		.option('-o, --output <file>', 'Output file (default: stdout)')
		.action(() => {
			console.log('Not implemented yet')
		})

	await program.parseAsync()
}
