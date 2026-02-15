import type { KeyboardEvent } from 'react'

/**
 * Custom hook for handling Enter key submission in textareas.
 * Enter submits, Shift+Enter adds a newline.
 * 
 * @param onSubmit - Callback to execute when Enter is pressed (without Shift)
 * @param onKeyDown - Optional additional keydown handler to chain
 * @returns Keyboard event handler for textarea
 */
export function useEnterSubmit(
  onSubmit?: () => void,
  onKeyDown?: (e: KeyboardEvent<HTMLTextAreaElement>) => void
) {
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    // Call any additional keydown handler first
    onKeyDown?.(e)

    // Submit on Enter (without Shift)
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      onSubmit?.()
    }
  }

  return handleKeyDown
}
