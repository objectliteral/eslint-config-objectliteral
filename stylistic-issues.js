module.exports = {
    "rules": {    
        /* Stylistic Issues */
        "array-bracket-spacing": [
            "error",
            "always"
        ],
        "block-spacing": [
            "error",
            "always"
        ],
        "brace-style": [
            "error",
            "1tbs"
        ],
        "camelcase": [
            "error",
            {
                "properties": "always"
            }
        ],
        "comma-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "comma-style": [
            "error",
            "last"
        ],
        "computed-property-spacing": [
            "off"
        ],
        "consistent-this": [
            "error",
            "that"
        ],
        "eol-last": [
            "error",
            "unix"
        ],
        "func-names": [
            "off"
        ],
        "func-style": [
            "error",
            "expression",
            { "allowArrowFunctions": false }
        ],
        "id-length": [
            "error",
            {
                "min": 3,
                "max": 40
            }
        ],
        "id-match": [
            "error",
            "^([A-Za-z]+)*$"
        ],
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1,
                "VariableDeclarator": {
                    "var": 1,
                    "let": 1,
                    "const": 1
                }
            }
        ],
        "jsx-quotes": [
            "off"
        ],
        "key-spacing": [
            "error",
            {
                "afterColon": true,
                "mode": "strict"
            }
        ],
        "keyword-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "lines-around-comment": [
            "error",
            {
                "beforeBlockComment": true,
                "afterBlockComment": false,
                "allowBlockStart" : false,
                "allowBlockEnd": false,
                "allowObjectStart": false,
                "allowObjectEnd": false,
                "allowArrayStart": false,
                "allowArrayEnd": false
            }
        ],
        "max-depth": [
            "error",
            5
        ],
        "max-len": [
            "warn",
            {
                "code": 120
            }
        ],
        "max-nested-callbacks": [
            "error",
            5
        ],
        "max-params": [
            "error",
            4
        ],
        "max-statements": [
            "error",
            18
        ],
        "max-statements-per-line": [
            "error",
            { "max": 1 }
        ],
        "new-cap": [
            "error"
        ],
        "new-parens": [
            "error"
        ],
        "newline-after-var": [
            "warn",
            "always"
        ],
        "newline-before-return": [
            "warn"
        ],
        "newline-per-chained-call": [
            "warn",
            { "ignoreChainWithDepth": 3 }
        ],
        "no-array-constructor": [
            "error"
        ],
        "no-bitwise": [
            "warn"
        ],
        "no-continue": [
            "error"
        ],
        "no-inline-comments": [
            "off"
        ],
        "no-lonely-if": [
            "error"
        ],
        "no-mixed-spaces-and-tabs": [
            "error",
            "smart-tabs"
        ],
        "no-multiple-empty-lines": [
            "error",
            { "max": 1 }
        ],
        "no-negated-condition": [
            "error"
        ],
        "no-nested-ternary": [
            "error"
        ],
        "no-new-object": [
            "error"
        ],
        "no-plusplus": [
            "error"
        ],
        "no-restricted-syntax": [
            "error",
            "WithStatement",
            "ClassBody",
            "ClassDeclaration",
            "ClassExpression",
            "DebuggerStatement",
            "ArrowFunctionExpression",
            "RestElement",
            "FunctionDeclaration"
        ],
        "no-spaced-func": [
            "error"
        ],
        "no-ternary": [
            "off"
        ],
        "no-trailing-spaces": [
            "error",
            { "skipBlankLines": true }
        ],
        "no-underscore-dangle": [
            "error"
        ],
        "no-unneeded-ternary": [
            "error",
            { "defaultAssignment": false }
        ],
        "no-whitespace-before-property": [
            "error"
        ],
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "one-var": [
            "warn",
            "always"
        ],
        "one-var-declaration-per-line": [
            "error",
            "always"
        ],
        "operator-assignment": [
            "off"
        ],
        "operator-linebreak": [
            "error",
            "before"
        ],
        "padded-blocks": [
            "off"
        ],
        "quote-props": [
            "warn",
            "always"
        ],
        "quotes": [
            "off",
            "double"
        ],
        "require-jsdoc": [
            "off"
        ],
        "semi": [
            "error",
            "always"
        ],
        "semi-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "sort-vars": [
            "warn"
        ],
        "space-before-blocks": [
            "error",
            "always"
        ],
        "space-before-function-paren": [
            "error",
            "always"
        ],
        "space-in-parens": [
            "error",
            "never"
        ],
        "space-infix-ops": [
            "error",
            { "int32Hint" : true }
        ],
        "space-unary-ops": [
            "error",
            {
                "words": true,
                "nonwords": false
            }
        ],
        "spaced-comment": [
            "error",
            "always"
        ],
        "wrap-regex": [
            "off"
        ]
    }
};
