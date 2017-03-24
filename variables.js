module.exports = {
    "rules": {    
        /* Variables: */
        "init-declarations": [
            /**
                * Setting this to always require initialization does not really work together with the vars-on-top rule. So I used to have this set to "never". But in practice, it is kind of annoying to be forbidden from initializing some trivial variables.
                * More than that, I do not really see, what harm is done by initializing some variables on declaration and some later. Consistency would be nice, but it is not critical and so I opt for convenience here.
                */
            "off"
        ],
        "no-catch-shadow": [
            /**
                * This can be fixed by renaming variables...
                */
            "error"
        ],
        "no-delete-var": [
            /**
                * Nobody does this anyway.
                */
            "error"
        ],
        "no-label-var": [
            /**
                * This unnecessarily leads to confusion.
                */
            "error"
        ],
        "no-shadow": [
            "warn",
            {
                "builtinGlobals": true,
                "hoist": "all"
            }
        ],
        "no-shadow-restricted-names": [
            "error"
        ],
        "no-undef": [
            /**
                * This is probably a mistake.
                */
            "error"
        ],
        "no-undef-init": [
            /**
                * This is probably a mistake.
                */
            "error"
        ],
        "no-undefined": [
            /**
                * This is just confusing and there is no need to do this.
                */
            "error"
        ],
        "no-unused-vars": [
            /**
                * You should not keep unused variables and function parameters around.
                * I set this to WARN in order to not break potential build processes for WIP-code, as it might be annoying to write meaningless code just to satisfy this rule.
                */
            "warn",
            {
                "vars": "all",
                "args": "all"
            }
        ],
        "no-use-before-define": [
            /**
                * Because of the vars-on-top rule this can not happen, but let's leave this in place just in case.
                */
            "error"
        ]
    }
};
