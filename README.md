# eslint-config-nixon

## Install

```
npm install eslint-config-nixon --save-dev
```

## Usage

This package contains the following configurations:

- `eslint-config-nixon`
- `eslint-config-nixon/typescript`

### eslint-config-nixon

Contains our standard rules to be used across all projects.

```json
{
  "extends": "eslint-config-nixon"
}
```

### eslint-config-nixon/typescript

Contains rules specific to TypeScript. Requires [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) and [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser)

```
npm install typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
```

#### ESLint Configuration

```json
{
  "extends": "eslint-config-nixon",
  "overrides": [
    {
      "files": ["**/*.ts"],
      "extends": "eslint-config-nixon/typescript",
      "plugins": ["@typescript-eslint"],
      "parser": "@typescript-eslint/parser",
      "parserOptions": {"project": "tsconfig.json"}
    }
  ]
}
```