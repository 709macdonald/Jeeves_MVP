import type { CSSProperties, ReactNode, TextareaHTMLAttributes } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useEnterSubmit } from '../hooks'
import InputBar from './InputBar'
import InputBarButton from './InputBarButton'

type InputBarSectionProps = {
  /** Props to pass through to the textarea input */
  inputProps?: TextareaHTMLAttributes<HTMLTextAreaElement>
  /** Additional action buttons to display on the left side of the send button */
  children?: ReactNode
  /** Additional CSS styles for the container */
  style?: CSSProperties
  /** Maximum width of the input section in pixels. Default: 640 */
  maxWidth?: number
  /** Callback when user presses Enter (without Shift) */
  onSubmit?: () => void
  /** Whether to show the default send button. Default: true */
  showSendButton?: boolean
  /** Callback when send button is clicked */
  onSend?: () => void
  /** Whether send button is in loading state */
  sendLoading?: boolean
  /** Accessible label for the send button */
  sendAriaLabel?: string
}

/**
 * Complete input section with auto-growing textarea and action buttons.
 * Includes a send button by default and supports custom action buttons.
 * Enter submits, Shift+Enter adds a newline.
 */
export default function InputBarSection({
  inputProps,
  children,
  style,
  maxWidth = 640,
  onSubmit,
  showSendButton = true,
  onSend,
  sendLoading = false,
  sendAriaLabel = 'Send message',
}: InputBarSectionProps) {
  const handleKeyDown = useEnterSubmit(onSubmit, inputProps?.onKeyDown)

  return (
    <div className="flex flex-col gap-3 w-full" style={{ maxWidth, ...style }}>
      <InputBar className="w-full" {...inputProps} onKeyDown={handleKeyDown} />

      <div className="flex items-center gap-3 w-full">
        <div className="flex items-center gap-3 flex-1">{children}</div>
        {showSendButton && (
          <InputBarButton
            loading={sendLoading}
            aria-label={sendAriaLabel}
            variant="secondary"
            icon={<FontAwesomeIcon icon={faPaperPlane} size="sm" />}
            onClick={onSend}
          />
        )}
      </div>
    </div>
  )
}
