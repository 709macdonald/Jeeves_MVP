"""
Data Transfer Objects for AI Agent
"""

class MessageDTO:
    """Validates incoming message data"""
    
    def __init__(self, data):
        self.message = data.get('message')
        self.conversation_id = data.get('conversationId')
        self.timestamp = data.get('timestamp')
        
        # Validate required fields
        if not self.message or not isinstance(self.message, str):
            raise ValueError("Invalid or missing 'message' field")
        
        if not self.timestamp or not isinstance(self.timestamp, str):
            raise ValueError("Invalid or missing 'timestamp' field")
    
    def to_dict(self):
        """Convert back to dictionary"""
        return {
            'message': self.message,
            'conversationId': self.conversation_id,
            'timestamp': self.timestamp
        }
