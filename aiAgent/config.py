"""
Configuration management for AI Agent
Handles API keys for multiple AI providers
"""

import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

class Config:
    """Configuration class for AI providers and API keys"""
    
    # Internal API key for backend-to-aiAgent communication
    API_KEY = os.getenv('API_KEY')
    
    # AI Provider API Keys
    OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
    ANTHROPIC_API_KEY = os.getenv('ANTHROPIC_API_KEY')
    GOOGLE_AI_API_KEY = os.getenv('GOOGLE_AI_API_KEY')
    
    # Default AI provider
    DEFAULT_AI_PROVIDER = os.getenv('DEFAULT_AI_PROVIDER', 'openai')
    
    @classmethod
    def get_provider_key(cls, provider: str) -> str:
        """
        Get API key for a specific provider
        
        Args:
            provider: The AI provider name ('openai', 'anthropic', or 'google')
            
        Returns:
            The API key for the provider or None if not set
        """
        provider = provider.lower()
        
        if provider == 'openai':
            return cls.OPENAI_API_KEY
        elif provider == 'anthropic':
            return cls.ANTHROPIC_API_KEY
        elif provider == 'google':
            return cls.GOOGLE_AI_API_KEY
        else:
            return None
    
    @classmethod
    def is_provider_configured(cls, provider: str) -> bool:
        """
        Check if a provider has an API key configured
        
        Args:
            provider: The AI provider name
            
        Returns:
            True if the provider has an API key set, False otherwise
        """
        key = cls.get_provider_key(provider)
        return key is not None and len(key.strip()) > 0
    
    @classmethod
    def get_available_providers(cls) -> list:
        """
        Get list of providers that have API keys configured
        
        Returns:
            List of provider names that are configured
        """
        providers = []
        
        if cls.is_provider_configured('openai'):
            providers.append('openai')
        if cls.is_provider_configured('anthropic'):
            providers.append('anthropic')
        if cls.is_provider_configured('google'):
            providers.append('google')
            
        return providers
    
    @classmethod
    def validate_config(cls) -> dict:
        """
        Validate configuration and return status
        
        Returns:
            Dictionary with validation results
        """
        available = cls.get_available_providers()
        
        return {
            'internal_api_key_set': cls.API_KEY is not None and len(cls.API_KEY.strip()) > 0,
            'available_providers': available,
            'default_provider': cls.DEFAULT_AI_PROVIDER,
            'default_provider_configured': cls.is_provider_configured(cls.DEFAULT_AI_PROVIDER),
            'total_providers_configured': len(available)
        }
