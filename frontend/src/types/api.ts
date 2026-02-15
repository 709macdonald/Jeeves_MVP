/**
 * API Data Transfer Objects (DTOs)
 */

/**
 * Request sent to backend
 */
export interface SendMessageRequestDto {
  message: string
  conversationId?: string
  timestamp: string // ISO 8601
}

/**
 * Response from backend
 */
export interface SendMessageResponseDto {
  id: string
  message: string
  timestamp: string // ISO 8601
  conversationId: string
  sender: 'user' | 'assistant'
}
