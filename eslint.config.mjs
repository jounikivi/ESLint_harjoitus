import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 2021,
      sourceType: "module",
    },
    plugins: { js },
    extends: ["js/recommended"],
    rules: {
      'no-var': 'error',  // Tämä sääntö aiheuttaa virheen 'var' avainsanasta
    },
  },
]);
