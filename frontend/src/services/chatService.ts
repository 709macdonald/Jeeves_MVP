import type { SendMessageRequestDto } from '../types/api'

/**
 * Send a message - just console logs for now
 */
export function sendMessage(message: string, conversationId?: string): void {
  const request: SendMessageRequestDto = {
    message,
    conversationId,
    timestamp: new Date().toISOString(),
  }

  console.log('📤 Sending message:', request)
  
  // TODO: Send to actual backend when ready
}
