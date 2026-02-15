/**
 * Rate limiting middleware (simple in-memory version for MVP)
 */
const requestCounts = new Map()
const RATE_LIMIT = 10 // requests per minute
const WINDOW_MS = 60 * 1000 // 1 minute

export function rateLimit(req, res, next) {
  // Use IP address as identifier (or could use conversationId)
  const identifier = req.ip || req.connection.remoteAddress

  const now = Date.now()
  const userRequests = requestCounts.get(identifier) || []

  // Filter out requests outside the time window
  const recentRequests = userRequests.filter(time => now - time < WINDOW_MS)

  if (recentRequests.length >= RATE_LIMIT) {
    return res.status(429).json({ error: 'Too many requests. Please slow down.' })
  }

  // Add current request
  recentRequests.push(now)
  requestCounts.set(identifier, recentRequests)

  next()
}
