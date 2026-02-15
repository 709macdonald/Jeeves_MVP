import type { Message } from '../hooks/useChatMessages'

/**
 * Time gap threshold in milliseconds (5 minutes)
 */
const TIME_GAP_THRESHOLD = 5 * 60 * 1000

/**
 * Determines if a timestamp separator should be shown between two messages.
 * Returns true if there's a 5+ minute gap or if this is the first message.
 */
export function shouldShowTimestamp(
  currentMessage: Message,
  previousMessage?: Message
): boolean {
  // Always show timestamp for the first message
  if (!previousMessage) {
    return true
  }

  const timeDiff = currentMessage.timestamp.getTime() - previousMessage.timestamp.getTime()
  return timeDiff >= TIME_GAP_THRESHOLD
}

/**
 * Groups messages with their timestamp visibility.
 * Returns an array of items that can be either messages or timestamp indicators.
 */
export function getMessagesWithTimestamps(messages: Message[]) {
  return messages.map((message, index) => ({
    message,
    showTimestamp: shouldShowTimestamp(message, messages[index - 1]),
  }))
}
