module.exports = {

  "env": {
    "browser": true,
    "node": true,
    // "commonjs": true,
    "es6": true,
    "jest": true
  },

  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],

  "parser": "babel-eslint",

  "parserOptions": {
    "ecmaFeatures": {
      "classes": true,
      "experimentalObjectRestSpread": true,
      "jsx": true,
      "legacyDecorators": true
    },
    "sourceType": "module"
  },

  "plugins": [
    "react"
  ],

  "rules": {
    "array-bracket-spacing":              [ "warn", "always" ],
    "arrow-body-style":                   [ "warn", "as-needed" ],
    "arrow-spacing":                      [ "warn" ],
    "arrow-parens":                       [ "warn", "as-needed" ],
    "block-spacing":                      [ "warn", "always" ],
    "brace-style":                        [ "warn", "stroustrup" ],
    // "camelcase":                          [ "error" ],
    // "capitalized-comments":               [ "warn", "always" ],
    "comma-dangle":                       [ "warn", "never" ],
    "comma-spacing":                      [ "warn", { "before": false, "after": true } ],
    "comma-style":                        [ "warn", "last" ],
    "computed-property-spacing":          [ "warn", "always" ],
    "default-case":                       [ "error" ],
    "dot-location":                       [ "warn", "property" ],
    "dot-notation":                       [ "warn" ],
    "func-call-spacing":                  [ "warn", "never" ],
    "func-name-matching":                 [ "error", "always" ],
    "indent":                             [ "warn", 2, { "SwitchCase": 1, "MemberExpression": "off" } ],
    "jsx-quotes":                         [ "warn", "prefer-double" ],
    "key-spacing":                        [ "warn", { "align": "value" } ],
    "linebreak-style":                    [ "error", "unix" ],
    "lines-between-class-members":        [ "warn", "always", { "exceptAfterSingleLine": true } ],
    "multiline-comment-style":            [ "warn", "separate-lines" ],
    "no-duplicate-imports":               [ "error" ],
    "no-trailing-spaces":                 [ "warn", { "ignoreComments": true } ],
    "no-unused-vars":                     [ "error", { "argsIgnorePattern": "^_" } ], // Ignore "_variable".
    "no-useless-rename":                  [ "error" ],
    "no-var":                             [ "error" ],
    "no-warning-comments":                [ "warn", { "terms": [ "fixme" ], "location": "anywhere" } ],
    "no-whitespace-before-property":      [ "warn" ],
    "object-curly-spacing":               [ "warn", "always" ],
    "prefer-const":                       [ "error" ],
    "quotes":                             [ "warn", "double", { "avoidEscape": true, "allowTemplateLiterals": true } ],
    "semi":                               [ "error", "always" ],
    // "sort-imports":                       [ "warn" ],
    "space-before-blocks":                [ "warn" ],
    "space-before-function-paren":        [ "warn", { "anonymous": "always", "named": "never", "asyncArrow": "always" } ],
    "space-in-parens":                    [ "warn", "always" ],
    "space-infix-ops":                    [ "warn" ],
    "space-unary-ops":                    [ "warn" ],
    "spaced-comment":                     [ "warn", "always", { "exceptions": [ "/" ] } ],
    "strict":                             [ "error", "global" ],
    "switch-colon-spacing":               [ "warn" ],
    "template-curly-spacing":             [ "warn", "always" ],
    "template-tag-spacing":               [ "warn", "always" ],
    // "react/boolean-prop-naming":          [ "error", { "rule": "^(is|has)[A-Z]([A-Za-z0-9]?)+" } ],
    "react/jsx-closing-bracket-location": [ 1, "after-props" ],
    "react/jsx-curly-spacing":            [ "warn", { "when": "always", "children": true } ],
    "react/jsx-indent-props":             [ "warn", 2 ],
    "react/jsx-max-props-per-line":       [ "warn", { "maximum": 1, "when": "multiline" } ],
    "react/jsx-no-duplicate-props":       [ "error" ],
    "react/jsx-tag-spacing":              [ "warn", { "closingSlash": "never", "beforeSelfClosing": "always", "afterOpening": "never", "beforeClosing": "never" } ],
    "react/jsx-closing-tag-location":     [ "warn" ],
    "react/jsx-indent":                   [ "warn", 2 ],
    "react/no-unescaped-entities":        "off"
  }

};
