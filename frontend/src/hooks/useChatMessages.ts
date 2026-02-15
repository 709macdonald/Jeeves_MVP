import { useState, useCallback } from 'react'

export type Message = {
  id: string
  text: string
  timestamp: Date
  sender: 'user' | 'assistant'
}

/**
 * Hook to manage chat messages and input state.
 * Handles adding messages, clearing input, and managing message list.
 */
export function useChatMessages() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')

  /**
   * Add a new message to the chat
   */
  const addMessage = useCallback((text: string, sender: 'user' | 'assistant' = 'user') => {
    const newMessage: Message = {
      id: `${Date.now()}-${Math.random()}`,
      text,
      timestamp: new Date(),
      sender,
    }
    setMessages((prev) => [...prev, newMessage])
  }, [])

  /**
   * Handle message submission
   */
  const handleSubmit = useCallback(() => {
    const trimmedValue = inputValue.trim()
    if (!trimmedValue) return

    // Add the user's message
    addMessage(trimmedValue, 'user')
    
    // Clear the input
    setInputValue('')
  }, [inputValue, addMessage])

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
    addMessage,
    clearMessages,
  }
}
