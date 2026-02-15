import type { CSSProperties, ReactNode } from 'react'

type MessageDisplayAreaProps = {
  /** Child elements to render (typically message components) */
  children?: ReactNode
  /** Additional CSS styles for the container */
  style?: CSSProperties
  /** Maximum width of the message area in pixels. Default: 768 */
  maxWidth?: number
  /** Additional CSS classes for the container */
  className?: string
}

/**
 * Message display area component for showing conversation messages.
 * Scrollable container that displays messages above the input section.
 */
export default function MessageDisplayArea({
  children,
  style,
  maxWidth = 768,
  className = '',
}: MessageDisplayAreaProps) {
  return (
    <div className={`flex-1 overflow-y-auto flex justify-center px-4 ${className}`}>
      <div
        className="w-full py-4"
        style={{ maxWidth, ...style }}
      >
        {children || (
          <div className="flex items-center justify-center h-full text-gray-400">
            {/* Placeholder for empty state */}
            <p>No messages yet</p>
          </div>
        )}
      </div>
    </div>
  )
}
