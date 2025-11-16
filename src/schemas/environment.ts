/**
 * @file Environment schema definition
 */

import { z } from "zod"

/**
 * Schema for environment variables
 */
export const EnvironmentSchema = z.object({
	NODE_ENV: z.enum(["development", "production", "test"]).default("production"),
})

/**
 * Inferred type from EnvironmentSchema
 */
export type Environment = z.infer<typeof EnvironmentSchema>
