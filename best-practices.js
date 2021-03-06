module.exports = {
    "rules": {    
        /* Best Practices: */
        "accessor-pairs": [
            /**
                * Yea, no, I don't use this at all.
                */
            "off"
        ],
        "array-callback-return": [
            /**
                * It's probably best to get into the routine of always including a return statement, but it is not always really needed.
                */
            "warn"
        ],
        "block-scoped-var": [
            /**
                * Because of how scope works and the "no-inner-declarations" rule, this should never happen anyway.
                */
            "error"
        ],
        "complexity": [
            /**
                * You should keep cyclomatic complexity low, but this is not a critical offense and might involve some code refactoring to fix. That's why only WARN.
                */
            "warn"
        ],
        "consistent-return": [
            /**
                * This improves readability and somewhat decreases the risk of simply forgetting to return a value in some cases.
                */
            "error"
        ],
        "curly": [
            /**
                * This rule doesn't enforce a specific style, just consistency.
                */
            "error",
            "all"
        ],
        "default-case": [
            /**
                * You shouldn't use switch altogether, but if you do, make sure to specify a default case.
                */
            "error"
        ],
        "dot-location": [
            /**
                * This increases readibility. ERROR because it is easy to fix.
                */
            "error",
            "property"
        ],
        "dot-notation": [
            /**
                * This is easy to fix: Dot-Notation is generally preferred and for compatability-reasons, you should not use keywords as keys.
                */
            "error",
            { "allowKeywords": false }
        ],
        "eqeqeq": [
            /**
                * JS 101: ALWAYS USE '===' !
                */
            "error"
        ],
        "guard-for-in": [
            /**
                * This enforces to obligatory hasOwnProperty-check. It doesn't enforce a specific notation though, just that you have in if-statement as the first statement in a for-in-block.
                */
            "error"
        ],
        "no-alert": [
            /**
                * Just don't.
                */
            "error"
        ],
        "no-caller": [
            /**
                * Deprecated feature and forbidden in strict-mode anyway.
                */
            "error"
        ],
        "no-case-declarations": [
            /**
                * You shouldn't use switch altogether, but if you do, don't declare variables in cases, as they get hoisted.
                */
            "error"
        ],
        "no-div-regex": [
            /**
                * Whatever.
                */
            "error"
        ],
        "no-else-return": [
            /**
                * If the if-case ends with a return, you don't need an explicit else-branch. Buuut, you can argue, that an explicit else-branch actually improves readability, which is why I turn this rule off.
                * When two alternatives have the exact same semantics, I think you should choose the one, where the code better represents these semantics. That is the case when you put in the explicit else.
                */
            "off"
        ],
        "no-empty-function": [
            /**
                * This is always a mistake from cut-and-paste or something.
                */
            "error"
        ],
        "no-empty-pattern": [
            "error"
        ],
        "no-eq-null": [
            /**
                * This is actually already covered by the eqeqeq-rule, but well... Because of the way type coercions (don't) work in JS, you shouldn't do these kinds of comparisons.
                */
            "error"
        ],
        "no-eval": [
            /**
                * > Eval considered harmful.
                */
            "error"
        ],
        "no-extend-native": [
            /**
                * If your code runs in the same context with foreign code, you will want to turn this on. From a language-perspective though, there is no reason to have it on by default.
                */
            "off"
        ],
        "no-extra-bind": [
            /**
                * The call to bind is unnecessary here. I think, this is not too bad, so you may keep it.
                */
            "warn"
        ],
        "no-extra-label": [
            /**
                * Who uses labels in JS?! But, hey, it doesn't exactly do any harm.
                */
            "warn"
        ],
        "no-fallthrough": [
            /**
                * You should not use switch altogether. But if you do, ALWAYS break your cases!
                */
            "error"
        ],
        "no-floating-decimal": [
            /**
                * Please don't have a dangling decimal point here. Easy fix.
                */
            "error"
        ],
        "no-global-assign": [
            /**
                * Don't reassign global variables.
                */
            "error"
        ],
        "no-implicit-conversion": [
            /**
                * Yeah, in the conflict between brevity and readability I go with brevity on this one. It is kind of cryptic, but it is still reasonable.
                */
            "off"
        ],
        "no-implicit-globals": [
            /**
                * You should not clutter the global scope.
                */
            "error"
        ],
        "no-implied-eval": [
            /**
                * Remember: Eval considered harmful.
                */
            "error"
        ],
        "no-invalid-this": [
            /**
                * When 'this' gets bound to the global object or undefined, it is most likely unintentional.
                */
            "error"
        ],
        "no-iterator": [
            "error"
        ],
        "no-labels": [
            /**
                * Who uses labels in JS?! But, hey, it doesn't exactly do any harm.
                */
            "warn"
        ],
        "no-lone-blocks": [
            /**
                * Do not unnecessary nest blocks.
                */
            "error"
        ],
        "no-loop-func": [
            /**
                * Both for execution semantics as well as readabilty, it is advised to not declare functions inside loops.
                */
            "error"
        ],
        "no-magic-numbers": [
            /**
                * Yeah, you should try to move magic numbers into config files. But sometimes numbers are not about configuration but rather about stuff like indices and such. So I leave this turned off.
                */
            "off"
        ],
        "no-multi-spaces": [
            /**
                * Multiple spaces? This is basic code hygiene.
                */
            "error"
        ],
        "no-multi-str": [
            /**
                * Multiline-Strings are kind of tricky in JS. Best to avoid them.
                */
            "error"
        ],
        "no-new": [
            /**
                * This rule prohibits the use of this outside of assignments.
                */
            "error"
        ],
        "no-new-func": [
            /**
                * Do not call "new Function()". I don't see, why you would ever need to do this.
                */
            "error"
        ],
        "no-new-wrappers": [
            /**
                * There should be no need to use these.
                */
            "error"
        ],
        "no-octal": [
            /**
                * Yeah, why do you need octal number literals?!
                */
            "error"
        ],
        "no-octal-escape": [
            /**
                * Yeah, why do you need this?!
                */
            "error"
        ],
        "no-param-reassign": [
            /**
                * Don't reassign function arguments. (Including their object properties).
                */
            "error",
            { "props": true }
        ],
        "no-proto": [
            "error"
        ],
        "no-redeclare": [
            /**
                * Do not redeclare variables! They get hoisted anyway.
                */
            "error"
        ],
        "no-return-assign": [
            /**
                * Do not assign values inside of return-expressions.
                */
            "error"
        ],
        "no-script-url": [
            /**
                * I just don't understand, why you would need to do this.
                */
            "error"
        ],
        "no-self-assign": [
            /**
                * This should never be necessary.
                */
            "warn"
        ],
        "no-self-compare": [
            /**
                * This should never be necessary.
                */
            "warn"
        ],
        "no-sequences": [
            /**
                * This has the potential to mask mistakes.
                */
            "error"
        ],
        "no-throw-literal": [
            /**
                * If you bother dealing with exceptions, you should throw proper exceptions instead of string literals.
                */
            "error"
        ],
        "no-unmodified-loop-condition": [
            /**
                * This happens probably by mistake and even if not, it is hard to read.
                */
            "error"
        ],
        "no-unused-expressions": [
            /**
                * Not critical, but easy to fix.
                */
            "error"
        ],
        "no-unused-labels": [
            /**
                * Not critical, but easy to fix.
                */
            "error"
        ],
        "no-useless-call": [
            /**
                * Not critical, but easy to fix.
                */
            "error"
        ],
        "no-useless-concat": [
            /**
                * Not critical, but easy to fix.
                */
            "error"
        ],
        "no-useless-escape": [
            /**
                * Not critical, but easy to fix.
                */
            "error"
        ],
        "no-void": [
            /**
                * The void statement does not exist.
                */
            "error"
        ],
        "no-warning-comments": [
            /**
                * This encourages you to not keep "TODO" comments around in your code.
                */
            "error"
        ],
        "no-with": [
            /**
                * The with statement does not exist!
                */
            "error"
        ],
        "radix": [
            /**
                * parseInt takes a second argument as the radix for the number to be parsed.
                */
            "error"
        ],
        "vars-on-top": [
            /**
                * As variable declarations get hoisted anyway, you should just put the declaration on top of the scope.
                */
            "error"
        ],
        "wrap-iife": [
            /**
                * This is a common convention you should have no reason to break.
                */
            "error",
            "outside"
        ],
        "yoda": [
            /**
                * Most importantly, this should be consistent...
                */
            "error",
            "never"
        ]
    }
};
