# Jeeves MVP - Frontend

Modern, ChatGPT-inspired chat interface built with React, TypeScript, and Tailwind CSS v4. **Backend-ready** with type-safe API layer.

## Tech Stack

- **React 18** - UI library
- **TypeScript 5** - Type safety
- **Vite 5** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first styling
- **Font Awesome** - Icon library

## Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Type check
npm run typecheck

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/          # UI components
│   ├── InputBar.tsx
│   ├── MessageDisplayArea.tsx
│   └── UserMessage.tsx
├── hooks/              # React hooks (all logic)
│   ├── useChatMessages.ts      # Main chat state + API calls
│   ├── useAutoResize.ts
│   └── useEnterSubmit.ts
├── services/           # Backend API layer
│   ├── apiClient.ts           # Generic HTTP client
│   ├── chatService.ts         # Chat API methods
│   └── chatService.mock.ts    # Mock for testing
├── types/              # TypeScript types
│   ├── api.ts                 # API DTOs
│   └── vite-env.d.ts
├── utils/              # Utilities
│   └── messageUtils.ts
└── screens/            # Page components
    └── MainScreen.tsx
```

## Key Features

- **Auto-resizing textarea** - Grows with content (up to 10 rows)
- **Timestamp separators** - Show time when 5+ minutes between messages
- **Enter to send** - Shift+Enter for newlines
- **Backend ready** - Complete API integration layer
- **Mock API mode** - Develop without backend
- **Loading states** - Shows when waiting for responses
- **Error handling** - Graceful API error management
- **Conversation tracking** - Maintains context across messages

## Code Quality

- ✅ Full TypeScript coverage
- ✅ Type-safe API contracts (DTOs)
- ✅ Proper JSDoc comments
- ✅ Clean separation: UI in components, logic in hooks
- ✅ `npm run typecheck` - Verify types
- ✅ Production-ready build

## Styling

Uses **Tailwind CSS v4**:
- CSS-based configuration
- Import via `@import "tailwindcss"` in `index.css`
- Responsive utility classes
- System font stack


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

## Design System

This project uses **CSS variables** for all design tokens (colors, spacing, shadows, etc.), making it easy to maintain consistency and support theming.

### CSS Variables
All design tokens are defined in `src/index.css`:
- **Colors**: Text, borders, surfaces, brand colors
- **Spacing**: Consistent spacing scale (xs to xl)
- **Typography**: Font family, sizes, line heights
- **Shadows**: Small, medium, and large shadows
- **Transitions**: Fast, normal, and slow durations
- **Z-index**: Layering system for overlays

See `DESIGN_SYSTEM.md` for complete documentation.

### Styling Approach
- **Tailwind classes** for layout and utilities (flex, grid, padding)
- **CSS variables** for theming (colors, shadows, typography)
- **Custom component classes** for variable-based overrides (`.input-bar`, `.input-bar-button`)

This hybrid approach gives us rapid development with Tailwind while maintaining a consistent, theme-able design system via CSS variables.

### Adding Dark Mode
To add dark mode in the future, just override the CSS variables:
```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-background: #111827;
    --color-text-primary: #f9fafb;
    /* ... etc */
  }
}
```
