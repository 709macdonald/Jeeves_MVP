"""
Simple API key middleware for authentication
"""
from functools import wraps
from flask import request, jsonify
from config import Config

def require_api_key(f):
    """Decorator to check API key in request header"""
    @wraps(f)
    def decorated_function(*args, **kwargs):
        api_key = request.headers.get('X-API-Key')
        
        # Use API key from config, fallback to default for development
        expected_key = Config.API_KEY or "jeeves-backend-secret-key-123"
        
        if not api_key:
            return jsonify({'error': 'Missing API key'}), 401
        
        if api_key != expected_key:
            return jsonify({'error': 'Invalid API key'}), 403
        
        return f(*args, **kwargs)
    return decorated_function

