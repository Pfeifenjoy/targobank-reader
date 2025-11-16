import { Command } from 'commander'

export async function cli(): Promise<void> {
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
