import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [js.configs.recommended, reactHooks.configs.flat.recommended, reactRefresh.configs.vite],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      react,
      stylistic,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],

      // ✅ stylistic rules (NOT core anymore)
      'stylistic/semi': ['error', 'always'],
      'stylistic/quotes': ['error', 'single'],

      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
]);
