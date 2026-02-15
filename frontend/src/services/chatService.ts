import type { SendMessageRequestDto } from '../types/api'

const API_URL = 'http://localhost:3001'

/**
 * Send a message to the backend
 */
export async function sendMessage(message: string, conversationId?: string): Promise<void> {
  const request: SendMessageRequestDto = {
    message,
    conversationId,
    timestamp: new Date().toISOString(),
  }

  console.log('📤 Sending message:', request)
  
  try {
    const response = await fetch(`${API_URL}/chat/message`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request),
    })
    
    if (!response.ok) {
      throw new Error(`Backend responded with ${response.status}`)
    }
    
    const data = await response.json()
    console.log('✅ Message sent successfully')
    console.log('📥 Backend response:', data)
  } catch (error) {
    console.error('❌ Failed to send message:', error)
    throw error
  }
}
