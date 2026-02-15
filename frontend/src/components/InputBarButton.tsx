import type { ButtonHTMLAttributes, ReactNode, CSSProperties } from 'react'

type InputBarButtonProps = {
  icon?: ReactNode
  loading?: boolean
  variant?: 'primary' | 'secondary'
  size?: number // diameter in px, default 40
} & ButtonHTMLAttributes<HTMLButtonElement>

// Reusable button component intended to sit next to the InputBar.
// Accessible by default, with simple inline styles and a loading state.
export default function InputBarButton({
  icon,
  loading = false,
  variant = 'primary',
  size = 40,
  style,
  disabled,
  'aria-label': ariaLabel,
  type = 'button',
  ...rest
}: InputBarButtonProps) {
  const primaryStyle: CSSProperties = {
    border: '1px solid #1d4ed8', // blue-700
    backgroundColor: '#2563eb', // blue-600
    color: '#ffffff',
  }

  const secondaryStyle: CSSProperties = {
    border: '1px solid #d1d5db', // gray-300
    backgroundColor: '#f9fafb', // gray-50
    color: '#111827', // gray-900
  }

  const baseStyle: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: size,
    height: size,
    padding: 0,
    borderRadius: '50%',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    opacity: disabled || loading ? 0.6 : 1,
    transition: 'opacity 120ms ease, transform 120ms ease',
    userSelect: 'none',
    ...(variant === 'primary' ? primaryStyle : secondaryStyle),
    ...(style || {}),
  }

  // Icon-only button; use aria-label for accessibility

  return (
    <button
      type={type}
      style={baseStyle}
      disabled={disabled || loading}
      aria-label={ariaLabel || 'Action button'}
      {...rest}
    >
      {icon}
    </button>
  )
}
