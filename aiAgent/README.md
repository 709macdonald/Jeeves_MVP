# AI Agent - API Configuration

This AI Agent supports multiple AI providers, giving you the flexibility to choose between OpenAI, Claude (Anthropic), or Gemini (Google).

## Setup

### 1. Install Dependencies

```bash
pip install -r requirements.txt
```

### 2. Configure API Keys

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit the `.env` file and add your API keys:

```env
# OpenAI API Key (for GPT models)
OPENAI_API_KEY=sk-proj-...

# Anthropic API Key (for Claude models)
ANTHROPIC_API_KEY=sk-ant-...

# Google AI API Key (for Gemini models)
GOOGLE_AI_API_KEY=AIza...

# Choose your default provider: openai, anthropic, or google
DEFAULT_AI_PROVIDER=openai

# Internal API key for backend-to-aiAgent communication
API_KEY=your-secure-api-key-here
```

### 3. Get Your API Keys

- **OpenAI**: https://platform.openai.com/api-keys
- **Anthropic (Claude)**: https://console.anthropic.com/
- **Google AI (Gemini)**: https://aistudio.google.com/app/apikey

> **Note**: You don't need to configure all three providers. Configure at least one to get started!

## Configuration Validation

When you start the AI Agent, it will automatically validate your configuration and display:
- Which AI providers are configured
- Your default provider
- Any missing configurations

```bash
python app.py
```

You should see output like:
```
🤖 AI Agent Configuration:
   Internal API Key: ✅ Set
   Available Providers: ['openai', 'anthropic']
   Default Provider: openai
🤖 AI Agent running on http://localhost:5000
```

## API Endpoints

### Check Configuration Status
```bash
GET /config/status
Headers: X-API-Key: your-internal-api-key
```

Returns:
```json
{
  "internal_api_key_set": true,
  "available_providers": ["openai", "anthropic", "google"],
  "default_provider": "openai",
  "default_provider_configured": true,
  "total_providers_configured": 3
}
```

## Security Notes

- Never commit your `.env` file to version control
- The `.gitignore` file is configured to exclude `.env`
- Keep your API keys secure and rotate them regularly
- Use different API keys for development and production

## Troubleshooting

**No AI providers configured?**
- Make sure you've created a `.env` file (not just `.env.example`)
- Check that your API keys are correctly copied without extra spaces
- Verify your API keys are valid by testing them in the provider's playground

**Import errors?**
- Make sure you've installed all dependencies: `pip install -r requirements.txt`
- Check that you're using Python 3.7 or higher
