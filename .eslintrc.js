module.exports = {
	extends: './index.js',
	env: { node: true },
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		'quote-props': ['error', 'consistent-as-needed'],
	},
};
