/**
 * @file Tests for MetadataService
 */

import { test, expect } from "@playwright/test"
import { MetadataService } from "../src/services/index.js"

test.describe("MetadataService", () => {
	test("should create metadata service instance", () => {
		const metadataService = new MetadataService()
		expect(metadataService).toBeDefined()
	})

	test("should get metadata with version", async () => {
		const metadataService = new MetadataService()
		const metadata = await metadataService.getMetadata()

		expect(metadata).toBeDefined()
		expect(metadata.version).toBeDefined()
		expect(typeof metadata.version).toBe("string")
	})

	test("should return valid version format", async () => {
		const metadataService = new MetadataService()
		const metadata = await metadataService.getMetadata()

		// Should be semantic version format like "0.1.0"
		expect(metadata.version).toMatch(/^\d+\.\d+\.\d+$/)
	})
})
