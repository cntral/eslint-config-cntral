# CNTRAL's ESLint Configuration

ESLint configuration as preferred by the CNTRAL Family.

We're an opinionated bunch at CNTRAL, or at least some of us are. This collection of ESLint settings and rules are our currently preferred setup when linting for Javascript, particularly with React.

This is a living document so feel free to pull from `main` to get the latest improvements as we update things based on our latest opinions. Otherwise, lock it in to a specific version and upgrade as you see fit.

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
  
  "rules": {
    "no-unused-vars": [ "error", { "argsIgnorePattern": "^_" } ]
  }
}
```


## Publishing New Versions to npm.

You need to publish new versions to npm by doing the following:

1. Ensure `main` is updated with all desired changes and you have a clean working directory.

2. Bump the version with `npm version <major|minor|patch>`.

3. Publish to npm with `npm publish`.

4. Push your changes and make sure you push up the tags with `git push && git push --tags`.

5. Dance!
