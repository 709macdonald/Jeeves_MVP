import type { TextareaHTMLAttributes } from 'react'
import { useAutoResize } from '../hooks'

type InputBarProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  /** Maximum number of rows before scrolling kicks in. Default: 10 */
  maxRows?: number
}

/**
 * Auto-resizing textarea input styled like ChatGPT's message input.
 * Grows vertically as user types, up to maxRows, then scrolls.
 */
export default function InputBar({ className, maxRows = 10, onInput, ...rest }: InputBarProps) {
  const { textareaRef, handleInput } = useAutoResize(maxRows, onInput)

  const classes = [
    'input-bar', // Custom class for CSS variable styling
    'w-full px-4 py-3',
    'rounded-3xl',
    'outline-none',
    'text-base leading-relaxed',
    'placeholder-gray-400',
    'transition-colors duration-200',
    'resize-none',
    className,
  ].filter(Boolean).join(' ')

  return (
    <textarea
      ref={textareaRef}
      className={classes}
      placeholder="Type a message…"
      aria-label="Message input"
      rows={1}
      onInput={handleInput}
      {...rest}
    />
  )
}

