import type { CSSProperties } from 'react'

type UserMessageProps = {
  /** The message text content to display */
  message: string
  /** Optional timestamp for the message */
  timestamp?: Date | string
  /** Additional CSS styles for the container */
  style?: CSSProperties
  /** Additional CSS classes for the container */
  className?: string
}

/**
 * User message component for displaying messages sent by the user.
 * Features a clean, minimal design aligned to the right side.
 */
export default function UserMessage({
  message,
  timestamp,
  style,
  className = '',
}: UserMessageProps) {
  return (
    <div className={`flex justify-end mb-4 ${className}`} style={style}>
      <div className="flex flex-col items-end max-w-[80%]">
        {/* Message bubble */}
        <div className="bg-blue-600 text-white px-4 py-3 rounded-2xl rounded-tr-md">
          <p className="text-base leading-relaxed whitespace-pre-wrap break-words">
            {message}
          </p>
        </div>
        
        {/* Optional timestamp */}
        {timestamp && (
          <span className="text-xs text-gray-400 mt-1 px-1">
            {typeof timestamp === 'string' 
              ? timestamp 
              : timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
          </span>
        )}
      </div>
    </div>
  )
}
