from flask import Flask, request, jsonify
from flask_cors import CORS
from orchestrator import handle_message
from middleware import require_api_key
from dto import MessageDTO
from config import Config

app = Flask(__name__)
CORS(app)

@app.route('/process', methods=['POST'])
@require_api_key
def process_message():
    """Receive message from backend, validate and process it"""
    try:
        # Validate incoming data with DTO
        message_dto = MessageDTO(request.json)
        print('🤖 AI Agent received:', message_dto.to_dict())
        
        # Pass to orchestrator
        result = handle_message(message_dto.to_dict())
        
        return jsonify(result)
    except ValueError as e:
        print(f'❌ Validation error: {e}')
        return jsonify({'error': str(e)}), 400
    except Exception as e:
        print(f'❌ Error processing message: {e}')
        return jsonify({'error': 'Internal server error'}), 500

@app.route('/config/status', methods=['GET'])
@require_api_key
def config_status():
    """Check configuration status of AI providers"""
    try:
        status = Config.validate_config()
        return jsonify(status)
    except Exception as e:
        print(f'❌ Error checking config: {e}')
        return jsonify({'error': 'Internal server error'}), 500

if __name__ == '__main__':
    # Validate configuration on startup
    config_status = Config.validate_config()
    print('🤖 AI Agent Configuration:')
    print(f"   Internal API Key: {'✅ Set' if config_status['internal_api_key_set'] else '❌ Not set'}")
    print(f"   Available Providers: {config_status['available_providers'] or 'None'}")
    print(f"   Default Provider: {config_status['default_provider']}")
    
    if not config_status['available_providers']:
        print('⚠️  Warning: No AI provider API keys configured!')
        print('   Please create a .env file based on .env.example')
    
    print('🤖 AI Agent running on http://localhost:5000')
    app.run(port=5000, debug=True)
