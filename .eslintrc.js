module.exports = {
  "extends": ['eslint:recommended'],
  rules: {
    "strict": 0,
    // Possible Errors
    "comma-dangle": 2,
    "no-cond-assign": 0,
    "no-console": 0,
    "no-debugger": 2,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty": 2,
    "no-empty-character-class": 2,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 1,
    "no-extra-parens": 0,
    "no-extra-semi": 1,
    "no-inner-declarations": 1,
    "no-invalid-regexp": 1,
    "no-irregular-whitespace": 1,
    "no-obj-calls": 2,
    "no-regex-spaces": 2,
    "no-sparse-arrays": 2,
    "no-unreachable": 2,
    "valid-jsdoc": [
      2,
      {
        "prefer": {
          "return": "returns"
        },
        "requireParamDescription": false,
        "requireReturn": false,
        "requireReturnDescription": false
      }
    ],
    "valid-typeof": 2,
    // Best Practices
    "block-scoped-var": 1,
    "curly": 1,
    "default-case": 1,
    "dot-location": [
      1,
      "property"
    ],
    "dot-notation": 1,
    "eqeqeq": 1,
    "guard-for-in": 1,
    "no-alert": 2,
    "no-caller": 1,
    "no-else-return": 1,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 1,
    "no-floating-decimal": 2,
    "no-implicit-coercion": [
      1,
      {
        "boolean": true,
        "number": false,
        "string": true
      }
    ],
    "no-implied-eval": 2,
    "no-invalid-this": 0,
    "no-loop-func": 0,
    "no-multi-spaces": [
      1,
      {
        "exceptions": {
          "VariableDeclarator": true
        }
      }
    ],
    "no-multi-str": 0,
    "no-native-reassign": 2,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-param-reassign": 0,
    "no-redeclare": 1,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-throw-literal": 2,
    "no-unused-expressions": 1,
    "no-useless-concat": 1,
    "no-void": 2,
    "no-warning-comments": 0,
    "no-with": 1,
    "radix": 2,
    "vars-on-top": 0,
    "wrap-iife": 2,
    "yoda": [
      2,
      "never",
      {
        "exceptRange": true
      }
    ],
    // Variables
    "no-shadow": 1,
    "no-undef": 1,
    "no-undefined": 0,
    "no-unused-vars": [
      0,
      {
        "vars": "all",
        "args": "after-used"
      }
    ],
    "no-use-before-define": 2,
    // Stylistic Issues

    "camelcase": 0,
    "comma-spacing": 1,
    "comma-style": [
      1,
      "last"
    ],
    "consistent-return": 0,
    "consistent-this": [
      1,
      "self"
    ],
    "eol-last": 1,
    "key-spacing": 1,
    "lines-around-comment": [
      0,
      {
        "beforeBlockComment": true,
        "beforeLineComment": true
      }
    ],
    "linebreak-style": [
      1,
      "unix"
    ],
    "max-nested-callbacks": [
      2,
      4
    ],
    "new-cap": 2,
    "new-parens": 2,
    "newline-after-var": 0,
    "no-array-constructor": 2,
    "no-continue": 2,
    "no-lonely-if": 1,
    "no-mixed-spaces-and-tabs": [
      1,
      "smart-tabs"
    ],
    "no-multiple-empty-lines": [
      1,
      {
        "max": 1
      }
    ],
    "no-nested-ternary": 0,
    "no-spaced-func": 1,
    "no-trailing-spaces": 1,
    "no-underscore-dangle": 0,
    "no-unneeded-ternary": 0,
    "object-curly-spacing": [
      1,
      "always"
    ],
    "one-var": 0,
    "padded-blocks": 0,
    "quote-props": [
      1,
      "as-needed"
    ],
    "quotes": [
      1,
      "single"
    ],
    "semi": 1,
    "semi-spacing": [
      1,
      {
        "before": false,
        "after": true
      }
    ]
  }
};
