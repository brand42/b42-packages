import cssPlugin from "@eslint/css";
import tailwindEslint from "eslint-plugin-better-tailwindcss";
import { tailwind4 } from "tailwind-csstree";

export default [
  {
    name: "brand42/global-ignores",
    ignores: [
      ".yarn/**/*",
      "./app/types/contentful/*",
    ],
  },
  {
    name: "brand42/javascript",
    rules: {
      "no-console": "warn",
      eqeqeq: ["error", "smart"],
    },
  },
  {
    name: "brand42/vue",
    rules: {
      "vue/eqeqeq": "error",
      "vue/no-empty-component-block": "error",
      "vue/component-api-style": "warn",
      "vue/html-self-closing": [
        "warn",
        {
          html: {
            void: "always",
          },
        },
      ],
      "vue/max-lines-per-block": [
        "warn",
        {
          script: 300,
          template: 400,
          style: 1,
        },
      ],
    },
  },
  {
    name: "brand42/stylistic",
    rules: {
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/member-delimiter-style": [
        "error",
        {
          multiline: {
            delimiter: "semi",
          },
        },
      ],
      "@stylistic/arrow-parens": ["warn", "always"],
      "@stylistic/brace-style": ["error", "1tbs"],
      "@stylistic/quote-props": [
        "warn",
        "as-needed",
        {
          unnecessary: false,
        },
      ],
    },
  },
  {
    name: "brand42/typescript",
    rules: {
      "@typescript-eslint/prefer-nullish-coalescing": [
        "warn",
        {
          ignorePrimitives: {
            string: true,
          },
        },
      ],
    },
  },
  {
    name: "brand42/better-tailwindcss",
    files: ["**/*.css", "**/*.vue"],
    plugins: {
      "better-tailwindcss": tailwindEslint,
    },
    settings: {
      "better-tailwindcss": {
        entryPoint: "./app/assets/css/main.css",
        detectComponentClasses: true,
      },
    },
  },
  {
    name: "brand42/css",
    plugins: {
      css: cssPlugin,
    },
    files: ["**/*.css"],
    language: "css/css",
    languageOptions: {
      customSyntax: tailwind4,
      tolerant: true,
    },
  },
  {
    name: "brand42/tailwind-rules",
    files: ["**/*.css", "**/*.vue"],
    rules: {
      ...tailwindEslint.configs["recommended-warn"].rules,
      "better-tailwindcss/enforce-consistent-line-wrapping": [
        "warn",
        {
          preferSingleLine: true,
          printWidth: 200,
        },
      ],
      "better-tailwindcss/no-unknown-classes": "error",
      "no-irregular-whitespace": "off",
    },
  },
];