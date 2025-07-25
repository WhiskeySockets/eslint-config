import { defineConfig, globalIgnores } from "eslint/config";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tsParser from "@typescript-eslint/parser";

export default defineConfig([{
    plugins: {
        "@typescript-eslint": typescriptEslint,
        "simple-import-sort": simpleImportSort,
    },

    languageOptions: {
        globals: {},
        parser: tsParser,
        ecmaVersion: 5,
        sourceType: "module",
    },

    rules: {
        "max-depth": ["error", 4],

        "@typescript-eslint/no-misused-promises": ["error", {
            checksSpreads: true,
            checksVoidReturn: false,
            checksConditionals: true,
        }],

        "@typescript-eslint/prefer-optional-chain": ["error"],
        "@typescript-eslint/no-unnecessary-type-assertion": ["error"],
        "@typescript-eslint/no-unnecessary-type-constraint": ["error"],
        "@typescript-eslint/no-redundant-type-constituents": ["error"],
        "@typescript-eslint/no-inferrable-types": ["error"],

        "@typescript-eslint/no-explicit-any": ["warn", {
            ignoreRestArgs: true,
        }],

        "@typescript-eslint/no-unused-vars": ["error"],

        camelcase: ["error", {
            ignoreGlobals: true,
            ignoreImports: true,
        }],

        "no-unneeded-ternary": ["error"],

        "no-restricted-syntax": ["error", {
            selector: "TSEnumDeclaration",
            message: "Don't declare enums, use literals instead",
        }],

        "no-constant-condition": ["error"],
        "no-constant-binary-expression": "error",
        "no-trailing-spaces": "error",
        "no-multi-spaces": "error",
        "space-infix-ops": "error",
        indent: ["error", "tab"],

        quotes: [2, "single", {
            avoidEscape: true,
        }],

        "object-curly-spacing": ["error", "always"],
        "space-in-parens": ["error", "never"],
        curly: [2, "all"],
        "brace-style": ["error"],
        "linebreak-style": ["error", "unix"],
        semi: ["error", "never"],
        "space-before-function-paren": ["error", "never"],

        "keyword-spacing": ["error", {
            overrides: {
                if: {
                    after: false,
                },

                for: {
                    after: false,
                },

                while: {
                    after: false,
                },

                catch: {
                    after: false,
                },
            },
        }],

        "padding-line-between-statements": ["error", {
            blankLine: "always",
            prev: "function",
            next: "*",
        }, {
            blankLine: "always",
            prev: "block-like",
            next: "*",
        }, {
            blankLine: "always",
            prev: "import",
            next: "block-like",
        }],

        eqeqeq: "error",
        "func-names": ["error", "never"],

        "func-style": ["error", "declaration", {
            allowArrowFunctions: true,
        }],

        "prefer-const": "error",
        "prefer-arrow-callback": "error",
        "arrow-spacing": ["error"],
        "implicit-arrow-linebreak": ["error", "beside"],
        "no-multiple-empty-lines": "error",
        "space-before-blocks": "error",
        "comma-spacing": "error",
        "no-unused-vars": "off",
        "jsx-quotes": ["error", "prefer-single"],

        "simple-import-sort/imports": ["error", {
            groups: [[
                "^@?\\w",
                "^(components|modules|utils)(/.*|$)",
                "^\\u0000",
                "^\\.\\.(?!/?$)",
                "^\\.\\./?$",
                "^\\./(?=.*/)(?!/?$)",
                "^\\.(?!/?$)",
                "^\\./?$",
            ]],
        }],
    },
}]);
