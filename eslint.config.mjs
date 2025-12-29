// eslint.config.js
import { defineConfig } from "eslint/config";

export default defineConfig([
	{
		rules: {
			'comma-dangle': [1, 'only-multiline'],
			'indent': ['error', 2, {MemberExpression: 1 }],
			'space-before-function-paren': 0
		},
	},
]);
