module.exports = {
	rules: {
		'brace-style': 'off',
		'@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],

		'comma-dangle': 'off',
		'@typescript-eslint/comma-dangle': ['error', 'always-multiline'],

		'comma-spacing': 'off',
		'@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],

		'default-param-last': 'off',
		'@typescript-eslint/default-param-last': 'off',

		'dot-notation': 'off',
		'@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],

		'func-call-spacing': 'off',
		'@typescript-eslint/func-call-spacing': ['error', 'never'],

		'init-declarations': 'off',
		'@typescript-eslint/init-declarations': 'off',

		'keyword-spacing': 'off',
		'@typescript-eslint/keyword-spacing': ['error', { before: true, after: true }],

		'lines-between-class-members': 'off',
		'@typescript-eslint/lines-between-class-members': ['error', 'always', {
			exceptAfterSingleLine: false,
		}],

		'no-array-constructor': 'off',
		'@typescript-eslint/no-array-constructor': 'error',

		'no-dupe-class-members': 'off',
		'@typescript-eslint/no-dupe-class-members': 'error',

		'no-duplicate-imports': 'off',
		'@typescript-eslint/no-duplicate-imports': 'error',

		'no-empty-function': 'off',
		'@typescript-eslint/no-empty-function': 'off',

		'no-extra-parens': 'off',
		'@typescript-eslint/no-extra-parens': 'off',

		'no-extra-semi': 'off',
		'@typescript-eslint/no-extra-semi': 'error',

		'no-implied-eval': 'off',
		'@typescript-eslint/no-implied-eval': 'error',

		'no-invalid-this': 'off',
		'@typescript-eslint/no-invalid-this': 'off',

		'no-loop-func': 'off',
		'@typescript-eslint/no-loop-func': 'error',

		'no-magic-numbers': 'off',
		'@typescript-eslint/no-magic-numbers': 'off',

		'no-redeclare': 'off',
		'@typescript-eslint/no-redeclare': ['error', { builtinGlobals: true }],

		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': 'off',

		'no-throw-literal': 'off',
		'@typescript-eslint/no-throw-literal': 'error',

		'no-unused-expressions': 'off',
		'@typescript-eslint/no-unused-expressions': 'error',

		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['error', {
			vars: 'all',
			args: 'after-used',
			ignoreRestSiblings: true,
		}],

		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': ['error', {
			classes: true,
			functions: false,
			variables: true,
		}],

		'no-useless-constructor': 'off',
		'@typescript-eslint/no-useless-constructor': 'error',

		'object-curly-spacing': 'off',
		'@typescript-eslint/object-curly-spacing': ['error', 'always'],

		'padding-line-between-statements': 'off',
		'@typescript-eslint/padding-line-between-statements': 'off',

		'quotes': 'off',
		'@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],

		'require-await': 'off',
		'@typescript-eslint/require-await': 'off',

		'no-return-await': 'off',
		'@typescript-eslint/return-await': 'off',

		'semi': 'off',
		'@typescript-eslint/semi': ['error', 'always'],

		'space-before-function-paren': 'off',
		'@typescript-eslint/space-before-function-paren': ['error', {
			anonymous: 'never',
			asyncArrow: 'always',
			named: 'never',
		}],

		'space-infix-ops': 'off',
		'@typescript-eslint/space-infix-ops': 'error',
	},
};
