import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import importX from "eslint-plugin-import-x";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

/** @type {import("eslint").Linter.Config[]} */
export default [
  // Global ignores
  {
    ignores: ["build/", "node_modules/", "!**/.server", "!**/.client"],
  },

  // Base config for all JS/TS files
  js.configs.recommended,

  // React + JSX a11y
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      react,
      "jsx-a11y": jsxA11y,
      "react-hooks": reactHooks,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: "detect" },
      formComponents: ["Form"],
      linkComponents: [
        { name: "Link", linkAttribute: "to" },
        { name: "NavLink", linkAttribute: "to" },
      ],
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
    },
  },

  // TypeScript
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "@typescript-eslint": tsPlugin,
      "import-x": importX,
    },
    languageOptions: {
      parser: tsParser,
    },
    settings: {
      "import-x/internal-regex": "^~/",
      "import-x/resolver": {
        node: { extensions: [".ts", ".tsx"] },
        typescript: { alwaysTryTypes: true },
      },
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...importX.configs.recommended.rules,
      ...importX.configs.typescript.rules,
      // TypeScript handles this natively; ESLint's no-undef doesn't understand TS globals
      "no-undef": "off",
      // Allow empty interfaces used as extension points (e.g. SVGProps pattern)
      "@typescript-eslint/no-empty-object-type": "off",
      "react-hooks/set-state-in-effect": "off",
    },
  },

  // Node config files
  {
    files: ["*.config.{js,ts}", "postcss.config.js", "load-context.ts"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];
