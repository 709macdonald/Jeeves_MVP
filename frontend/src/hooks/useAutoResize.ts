import { useEffect, useRef } from 'react'

/**
 * Custom hook for auto-resizing a textarea element.
 * Grows the textarea height as content increases, up to a maximum number of rows.
 * 
 * @param maxRows - Maximum number of rows before scrolling. Default: 10
 * @param onInput - Optional additional input handler to chain
 * @returns Ref to attach to textarea and input event handler
 */
export function useAutoResize(
  maxRows: number = 10,
  onInput?: React.FormEventHandler<HTMLTextAreaElement>
) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const resize = () => {
    const textarea = textareaRef.current
    if (!textarea) return

    const computedStyle = window.getComputedStyle(textarea)
    const lineHeight = parseFloat(computedStyle.lineHeight || '20')
    const paddingTop = parseFloat(computedStyle.paddingTop || '0')
    const paddingBottom = parseFloat(computedStyle.paddingBottom || '0')
    const borderTop = parseFloat(computedStyle.borderTopWidth || '0')
    const borderBottom = parseFloat(computedStyle.borderBottomWidth || '0')

    const maxHeight = lineHeight * maxRows + paddingTop + paddingBottom + borderTop + borderBottom

    textarea.style.height = 'auto'
    const newHeight = Math.min(textarea.scrollHeight, maxHeight)
    textarea.style.height = `${newHeight}px`
    textarea.style.overflowY = textarea.scrollHeight > maxHeight ? 'auto' : 'hidden'
  }

  useEffect(() => {
    resize()
  }, [])

  const handleInput: React.FormEventHandler<HTMLTextAreaElement> = (e) => {
    resize()
    onInput?.(e)
  }

  return { textareaRef, handleInput }
}
