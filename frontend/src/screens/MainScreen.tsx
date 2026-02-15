// MainScreen: renders a blank white full-viewport screen
import InputBarSection from '../components/InputBarSection'

export default function MainScreen() {
  return (
    <div id="main-screen" style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* Bottom-centered bar using inline styles */}
      <div
        id="input-bar-container"
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          justifyContent: 'center',
          padding: 16,
        }}
      >
        <InputBarSection
          onSubmit={() => {
            // Placeholder action for now
            console.log('Submit from InputBarSection')
          }}
          onSend={() => {
            // Placeholder action for now
            console.log('Send clicked')
          }}
        />
      </div>
    </div>
  )
}
