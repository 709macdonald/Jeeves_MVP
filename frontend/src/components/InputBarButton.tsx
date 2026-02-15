import type { ButtonHTMLAttributes, ReactNode, CSSProperties } from 'react'

type InputBarButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Icon to display inside the button */
  icon?: ReactNode
  /** Show loading state (disables button) */
  loading?: boolean
  /** Visual variant: primary (blue) or secondary (white/gray) */
  variant?: 'primary' | 'secondary'
  /** Button diameter in pixels. Default: 40 */
  size?: number
}

/**
 * Circular icon button for actions next to the input bar.
 * Fully accessible with hover/active states and loading support.
 */
export default function InputBarButton({
  icon,
  loading = false,
  variant = 'secondary',
  size = 40,
  style,
  disabled,
  className,
  'aria-label': ariaLabel,
  type = 'button',
  ...rest
}: InputBarButtonProps) {
  const baseClasses = [
    'input-bar-button', // Custom class for CSS variable styling
    'inline-flex items-center justify-center',
    'rounded-full select-none',
    'transition-all duration-200 ease-in-out',
    'active:scale-95',
    'disabled:opacity-40 disabled:cursor-not-allowed',
    'cursor-pointer',
    'shadow-sm hover:shadow-md',
  ].join(' ')

  const variantClasses =
    variant === 'primary'
      ? 'bg-blue-600 text-white hover:bg-blue-700 border-0'
      : 'bg-white text-gray-700 hover:bg-gray-50 border-0'

  const dimensionStyle: CSSProperties = {
    width: size,
    height: size,
    padding: 0,
    ...style,
  }

  return (
    <button
      type={type}
      className={[baseClasses, variantClasses, className].filter(Boolean).join(' ')}
      style={dimensionStyle}
      disabled={disabled || loading}
      aria-label={ariaLabel || 'Action button'}
      {...rest}
    >
      {icon}
    </button>
  )
}
