# ESLint Config

This package contains Brand42's ESLint config rules for Nuxt 4 projects. 

## How to install

*Step 1* - Install the pakage by running:
```js
yarn add @brand42/eslint-config
```

*Step 2* - Make sure your project `eslint-config.mjs` extends the Brand42 rules as such:
```js 
import withNuxt from "./.nuxt/eslint.config.mjs";
import brand42 from "@brand42/eslint-config";

export default withNuxt().append(...brand42);
```



