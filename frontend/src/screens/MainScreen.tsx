import InputBarSection from '../components/InputBarSection'
import MessageDisplayArea from '../components/MessageDisplayArea'

/**
 * Main application screen with ChatGPT-style layout.
 * Features a centered input bar at the bottom with space above for messages.
 */
export default function MainScreen() {
  const handleSubmit = () => {
    console.log('Message submitted')
    // TODO: Send message to backend
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Message area - scrollable content above the input */}
      <MessageDisplayArea maxWidth={768}>
        {/* TODO: Add message components here */}
      </MessageDisplayArea>

      {/* Input footer with spacing and shadow - centered with max width */}
      <div className="flex justify-center px-4 pb-4">
        <div className="input-section-container max-w-3xl w-full">
          <InputBarSection maxWidth={768} onSubmit={handleSubmit} onSend={handleSubmit} />
        </div>
      </div>
    </div>
  )
}
