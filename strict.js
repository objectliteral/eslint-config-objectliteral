module.exports = {
    "extends": "eslint-config-objectliteral/base",
    "rules": {
        "no-constant-condition": [
            /**
             * The base config only uses WARN here, because you might do this intentionally. This is no longer an excuse in strict land.
             */
            "error"
        ],
        "no-console": [
            /**
             * In order to prevent console.log calls from sneaking through into production, this setting will exit with an error.
             */
            "error"
        ],
        "no-control-regex": [
            /**
             * The base config only uses WARN here, because you might do this intentionally. This is no longer an excuse in strict land.
             */
            "error"
        ],
        "no-extra-boolean-cast": [
            "error"
        ],
        "no-extra-parens": [
            /**
             * Extra parentheses make code less readable (assuming the reader knows operator precedence and stuff like that).
             */
            "error",
            "all"
        ],
        "no-irregular-whitespace": [
            /**
             * This is just basic hygiene.
             */
            "error"
        ],
        "complexity": [
            /**
             * You should keep cyclomatic complexity low.
             */
            "error"
        ],
        "no-extend-native": [
            /**
             * This is not bad style per se, but if your code runs in the same context with foreign code, it is not safe to extend native objects.
             */
            "error"
        ],
        "no-extra-label": [
            /**
             * Who uses labels in JS?!
             */
            "error"
        ],
        "no-labels": [
            /**
             * Who uses labels in JS?!
             */
            "error"
        ],
        "no-self-assign": [
            /**
             * This should never be necessary.
             */
            "error"
        ],
        "no-self-compare": [
            /**
             * This should never be necessary.
             */
            "error"
        ],
        "init-declarations": [
            /**
             * Setting this to always require initialization does not really work together with the vars-on-top rule. So I set to "never". In practice, it is kind of annoying to be forbidden from initializing some trivial variables. But I opt consistency here.
             */
            "warn",
            "never"
        ],
        "no-unused-vars": [
            /**
             * You should not keep unused variables and function parameters around.
             */
            "warn",
            {
                "vars": "all",
                "args": "all"
            }
        ]
    }
};
