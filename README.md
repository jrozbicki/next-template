# Next.js 11 project setup

## General:
> Updated at 📅: 02.07.2021

## Tooling included:
- Typescript
- Eslint (with Prettier)
    - @typescript-eslint/eslint-plugin
    - eslint-plugin-next
    - eslint-config-prettier
    - eslint-plugin-prettier

## Process

#### 1. Install Next.js 11, Typescript and basic Eslint config

```bash
yarn create next-app --typescript
```

This will come automaticaly with:

```
dependencies:
- react
- react-dom
- next

devDependencies:
- eslint
- eslint-config-next
- typescript
- @types/react
```
`.tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve"
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

Optional: I like changing typescript's `strict` option to `true` from the get go:
```diff
- "strict": false,
+ "strict": true,
```

`.eslintrc:`

```bash
{
  "extends": ["next", "next/core-web-vitals"]
}
```

Optional: You could remove `next/core-web-vitals` if you don't care about it:

```diff
- "extends": ["next", "next/core-web-vitals"]
+ "extends": ["next"]
```

#### 2. Add Typescript plugin to Eslint config

Install
```
yarn add -D @typescript-eslint/eslint-plugin
```

and add plugin in `.eslintrc`

```diff
{
+  "plugins": ["@typescript-eslint"],
-  "extends": ["next"]
+  "extends": [
+    "plugin:@typescript-eslint/recommended",
+    "next"
+  ],
}
```

Optional: I'm also adjusting rules to my liking at the start

```
{
  "plugins": ["@typescript-eslint"],
  "extends": ["next"]
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "next"
  ],
+  "rules": {
+    "@typescript-eslint/no-unused-vars": "error",
+    "@typescript-eslint/no-explicit-any": "error",
+    "@typescript-eslint/explicit-module-boundary-types": "off"
+  }
}
```

3. Add Prettier to the mix

Install:
```bash
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
```

- `prettier` - code formatter
- `eslint-config-prettier` - turns off Eslint's rules that might conflict with Prettier
- `eslint-plugin-prettier` - reports Prettiers issues as Eslint errors 

add basic Prettier configuration:
`.prettierrc`
```json
{
  "semi": false,
  "trailingComma": "es5",
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false
}
```

With Eslint's addons we just installed we can configure it further:

`.eslintrc`

```diff
{
  "plugins": ["@typescript-eslint"],
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "next",
+    "plugin:prettier/recommended"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off"
  }
}
```

This single line of code will make `eslint-config-prettier` and `eslint-plugin-prettier` work nicely together. For more details read [config installation section](https://github.com/prettier/eslint-config-prettier#installation) and [plugin recommended setup](https://github.com/prettier/eslint-plugin-prettier#recommended-configuration)

## That's it 🎉

This is how `package.json` at the end:

```json
{
  "name": "nextjs-setup",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "11.0.1",
    "react": "17.0.2",
    "react-dom": "17.0.2"
  },
  "devDependencies": {
    "@types/react": "17.0.13",
    "@typescript-eslint/eslint-plugin": "^4.28.1",
    "eslint": "7.29.0",
    "eslint-config-next": "11.0.1",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-prettier": "^3.4.0",
    "prettier": "^2.3.2",
    "typescript": "4.3.5"
  }
}
```