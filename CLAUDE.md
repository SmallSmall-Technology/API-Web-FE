# Project Development Guidelines

## Tech Stack

- React.js
- Vite
- Tailwind CSS
- TanStack React Query
- Redux Toolkit where applicable

## Figma Implementation Rules

1. Always inspect the Figma design before implementation.
2. Use Figma MCP to retrieve the actual design context.
3. Inspect the existing codebase before creating components.
4. Reuse existing components, hooks and utilities.
5. Avoid duplicating existing UI components.
6. Follow existing folder structures and naming conventions.
7. Use existing Tailwind patterns and design tokens.
8. Build reusable and responsive components.
9. Keep UI components separate from API/business logic.
10. Do not modify unrelated files.

## Implementation Workflow

1. Analyze the Figma design.
2. Inspect existing project components.
3. Propose a component structure.
4. Identify reusable components.
5. Implement the design.
6. Compare implementation against Figma.
7. Fix visual inconsistencies.
8. Verify responsiveness and functionality.

## Important

- Do not invent API endpoints.
- Do not replace existing project architecture unnecessarily.
- Do not introduce new dependencies without justification.
- Ask before making major architectural changes.
