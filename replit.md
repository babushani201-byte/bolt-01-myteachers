# My Quran Teachers

An online Quran Academy website built with React, TypeScript, Vite, and Tailwind CSS.

## Project Structure

- `src/` — All source code
  - `src/App.tsx` — Root component with routing
  - `src/pages/` — Page components (Home, About, Droos)
  - `src/components/` — Reusable UI components (Header, Footer, Hero, Classes, Teachers, Contact, Videos, FeeStructure, MissionStatement)
  - `src/main.tsx` — Entry point
  - `src/index.css` — Global styles with Tailwind directives
- `vite.config.ts` — Vite configuration (configured for Replit: host 0.0.0.0, port 5000)
- `tailwind.config.js` — Tailwind CSS configuration
- `package.json` — Dependencies and scripts

## Tech Stack

- **React 18** with TypeScript
- **Vite** as build tool and dev server
- **Tailwind CSS** for styling
- **React Router DOM v7** for routing
- **Lucide React** for icons
- **Supabase JS** client (included as dependency, not yet wired up)

## Scripts

- `npm run dev` — Start development server (port 5000)
- `npm run build` — Production build
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint
- `npm run typecheck` — TypeScript type checking

## Replit Setup

- Dev server runs on `0.0.0.0:5000` with `allowedHosts: true` for Replit proxy compatibility
- Workflow: "Start application" runs `npm run dev`
