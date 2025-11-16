/**
 * @file Service for reading application metadata
 */

import { readFile } from "fs/promises"
import { resolve } from "path"
import { PackageJsonSchema, type PackageJson } from "../schemas/index.js"

/**
 * Service for accessing application metadata
 */
export class MetadataService {
	/**
	 * Get the application metadata
	 */
	async getMetadata(): Promise<PackageJson> {
		const packagePath = resolve("package.json")
		const content = await readFile(packagePath, "utf-8")
		const data = JSON.parse(content)
		return PackageJsonSchema.parse(data)
	}
}
