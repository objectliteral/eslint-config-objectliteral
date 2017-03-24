module.exports = {
    "rules": {
        /* Possible Errors: */
        "comma-dangle": [
            /**
            * Not only is this a syntactical error, but it is also a good indicator, that you may have forgotten an element or hastyly copy-pasted something.
            * This setting uses ERROR because JS will throw anyway and because it is easy to fix.
            */
            "error",
            "never"
        ],
        "no-cond-assign": [
            /**
            * While this is syntactically legal, I have never come across a legitimate reason to do this.
            * This setting uses ERROR because it easily masks a real mistake (using = instead of == (or rather ===)) and because it is easy to fix. 
            */
            "error",
            "always"
        ],
        "no-constant-condition": [
            /**
            * Having a conditional expression be constant does not make too much sense, but I will use a WARN here, because maybe the fact, that you used a constantant value, indicates that you have something specific in mind and this might not be unintentional.
            */
            "warn"
        ],
        "no-console": [
            /**
            * It is more or less common convention to not use console.log in production. But because it is just so useful for debugging, I only WARN about it.
            */
            3
        ],
        "no-control-regex": [
            /**
            * Nobody understand regular expressions anyway, why would you want to make it even more obfuscated by using control characters? I only warn about this, because this probably should not happen accidentally.
            */
            "warn"
        ],
        "no-debugger": [
            /**
            * I don't know about your debugging-workflow, but I never used this statement before.
            */
            "error"
        ],
        "no-dupe-args": [
            /**
            * This will never happen intentionally. Better have eslint find this.
            */
            "error"
        ],
        "no-dupe-keys": [
            /**
            * This will probably never happen intentionally. Better have eslint find this.
            */
            "error"
        ],
        "no-duplicate-case": [
            /**
            * This will probably never happen intentionally. Better have eslint find this.
            */
            "error"
        ],
        "no-empty": [
            /**
            * This probably indicates either WIP-code or some bad cut-and-pasting.
            */
            "error"
        ],
        "no-empty-character-class": [
            "error"
        ],
        "no-ex-assign": [
            /**
            * It is common convention to not override exceptions in catch. When you find yourself doing this, you might want to reconsider your error-handling-strategy.
            */
            "error"
        ],
        "no-extra-boolean-cast": [
            /**
            * While these casts are unnecessary, they are not harmful per se and thus only WARNed about.
            */
            "warn"
        ],
        "no-extra-parens": [
            /**
            * These are not harmful so only WARN, but eventually you will want to get rid of them.
            */
            "warn",
            "all"
        ],
        "no-extra-semi": [
            /**
            * This is probably just a result of hasty cut-and-pasting.
            */
            "error"
        ],
        "no-func-assign": [
            /**
            * This has is most likely unintentional.
            */
            "error"
        ],
        "no-inner-declarations": [
            /**
            * Because of hoisting, you should always declare your variables at the top of the scope!
            */
            "error",
            "both"
        ],
        "no-invalid-regexp": [
            /**
            * Yeah... whatever. JS will complain anyway.
            */
            "error"
        ],
        "no-irregular-whitespace": [
            /**
            * This is just basic hygiene. But as it really doesnt affect code execution, you only get a WARN so you can fix it later.
            */
            "warn"
        ],
        "no-negated-in-lhs": [
            /**
            * This is never necessary.
            */
            "error"
        ],
        "no-obj-calls": [
            /**
            * This rule was meant to prevent calling things like Math, JSON and Reflect, which look like constructors but are mere objects and can't be called. I set this to ERROR because this rule does not apply to arbitrary global objects but only the aforementioned ones.
            */
            "error"
        ],
        "no-regex-spaces": [
            /**
            * Sure...
            */
            "error"
        ],
        "no-sparse-arrays": [
            /**
            * There might be cases, where you actually want to use sparse arrays. Then just disable this setting for that specific file or function. But generally, sparse arrays should not be used.
            */
            "error"
        ],
        "no-unexpected-multiline": [
            /**
            * Because of ASI, unexpected multiline expressions will potentially be interpreted in an unintended fashion.
            */
            "error"
        ],
        "no-unreachable": [
            /**
            * This is always a mistake (mostly caused by cut-and-paste).
            */
            "error"
        ],
        "no-unsafe-finally": [
            /**
            * I don't use try-catch anyway, so I don't use finally, so I don't use them this way.
            */
            "error"
        ],
        "use-isnan": [
            /**
            * There are other ways to check for NaN, but because NaN behaves so weirdly, it is safest to just use isNaN.
            */
            "error"
        ],
        "valid-jsdoc": [
            /**
            * I don't care about this and it doesn't affect code execution anyways.
            */
            "off"
        ],
        "valid-typeof": [
            /**
            * Comparing "typeof x" to something that is not a valid type-string is a sneaky error and you want to be warned about this!
            */
            "error"
        ]
    }
};
