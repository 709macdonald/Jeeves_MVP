/**
 * Validates incoming message requests from frontend
 */
export function validateMessage(req, res, next) {
  const { message, timestamp } = req.body

  // Check required fields
  if (!message || typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ error: 'Invalid or missing message field' })
  }

  if (!timestamp || typeof timestamp !== 'string') {
    return res.status(400).json({ error: 'Invalid or missing timestamp field' })
  }

  // Optional: validate conversationId if present
  const { conversationId } = req.body
  if (conversationId && typeof conversationId !== 'string') {
    return res.status(400).json({ error: 'Invalid conversationId field' })
  }

  next()
}
