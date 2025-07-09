# System Patterns

## System Architecture
- Next.js 15 (App Router) for routing, SSR, and modular page structure.
- React 18 with TypeScript for UI logic and type safety.
- Tailwind CSS and shadcn/ui for styling and reusable UI components.
- Modular feature folders with versioning for each prototype.
- Shared core and UI components for consistency and reusability.

## Key Technical Decisions
- Use of versioned feature folders (e.g., /answer/v1) for isolated prototyping and easy comparison.
- File-based routing in /src/app/ for clear, predictable URLs.
- Mock data for safe, repeatable testing and demonstration.
- Strict separation between shared, core, and feature-specific components.

## Design Patterns in Use
- Component-based architecture with clear separation of concerns.
- Shared layout and header components for consistent navigation.
- Reusable input, card, and result components in /shared and /ui.
- Use of Tailwind utility classes for rapid, consistent styling.

## Component Relationships
- Core components (Header, Layout) are used across all features for navigation and structure.
- Feature components (e.g., HomePage, ResultsPage) are self-contained and versioned.
- Shared components (e.g., BasicInput, SearchResult) are used by multiple features.
- UI components (from shadcn/ui) provide the base for custom elements.

## Critical Implementation Paths
- Routing: /{feature}/{version} and /{feature}/{version}/results for each prototype.
- Data flow: mock data is passed to feature components for rendering.
- Navigation: consistent header and layout across all pages.

## Important Notes
- The modular, versioned structure is key for parallel development and testing.
- The use of mock data and shared components accelerates prototyping and reduces risk. 