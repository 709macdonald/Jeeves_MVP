# Jeeves MVP - Frontend

Modern, ChatGPT-inspired chat interface built with React, TypeScript, and Tailwind CSS v4.

## Tech Stack

- **React 18** - UI library
- **TypeScript 5** - Type safety
- **Vite 5** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first styling
- **Font Awesome** - Icon library

## Project Structure

```
src/
├── components/          # Presentational UI components (no logic)
│   ├── InputBar.tsx            # Auto-resizing textarea input
│   ├── InputBarButton.tsx      # Circular action button
│   └── InputBarSection.tsx     # Complete input section with buttons
├── hooks/              # Custom React hooks (all reusable logic)
│   ├── useAutoResize.ts        # Auto-resize textarea logic
│   └── index.ts                # Hooks barrel export
├── screens/            # Page-level components
│   └── MainScreen.tsx          # Main chat interface
├── types/              # TypeScript type definitions
│   └── vite-env.d.ts
├── App.tsx             # Root component
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind import
```

## Architecture Principles

### Components
- **Purely presentational** - no business logic
- Handle only UI rendering and user interactions
- Call hooks for any complex logic
- Accept props and callbacks

### Hooks (`hooks/`)
- **All reusable logic** lives in custom hooks
- Follow React hooks naming convention (`use*`)
- Encapsulate state management, side effects, and complex calculations
- Exported via barrel file (`hooks/index.ts`)

## Key Features

### InputBar Component
- Auto-grows as user types (up to 10 rows, then scrolls)
- Smooth shadow transitions on hover
- Fully accessible with ARIA labels
- Uses `useAutoResize` hook for resize logic
- Props: `maxRows`, `className`, plus all standard textarea attributes

### InputBarButton Component
- Circular icon buttons with smooth animations
- Two variants: `primary` (blue) and `secondary` (white/gray)
- Loading state support
- Customizable size
- Props: `icon`, `variant`, `loading`, `size`, `className`

### InputBarSection Component
- Complete input section with auto-grow textarea
- Default send button (paper plane icon)
- Support for custom action buttons via `children`
- Enter to submit, Shift+Enter for newline
- Props: `inputProps`, `onSubmit`, `onSend`, `showSendButton`, `maxWidth`

### Custom Hooks

#### `useAutoResize(maxRows)`
Manages auto-resizing logic for textarea elements.
- Returns: `{ textareaRef, resize }`
- Automatically resizes on mount
- Provides manual `resize()` function for input events

## Development

### Install dependencies
```bash
npm install
```

### Start dev server
```bash
npm run dev
```
Visit http://localhost:5173/

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

## Styling

Uses **Tailwind CSS v4** with CSS-based configuration:
- No `tailwind.config.js` needed
- Import via `@import "tailwindcss"` in `index.css`
- Utility classes for responsive, modern UI
- System font stack for optimal performance

## Code Quality

- ✅ Full TypeScript coverage
- ✅ Proper JSDoc comments on all components and hooks
- ✅ Accessible by default (ARIA labels, keyboard navigation)
- ✅ Clean separation: UI in components, logic in hooks
- ✅ No business logic in components
- ✅ Production-ready build configuration

## Adding New Features

### New Logic?
→ Create a custom hook in `src/hooks/`
→ Export it from `src/hooks/index.ts`
→ Use it in your component

### New UI Element?
→ Create a component in `src/components/`
→ Keep it presentational (no logic)
→ Use hooks for any complex behavior

## Next Steps

- [ ] Add message list component
- [ ] Connect to backend API
- [ ] Add file attachment support
- [ ] Implement dark mode
- [ ] Add typing indicators
- [ ] Mobile optimizations
