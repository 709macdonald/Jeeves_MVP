import { useState, useCallback } from 'react'
import { sendMessage } from '../services'

export type Message = {
  id: string
  text: string
  timestamp: Date
  sender: 'user' | 'assistant'
}

/**
 * Hook to manage chat messages and input state.
 * Super simple: user types, hits send, we console log the DTO.
 */
export function useChatMessages() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [conversationId] = useState(() => `conv-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`)

  /**
   * Handle message submission - show the message and send to backend
   */
  const handleSubmit = useCallback(() => {
    const trimmedValue = inputValue.trim()
    if (!trimmedValue) return

    // Add the user's message to the chat
    const newMessage: Message = {
      id: `${Date.now()}-${Math.random()}`,
      text: trimmedValue,
      timestamp: new Date(),
      sender: 'user',
    }
    setMessages((prev) => [...prev, newMessage])

    // Send it to backend (fire and forget, we don't wait for response)
    sendMessage(trimmedValue, conversationId).catch((error) => {
      console.error('Error sending message:', error)
    })
    
    // Clear the input
    setInputValue('')
  }, [inputValue, conversationId])

  /**
   * Clear all messages
   */
  const clearMessages = useCallback(() => {
    setMessages([])
  }, [])

  return {
    messages,
    inputValue,
    setInputValue,
    handleSubmit,
    clearMessages,
  }
}
