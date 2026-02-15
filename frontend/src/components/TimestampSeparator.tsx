import type { CSSProperties } from 'react'

type TimestampSeparatorProps = {
  /** The timestamp to display */
  timestamp: Date
  /** Additional CSS styles for the container */
  style?: CSSProperties
  /** Additional CSS classes for the container */
  className?: string
}

/**
 * Centered timestamp separator for showing time breaks in chat.
 * Displays when there's a significant gap (5+ minutes) between messages.
 * Styled with subtle, barely visible appearance.
 */
export default function TimestampSeparator({
  timestamp,
  style,
  className = '',
}: TimestampSeparatorProps) {
  const timeString = timestamp.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit' 
  })
  
  const dateString = timestamp.toLocaleDateString([], {
    month: 'short',
    day: 'numeric',
    year: timestamp.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined,
  })

  return (
    <div 
      className={`flex justify-center items-center my-4 ${className}`}
      style={style}
    >
      <div className="text-gray-300 text-xs px-3 py-1">
        {dateString} at {timeString}
      </div>
    </div>
  )
}
