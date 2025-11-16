/**
 * @file Package.json schema definition
 */

import { z } from "zod"

/**
 * Schema for package.json structure
 */
export const PackageJsonSchema = z.object({
	version: z.string(),
})

/**
 * Inferred type from PackageJsonSchema
 */
export type PackageJson = z.infer<typeof PackageJsonSchema>
