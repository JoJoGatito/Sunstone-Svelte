# Sunstone-Svelte Codebase Guide

## Build, Lint & Test Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Run type checking
- `npm run check:watch` - Watch mode for type checking
- `npx vitest` - Run all tests
- `npx vitest src/routes/page.svelte.test.ts` - Run specific test file
- `npx prettier --write .` - Format code
- `npx eslint .` - Lint code

## Code Style Guidelines
- **Imports**: Use named imports; sort imports alphabetically
- **Formatting**: Use Prettier with default settings
- **TypeScript**: Strict mode enabled; prefer explicit types for function parameters
- **Component Naming**: PascalCase for components; kebab-case for files
- **State Management**: Use Svelte stores for shared state
- **Error Handling**: Use try/catch with specific error types
- **Supabase**: Use lib/supabase client for frontend and server for backend
- **Testing**: Use Vitest with Testing Library