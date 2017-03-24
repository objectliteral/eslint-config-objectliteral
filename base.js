module.exports = {
    "parserOptions": {
        "ecmaVersion": 6
    }, "env": {
        "browser": true,
        "commonjs": true
    },
    "extends": [
        "./possible-errors.js",
        "./best-practices.js",
        "./variables.js",
        "./stylistic-issues.js"
    ],
    "plugins": [
       
    ],
    "rules": {

        /* Strict Mode */
        "strict": [
            /**
             * I think, you should run in strict mode, but your bundler or whatever can take care of inserting the statement.
             */
            "off"
        ],

        /* Node.js and Common.js */
        "callback-return": [
            "off"
        ],
        "global-require": [
            "error"
        ],
        "no-mixed-requires": [
            "error",
            {
                "grouping": true,
                "allowCall": true
            }
        ],
        "no-new-require": [
            "error"
        ],
        "no-path-concat": [
            "error"
        ],
        "no-process-env": [
            "error"
        ],
        "no-process-exit": [
            "error"
        ],
        "no-restricted-modules": [
            "off"
        ],
        "no-sync": [
            "off"
        ]

    }
};
