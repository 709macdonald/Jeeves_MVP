import InputBarSection from '../components/InputBarSection'
import MessageDisplayArea from '../components/MessageDisplayArea'
import UserMessage from '../components/UserMessage'
import TimestampSeparator from '../components/TimestampSeparator'
import { useChatMessages } from '../hooks'
import { getMessagesWithTimestamps } from '../utils/messageUtils'

/**
 * Main application screen with ChatGPT-style layout.
 * Features a centered input bar at the bottom with space above for messages.
 */
export default function MainScreen() {
  const { messages, inputValue, setInputValue, handleSubmit } = useChatMessages()
  const messagesWithTimestamps = getMessagesWithTimestamps(messages)

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Message area - scrollable content above the input */}
      <MessageDisplayArea maxWidth={768}>
        {messagesWithTimestamps.map(({ message, showTimestamp }) => (
          <div key={message.id}>
            {showTimestamp && <TimestampSeparator timestamp={message.timestamp} />}
            <UserMessage message={message.text} />
          </div>
        ))}
      </MessageDisplayArea>

      {/* Input footer with spacing and shadow - centered with max width */}
      <div className="flex justify-center px-4 pb-4">
        <div className="input-section-container max-w-3xl w-full">
          <InputBarSection
            maxWidth={768}
            onSubmit={handleSubmit}
            onSend={handleSubmit}
            inputProps={{
              value: inputValue,
              onChange: (e) => setInputValue(e.target.value),
            }}
          />
        </div>
      </div>
    </div>
  )
}
