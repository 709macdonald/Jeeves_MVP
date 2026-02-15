import type { CSSProperties, ReactNode, InputHTMLAttributes, KeyboardEvent } from 'react'
import InputBar from './InputBar'
import InputBarButton from './InputBarButton'

type InputBarSectionProps = {
  inputProps?: InputHTMLAttributes<HTMLInputElement>
  children?: ReactNode
  style?: CSSProperties
  maxWidth?: number
  onSubmit?: () => void
  // Default primary button (Send) configuration
  showSendButton?: boolean
  onSend?: () => void
  sendLoading?: boolean
  sendAriaLabel?: string
}

// Horizontal section that hosts the InputBar and any number of InputBarButtons.
// Keeps layout concerns in one place; parent can style the outer container.
export default function InputBarSection({
  inputProps,
  children,
  style,
  maxWidth = 640,
  onSubmit,
  showSendButton = true,
  onSend,
  sendLoading = false,
  sendAriaLabel,
}: InputBarSectionProps) {
  // Container stacks the input on top with a buttons row beneath
  const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    width: '100%',
    maxWidth,
    ...(style || {}),
  }

  // Bottom row that holds any extra buttons on the left and send button on the right
  const buttonsRowStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    width: '100%',
  }

  const leftButtonsStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    flex: 1, // occupy remaining space so Send sits at right
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    inputProps?.onKeyDown?.(e)
    if (e.key === 'Enter') {
      onSubmit?.()
    }
  }

  return (
    <div style={containerStyle}>
      {/* Top input bar */}
      <InputBar
        style={{ width: '100%' }}
        {...inputProps}
        onKeyDown={handleKeyDown}
      />

      {/* Bottom row: other buttons left, Send button right */}
      <div style={buttonsRowStyle}>
        <div style={leftButtonsStyle}>{children}</div>
        {showSendButton && (
          <InputBarButton
            loading={sendLoading}
            aria-label={sendAriaLabel || 'Send message'}
            variant="primary"
            // Inline paper plane icon for the default send action
            icon={(
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2 .01 7z" fill="currentColor" />
              </svg>
            )}
            onClick={onSend}
          />
        )}
      </div>
    </div>
  )
}
