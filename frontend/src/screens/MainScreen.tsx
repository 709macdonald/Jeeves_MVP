import InputBarSection from '../components/InputBarSection'

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
      <div className="flex-1 overflow-y-auto">
        {/* TODO: Add message list component here */}
      </div>

      {/* Sticky input footer with backdrop blur */}
      <div className="sticky bottom-0 w-full border-t border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <InputBarSection maxWidth={768} onSubmit={handleSubmit} onSend={handleSubmit} />
        </div>
      </div>
    </div>
  )
}
