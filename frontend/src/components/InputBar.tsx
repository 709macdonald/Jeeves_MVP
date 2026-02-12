import type { InputHTMLAttributes } from 'react'

type InputBarProps = InputHTMLAttributes<HTMLInputElement>

// Minimal input-only component with default inline styles and accessible defaults.
// Parent can override both styles and attributes via props; we merge defaults first.
export default function InputBar(props: InputBarProps) {
  const { style, ...rest } = props

  const defaultStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: 640,
    padding: '10px 12px',
    borderRadius: 8,
    border: '1px solid #d1d5db',
    outline: 'none',
    fontSize: 14,
  }

  const defaultInputProps = {
    placeholder: 'Type a message…',
    'aria-label': 'Message input',
  }

  return (
    <input
      type="text"
      style={{ ...defaultStyle, ...(style || {}) }}
      {...defaultInputProps}
      {...rest}
    />
  )
}

