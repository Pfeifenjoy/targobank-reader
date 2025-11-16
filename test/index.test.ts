/**
 * @file Tests for main index exports
 */

import { test, expect } from "@playwright/test"
import * as index from "../src/index.js"

test.describe("Index exports", () => {
	test("should import index without errors", () => {
		expect(index).toBeDefined()
	})
})
