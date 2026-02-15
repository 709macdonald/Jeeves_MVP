import type { ButtonHTMLAttributes, ReactNode } from 'react'

type InputBarButtonProps = {
  label?: string
  loading?: boolean
  icon?: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

// Reusable button component intended to sit next to the InputBar.
// Accessible by default, with simple inline styles and a loading state.
export default function InputBarButton({
  label = 'Send',
  loading = false,
  icon,
  style,
  disabled,
  'aria-label': ariaLabel,
  type = 'button',
  ...rest
}: InputBarButtonProps) {
  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '10px 14px',
    borderRadius: 8,
    border: '1px solid #1d4ed8', // blue-700
    backgroundColor: '#2563eb', // blue-600
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 600,
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    opacity: disabled || loading ? 0.6 : 1,
    transition: 'opacity 120ms ease, transform 120ms ease',
    userSelect: 'none',
    ...(style || {}),
  }

  // Minimal inline icon if none provided (paper plane)
  const defaultIcon = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2 .01 7z"
        fill="currentColor"
      />
    </svg>
  )

  const contentLabel = loading ? 'Sending…' : label

  return (
    <button
      type={type}
      style={baseStyle}
      disabled={disabled || loading}
      aria-label={ariaLabel || 'Send message'}
      {...rest}
    >
      {icon ?? defaultIcon}
      <span>{contentLabel}</span>
    </button>
  )
}
