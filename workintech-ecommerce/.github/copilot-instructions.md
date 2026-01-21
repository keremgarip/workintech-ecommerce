# Copilot Instructions for WorkinTech eCommerce

## Project Overview
This is a **React + Vite eCommerce frontend application** using Tailwind CSS for styling. It's a landing page showcasing an online store with multiple feature sections and product categories.

## Architecture & Data Flow

### Component Structure
- **App.jsx**: Main entry point that composes all page sections in a vertical layout
- **Components in `src/components/`**: Each file exports a single functional component representing a page section:
  - `Header.jsx`: Navigation and branding
  - `ShopCards.jsx`: Featured product cards
  - `BestSeller.jsx`, `Popular.jsx`, `Products.jsx`, `MostPopular.jsx`: Product showcase sections
  - `AllProducts.jsx`: Complete product listing
  - `Clients.jsx`: Testimonials or featured clients
  - `Blog.jsx`: Blog section
  - `Footer.jsx`: Footer with links and info

### Key Pattern
- **Functional components only** - no class components
- **No state management** - currently a static presentation site (future: add Redux/Context if needed)
- **No API integration yet** - components render hardcoded data or static UI

## Build & Development Workflow

### Development
```bash
npm run dev
```
Starts Vite dev server with React Fast Refresh enabled. Changes auto-reload in browser.

### Production Build
```bash
npm build
```
Compiles to optimized dist/ folder.

### Linting
```bash
npm run lint
```
Runs ESLint (requires all rules to pass).

## Styling Conventions

- **Tailwind CSS** is the primary styling framework (v4.1.18 with Vite integration)
- **Minimal CSS files**: `index.css` contains reset/base styles, `App.css` is legacy (being replaced by Tailwind)
- **New components**: Use Tailwind classes instead of CSS files
- **Color Scheme**: Dark theme by default (see `index.css` :root variables)

## Critical Developer Notes

### When Adding Features
1. **New components**: Export as default function in `src/components/ComponentName.jsx`
2. **Import in App.jsx**: Add both import statement and JSX element in render order
3. **Styling**: Prefer Tailwind utility classes; avoid new CSS files
4. **No state needed yet**: If component needs interactivity, discuss architecture change with team

### Known Issues & Warnings
- `npm run dev` exit code 1 reported in logs - verify Tailwind/Vite setup if dev server fails to start
- React version 19.2.0 is cutting-edge; ensure plugins stay compatible

## Dependencies
- **React 19.2.0**: UI framework
- **Vite 7.2.4**: Build tool with Fast Refresh
- **Tailwind CSS 4.1.18**: Utility-first CSS framework
- **ESLint 9.39.1**: Linting (must pass before commits)

## File Organization
```
src/
  ├── App.jsx              (root component, orchestrates layout)
  ├── main.jsx             (React entry point)
  ├── index.css            (global styles & reset)
  ├── App.css              (legacy, migrate to Tailwind)
  ├── components/          (feature sections)
  └── assets/              (images, icons)
```

## Quick Start for AI Agents
1. New section? Add to `components/` folder, export default function
2. Want to render it? Import in `App.jsx` and add `<ComponentName />` at appropriate position
3. Styling? Use Tailwind classes in className attributes
4. Run `npm run dev` to test, `npm run lint` to validate
