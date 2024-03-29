module.exports = {
	rules: {
		'array-callback-return': ['error', { allowImplicit: true }],
		'constructor-super': 'error',
		'for-direction': 'error',
		'getter-return': ['error', { allowImplicit: false }],
		'no-async-promise-executor': 'error',
		'no-await-in-loop': 'off',
		'no-class-assign': 'error',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': 'error',
		'no-const-assign': 'error',
		'no-constant-binary-expression': 'error',
		'no-constant-condition': 'error',
		'no-constructor-return': 'off',
		'no-control-regex': 'error',
		'no-debugger': 'error',
		'no-dupe-args': 'error',
		'no-dupe-class-members': 'error',
		'no-dupe-else-if': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-duplicate-imports': 'error',
		'no-empty-character-class': 'error',
		'no-empty-pattern': 'error',
		'no-ex-assign': 'error',
		'no-fallthrough': 'error',
		'no-func-assign': 'error',
		'no-import-assign': 'error',
		'no-inner-declarations': 'error',
		'no-invalid-regexp': 'error',
		'no-irregular-whitespace': 'error',
		'no-loss-of-precision': 'error',
		'no-misleading-character-class': 'error',
		'no-new-symbol': 'error',
		'no-obj-calls': 'error',
		'no-promise-executor-return': 'error',
		'no-prototype-builtins': 'error',
		'no-self-assign': ['error', { props: true }],
		'no-self-compare': 'error',
		'no-setter-return': 'error',
		'no-sparse-arrays': 'error',
		'no-template-curly-in-string': 'warn',
		'no-this-before-super': 'error',
		'no-undef': 'error',
		'no-unexpected-multiline': 'error',
		'no-unmodified-loop-condition': 'off',
		'no-unreachable': 'error',
		'no-unreachable-loop': 'warn',
		'no-unsafe-finally': 'error',
		'no-unsafe-negation': 'error',
		'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],
		'no-unused-private-class-members': 'off',
		'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
		'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
		'no-useless-backreference': 'error',
		'require-atomic-updates': 'off',
		'use-isnan': 'error',
		'valid-typeof': ['error', { requireStringLiterals: true }],
	},
};
