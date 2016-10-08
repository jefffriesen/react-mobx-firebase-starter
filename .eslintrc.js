module.exports = {
  env: {
      browser: true,
      es6: true,
      node: true,
      mocha: true
  },
  globals: {
      React: true,
      expect: true,
      __DEV__: true,
      sinon: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
      ecmaVersion: 6,
      ecmaFeatures: {
          experimentalObjectRestSpread: true,
          jsx: true
      },
      sourceType: 'module'
  },
  plugins: [
      'react'
  ],
  extends: [
      'eslint:recommended',
      'plugin:react/recommended'
  ],
  rules: {
    "brace-style": [0, "1tbs", {"allowSingleLine": true}],
    "comma-dangle": 0,
    "comma-spacing": [1, {"before": false, "after": true}],
    "comma-style": [1, "last"],
    "consistent-this": [1, "self"],
    "curly": [0, "multi"],
    "eqeqeq": [2, "allow-null"],
    "eol-last": 1,
    "guard-for-in": 0,
    "indent": [1, 2, {"SwitchCase": 1}],
    "key-spacing": 0,
    "new-cap": [1, {"capIsNew": false, "newIsCap": true}],
    "new-parens": 0,
    "no-bitwise": 0,
    "no-cond-assign": 1,
    "no-console": 0,
    "no-constant-condition": 0,
    "no-delete-var": 2,
    "no-debugger": 1,
    "no-dupe-keys": 1,
    "no-duplicate-case": 1,
    "no-empty-character-class": 1,
    "no-eval": 1,
    "no-ex-assign": 1,
    "no-extend-native": 1,
    "no-fallthrough": 2,
    "no-floating-decimal": 1,
    "no-func-assign": 1,
    "no-implied-eval": 1,
    "no-inner-declarations": 1,
    "no-invalid-regexp": 1,
    "no-irregular-whitespace": 1,
    "no-iterator": 1,
    "no-labels": 1,
    "no-lonely-if": 1,
    "no-loop-func": 1,
    "no-mixed-spaces-and-tabs": 1,
    "no-native-reassign": 2,
    "no-negated-in-lhs": 1,
    "no-new-func": 1,
    "no-new-object": 1,
    "no-new-wrappers": 2,
    "no-obj-calls": 1,
    "no-octal": 1,
    "no-plusplus": 0,
    "no-proto": 2,
    "no-redeclare": 1,
    "no-return-assign": 1,
    "no-self-compare": 1,
    "no-sequences": 1,
    "no-shadow": 0,
    "no-spaced-func": 1,
    "no-sparse-arrays": 1,
    "no-throw-literal": 1,
    "no-trailing-spaces": 1,
    // "no-unused-vars": 0,
    "no-unused-vars": [1, {"vars": "all", "args": "none"}],
    "no-undef": 2,
    "strict": 0,
    "no-undef-init": 1,
    "no-underscore-dangle": 0,
    "no-unreachable": 1,
    "no-use-before-define": [0, "nofunc"],
    "no-warning-comments": [0, {"terms": ["todo", "fixme"]}],
    "no-extra-parens": 0,
    "quote-props": [0, "as-needed"],
    "radix": 1,
    // Use this rule, if you consider JavaScript semicolons as superfluous:
    "semi": 0,
    "semi-spacing": [1, {"before": false, "after": true}],
    "keyword-spacing": [1, {}],
    "space-before-blocks": [1, "always"],
    "space-before-function-paren": [1, "never"],
    "space-infix-ops": 1,
    "space-in-brackets": 0,
    "space-in-parens": [1, "never"],
    "space-unary-ops": [1, {"words": true, "nonwords": false}],
    "use-isnan": 1,
    "valid-typeof": 1,
    "vars-on-top": 0,  // disabled for now, see github.com/eslint/eslint/issues/2099
    "wrap-iife": [1, "outside"],
    "yoda": 0,
    // Node.js specific
    "handle-callback-err": [1, "^(err|error)$"],
    "no-mixed-requires": 1,
    "no-new-require": 1,
    "no-path-concat": 1,
    // React
    "react/display-name": 0,
    "react/jsx-boolean-value": 1,
    "react/jsx-quotes": 0,
    "jsx-quotes": [2, "prefer-double"],
    "react/jsx-no-undef": 1,
    "react/jsx-sort-props": 0,
    "react/jsx-sort-prop-types": 0,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/jsx-indent": [2, 2],
    "react/jsx-closing-bracket-location": 0,
    "react/jsx-indent-props": 0,
    "react/no-did-mount-set-state": 1,
    "react/no-did-update-set-state": 1,
    "react/no-multi-comp": 0,
    "react/no-unknown-property": 1,
    "react/prop-types": 1,
    "react/react-in-jsx-scope": 1,
    "react/self-closing-comp": 1,
    "react/wrap-multilines": 1
  }
};