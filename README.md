# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## 1.- Instalation process Vite + React + JavaScript + Tailwind + Shadcn

step by step installation from terminal command line to install vite + React + JavaScript:

```bash
# Here will display the menu and select app name + React + JavaScript ( Experimental no) 
npm create vite@latest
```

> **Note:** after vite tooling install, the app won't display, so an extra configuration step must me done
> at vite.config.js.

## 2.- vite configuration ( making the app accesible )

right after installation, vite conf vite will need additional configuration in order to show the app:

```bash
# vite conf adds host true + port 5173 (to ensure the port) 
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173, // Opcional, para asegurar el puerto
  }
})
```

## Installing Tailwind css + tailwind/vite-plugin

- Installing tailwind css and vite plugin by - npm install tailwindcss @tailwindcss/vite

```bash
# This install tailwind + tailwind vite plugin
npm install tailwindcss @tailwindcss/vite
```

> **Note:** after tailwind command, add @tailwind tag to index.css and also tailwindcss() plugin
> vite config, in this step for index.css a new color pallete must be generated, the reference
> to get the color palette in # [Color Palette Projects Showcase](https://69b1a0d362d5792591d54ba5--color-pallete-projects-showcase.netlify.app/)

the vite configuration file need tailwind addition as plugin ( no postfix needed in tailwind v4 ):

```bash
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Add it to the plugins array
  ],
  server: {
    host: true,
    port: 5174, // Opcional, para asegurar el puerto
  }
})
```

## 🏗 shadcn/ui Architecture (v4 Optimized)

Unlike traditional component libraries, shadcn is not a closed package. Components are downloaded as source code directly into your `src/components/ui` folder, giving you 100% control.

## Automatic Dependency Management

When running `npx shadcn@latest init`, the modern CLI detects your environment and automatically configures:
**`class-variance-authority` (cva):** For managing component variants (e.g., button sizes/colors).
**`tailwind-merge` & `clsx`:** For intelligent class name merging.
**`src/lib/utils.js`:** Automatically creates the `cn()` utility function used by these libraries.

## 🛠 Core Tech Stack

**Framework:** React + Vite (JS)
**Styling:** Tailwind CSS v4 + shadcn/ui
**Routing:** Wouter (Ultra-lightweight 2kb)
**Security:** @vitejs/plugin-basic-ssl (Required for modern browser APIs)
**Network:** Tailscale Mesh VPN

## Plugin basicSsl ( @vitejs/plugin-basic-ssl - Required for modern browser APIs )

this ssl plugin for self signed certificates is highly important for API's, for
later back end and fornt end integration

```bash
# This is a comment inside the code block
npm install @vitejs/plugin-basic-ssl
npm run dev
```

### Why install `@types/node`?

In modern ESM environments, Node.js does not globally recognize variables like `__dirname`. We install these types manually to:

1. **Configure Path Aliases (`@/`):** Allow Vite to map `@` to the `/src` directory.
2. **Fix Editor Warnings:** Resolve "not defined" errors in `vite.config.js` when using the `path` module.

---

## 📥 Step-by-Step Installation

### 1. Preparation & Typing

Install the base dependencies and Node definitions so your configuration files work without errors.

```bash
npm install
npm install -D @types/node
```

> [!IMPORTANT]
> Ensure your `vite.config.js` defines `__dirname` manually (using `fileURLToPath`) so that shadcn aliases work correctly in ESM modules.
