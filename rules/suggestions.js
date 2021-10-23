module.exports = {
	rules: {
		'accessor-pairs': 'off',
		'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: false }],
		'block-scoped-var': 'error',
		'camelcase': 'off',
		'capitalized-comments': 'off',
		'class-methods-use-this': 'off',
		'complexity': 'off',
		'consistent-return': 'error',
		'consistent-this': 'off',
		'curly': ['error', 'multi-line', 'consistent'],
		'default-case': ['error', { commentPattern: '^no default$' }],
		'default-case-last': 'error',
		'default-param-last': 'off',
		'dot-notation': ['error', { allowKeywords: true }],
		'eqeqeq': ['error', 'always', { null: 'ignore' }],
		'func-name-matching': 'off',
		'func-names': 'warn',
		'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
		'grouped-accessor-pairs': ['error', 'getBeforeSet'],
		'guard-for-in': 'error',
		'id-denylist': 'off',
		'id-length': 'off',
		'id-match': 'off',
		'init-declarations': 'off',
		'max-classes-per-file': ['error', 1],
		'max-depth': 'off',
		'max-lines': 'off',
		'max-lines-per-function': 'off',
		'max-nested-callbacks': 'off',
		'max-params': 'off',
		'max-statements': 'off',
		'multiline-comment-style': ['off', 'starred-block'],
		'new-cap': 'off',
		'no-alert': 'warn',
		'no-array-constructor': 'error',
		'no-bitwise': 'warn',
		'no-caller': 'error',
		'no-case-declarations': 'error',
		'no-confusing-arrow': ['error', { allowParens: true }],
		'no-console': 'off',
		'no-continue': 'off',
		'no-delete-var': 'error',
		'no-div-regex': 'off',
		'no-else-return': ['error', { allowElseIf: true }],
		'no-empty': 'error',
		'no-empty-function': 'off',
		'no-eq-null': 'off',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-boolean-cast': 'error',
		'no-extra-label': 'error',
		'no-extra-semi': 'error',
		'no-floating-decimal': 'error',
		'no-global-assign': ['error', { exceptions: [] }],
		'no-implicit-coercion': 'off',
		'no-implicit-globals': 'error',
		'no-implied-eval': 'error',
		'no-inline-comments': 'off',
		'no-invalid-this': 'off',
		'no-iterator': 'error',
		'no-label-var': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-lonely-if': 'error',
		'no-loop-func': 'error',
		'no-magic-numbers': 'off',
		'no-mixed-operators': 'off',
		'no-multi-assign': 'off',
		'no-multi-str': 'error',
		'no-negated-condition': 'off',
		'no-nested-ternary': 'off',
		'no-new': 'off',
		'no-new-func': 'error',
		'no-new-object': 'error',
		'no-new-wrappers': 'error',
		'no-nonoctal-decimal-escape': 'error',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': 'error',
		'no-plusplus': 'off',
		'no-proto': 'error',
		'no-redeclare': ['error', { builtinGlobals: true }],
		'no-regex-spaces': 'error',
		'no-restricted-exports': 'off',
		'no-restricted-globals': 'off',
		'no-restricted-imports': 'off',
		'no-restricted-properties': 'off',
		'no-restricted-syntax': 'off',
		'no-return-await': 'off',
		'no-script-url': 'error',
		'no-sequences': 'error',
		'no-shadow': 'off',
		'no-shadow-restricted-names': 'error',
		'no-ternary': 'off',
		'no-throw-literal': 'error',
		'no-undef-init': 'error',
		'no-undefined': 'off',
		'no-underscore-dangle': 'off',
		'no-unneeded-ternary': ['error', { defaultAssignment: true }],
		'no-unused-expressions': 'error',
		'no-unused-labels': 'error',
		'no-useless-call': 'off',
		'no-useless-catch': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-concat': 'error',
		'no-useless-constructor': 'error',
		'no-useless-escape': 'error',
		'no-useless-rename': 'error',
		'no-useless-return': 'error',
		'no-var': 'error',
		'no-void': 'error',
		'no-warning-comments': 'off',
		'no-with': 'error',
		'object-shorthand': 'off', // revisit
		'one-var': ['error', 'never'],
		'one-var-declaration-per-line': ['error', 'always'],
		'operator-assignment': 'off',
		'prefer-arrow-callback': 'off',
		'prefer-const': 'off',
		'prefer-destructuring': 'off',
		'prefer-exponentiation-operator': 'error',
		'prefer-named-capture-group': 'off',
		'prefer-numeric-literals': 'error',
		'prefer-object-spread': 'off',
		'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
		'prefer-regex-literals': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'quote-props': ['error', 'as-needed'],
		'radix': 'error',
		'require-await': 'off',
		'require-unicode-regexp': 'off',
		'require-yield': 'error',
		'sort-imports': ['error', {
			ignoreCase: false,
			ignoreDeclarationSort: false,
			ignoreMemberSort: false,
			memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
		}],
		'sort-keys': 'off',
		'sort-vars': 'off',
		'spaced-comment': 'off',
		strict: 'off',
		'symbol-description': 'error',
		'vars-on-top': 'error',
		'yoda': 'error',
	},
};