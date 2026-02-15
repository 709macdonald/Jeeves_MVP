import express from 'express'
import { validateMessage } from '../middleware/validation.js'
import { rateLimit } from '../middleware/rateLimit.js'

const router = express.Router()
const AI_AGENT_URL = 'http://127.0.0.1:5000'
const AI_AGENT_API_KEY = 'jeeves-backend-secret-key-123'

// POST /chat/message - receives message and forwards to AI agent
router.post('/message', rateLimit, validateMessage, async (req, res) => {
  console.log('📥 Received message:', req.body)
  
  try {
    // Forward to AI agent with API key
    console.log('🔄 Forwarding to AI agent...')
    const response = await fetch(`${AI_AGENT_URL}/process`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'X-API-Key': AI_AGENT_API_KEY
      },
      body: JSON.stringify(req.body)
    })
    
    const result = await response.json()
    console.log('✅ AI agent processed:', result)
    
    // Send back acknowledgment (no actual response yet)
    res.status(200).json({ received: true, processed: result.processed })
  } catch (error) {
    console.error('❌ Error forwarding to AI agent:', error.message)
    res.status(200).json({ received: true, error: 'AI agent unavailable' })
  }
})

export default router
