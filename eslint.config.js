import js from "@eslint/js"
import tseslint from "@typescript-eslint/eslint-plugin"
import tsparser from "@typescript-eslint/parser"
import prettier from "eslint-plugin-prettier"
import jsdoc from "eslint-plugin-jsdoc"
import globals from "globals"

export default [
	{
		ignores: ["dist/**", "node_modules/**"],
	},
	js.configs.recommended,
	{
		files: ["**/*.ts"],
		languageOptions: {
			parser: tsparser,
			parserOptions: {
				ecmaVersion: 2022,
				sourceType: "module",
			},
			globals: {
				...globals.node,
			},
		},
		plugins: {
			"@typescript-eslint": tseslint,
			prettier,
			jsdoc,
		},
		rules: {
			...tseslint.configs.recommended.rules,
			"prettier/prettier": "error",
			"@typescript-eslint/no-unused-vars": "error",
			"jsdoc/require-file-overview": "error",
			"jsdoc/require-jsdoc": [
				"error",
				{
					require: {
						FunctionDeclaration: true,
						MethodDefinition: true,
						ClassDeclaration: true,
						ArrowFunctionExpression: true,
						FunctionExpression: true,
					},
				},
			],
			"prefer-arrow-callback": "error",
			"func-style": ["error", "expression"],
			"@typescript-eslint/consistent-type-definitions": ["error", "type"],
			"no-console": "error",
		},
	},
]
