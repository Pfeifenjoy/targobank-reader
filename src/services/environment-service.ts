/**
 * @file Environment service for accessing environment variables
 */

import { EnvironmentSchema, type Environment } from "../schemas/index.js"

/**
 * Service for accessing environment variables
 */
export class EnvironmentService {
	/**
	 * Get the parsed environment
	 */
	getEnvironment(): Environment {
		return EnvironmentSchema.parse(process.env)
	}
}
