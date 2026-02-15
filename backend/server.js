import express from 'express'
import cors from 'cors'
import chatRoutes from './routes/chat.js'

const app = express()
const PORT = 3001

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/chat', chatRoutes)

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`)
})
