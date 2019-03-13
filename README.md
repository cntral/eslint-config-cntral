# CNTRAL's ESLint Configuration

ESLint configuration as preferred by the CNTRAL Family.

We're an opinionated bunch at CNTRAL, or at least some of us are. This collection of ESLint settings and rules are our currently preferred setup when linting for Javascript, particularly with React.

This is a living document so feel free to pull from master to get the latest improvements as we update things based on our latest opinions. Otherwise, lock it in to a specific version and upgrade as you see fit.

## Usage

**`package.json`**

```json
"devDependencies": {
  "eslint-config-cntral": "joshuapinter/eslint-config-cntral"
}
```

**`.eslintrc.json`**

```json
{
  "extends": "cntral"
}
```

Then simply `npm install` and now your ESLint configuration is the same as CNTRAL's.

You can overwrite any configuration as you see fit by just adding additional rules to your `.eslintrc.json` file, such as: 

```json
{
  "extends": "cntral",
  
  "rules": [
    "no-unused-vars": [ "error", { "argsIgnorePattern": "^_" } ]
  ]
}
```


