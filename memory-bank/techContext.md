# Tech Context

## Technologies Used
- Next.js 15 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide Icons

## Development Setup
- Node.js and npm for dependency management and scripts.
- Local development with `npm run dev` (Turbopack for fast refresh).
- Modular file structure: /src/app for routing, /src/features for prototypes, /src/components for UI.
- All code and documentation tracked in git.

## Technical Constraints
- Prototypes only (not for production or public use).
- No sensitive or production data.
- Internal use only; push access may be restricted.

## Dependencies
- See package.json for full list (notable: next, react, tailwindcss, shadcn/ui, lucide-react).

## Tool Usage Patterns
- shadcn/ui for base UI components (accordion, badge, button, card, dialog, etc.).
- Tailwind for utility-first, responsive styling.
- Mock data for safe, repeatable testing.
- Versioned feature folders for parallel development.

## Important Notes
- The use of Turbopack (Next.js) enables fast local development.
- The modular structure supports rapid prototyping and easy onboarding. 