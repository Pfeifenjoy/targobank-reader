/**
 * @file Logger service using winston
 */

import winston from "winston"
import { type Environment } from "../schemas/index.js"

/**
 * Logger service for application logging
 */
export class LoggerService {
	private logger: winston.Logger

	/**
	 * Create a new logger service instance
	 */
	constructor(environment: Environment) {
		this.logger = winston.createLogger({
			level: "info",
			format: winston.format.combine(
				winston.format.timestamp(),
				winston.format.errors({ stack: true }),
				winston.format.json()
			),
			transports: [
				new winston.transports.Console({
					format: winston.format.simple(),
					silent: environment.NODE_ENV === "test",
				}),
			],
		})
	}

	/**
	 * Log an info message
	 */
	info(message: string): void {
		this.logger.info(message)
	}

	/**
	 * Log an error message
	 */
	error(message: string, error?: Error): void {
		this.logger.error(message, error)
	}

	/**
	 * Log a debug message
	 */
	debug(message: string): void {
		this.logger.debug(message)
	}
}
