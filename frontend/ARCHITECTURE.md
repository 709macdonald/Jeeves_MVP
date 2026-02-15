# Architecture Guide

## Separation of Concerns

This project follows a strict separation between **UI (components)** and **logic (hooks)**.

### Components (`src/components/`)
✅ **Should contain:**
- JSX markup and rendering
- Basic event handlers (onClick, onChange, etc.)
- Props destructuring and spreading
- CSS classes and inline styles
- Conditional rendering

❌ **Should NOT contain:**
- Complex calculations
- State management logic
- Side effects (useEffect, timers, etc.)
- API calls
- Complex algorithms

### Hooks (`src/hooks/`)
✅ **Should contain:**
- All reusable logic
- State management (useState, useReducer)
- Side effects (useEffect, timers, subscriptions)
- Complex calculations
- API calls and data fetching
- Refs management with complex behavior

### Example: InputBar Component

**Before refactoring (BAD):**
```tsx
export default function InputBar() {
  const ref = useRef<HTMLTextAreaElement | null>(null)
  
  // ❌ Complex resize logic in component
  const autoResize = () => {
    const ta = ref.current
    if (!ta) return
    const cs = window.getComputedStyle(ta)
    // ... lots of calculation logic
  }
  
  useEffect(() => {
    autoResize()
  }, [])
  
  return <textarea ref={ref} onInput={autoResize} />
}
```

**After refactoring (GOOD):**
```tsx
// Component - just rendering
export default function InputBar() {
  const { textareaRef, resize } = useAutoResize()
  return <textarea ref={textareaRef} onInput={resize} />
}

// Hook - all the logic
export function useAutoResize() {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  
  const resize = () => {
    // All complex logic here
  }
  
  useEffect(() => {
    resize()
  }, [])
  
  return { textareaRef, resize }
}
```

## When to Extract to a Hook

Extract logic to a hook when:
- ✅ It involves `useEffect`, `useState`, or other hooks
- ✅ It has complex calculations (>5 lines)
- ✅ It manipulates DOM directly (refs)
- ✅ It could be reused in another component
- ✅ It handles async operations

Keep logic inline when:
- ✅ Simple event forwarding (`onInput?.(e)`)
- ✅ Basic conditional logic (`if (!something) return null`)
- ✅ Simple prop transformations
- ✅ CSS class composition

## Current Architecture

```
src/
├── components/          ← Pure UI, no complex logic
│   ├── InputBar.tsx
│   ├── InputBarButton.tsx
│   └── InputBarSection.tsx
├── hooks/              ← All reusable logic
│   ├── useAutoResize.ts
│   └── index.ts
├── screens/            ← Page composition
│   └── MainScreen.tsx
└── App.tsx            ← Root
```

## Adding New Features

### Example: Adding Message List

1. **Create the UI component:**
```tsx
// src/components/MessageList.tsx
export default function MessageList({ messages }) {
  return (
    <div>
      {messages.map(msg => <MessageBubble key={msg.id} {...msg} />)}
    </div>
  )
}
```

2. **Create the logic hook:**
```tsx
// src/hooks/useMessages.ts
export function useMessages() {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  
  const fetchMessages = async () => {
    setLoading(true)
    const data = await api.getMessages()
    setMessages(data)
    setLoading(false)
  }
  
  useEffect(() => {
    fetchMessages()
  }, [])
  
  return { messages, loading, refetch: fetchMessages }
}
```

3. **Use in screen:**
```tsx
// src/screens/MainScreen.tsx
export default function MainScreen() {
  const { messages, loading } = useMessages()
  
  return <MessageList messages={messages} loading={loading} />
}
```

## Benefits

- 🧪 **Testable**: Hooks can be tested independently
- ♻️ **Reusable**: Logic can be shared across components
- 📖 **Readable**: Components stay focused on UI
- 🔧 **Maintainable**: Easy to find and update logic
- 🎯 **Focused**: Single responsibility per file
