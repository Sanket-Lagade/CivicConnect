import React, { useState } from 'react';
import { MessageCircle, Send, X, Bot } from 'lucide-react';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: "Hi! I'm here to help you with reporting civic issues. What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const botResponses = {
    'report': "To report an issue, click on 'Report Issue' in the navigation menu. You'll need to provide a description, select a category, and optionally upload a photo. Your location will be detected automatically.",
    'categories': "You can report various types of issues including: Road Maintenance, Street Lighting, Waste Management, Water Issues, Parks & Recreation, Traffic & Transportation, Building Violations, and Noise Complaints.",
    'status': "After reporting an issue, you can track its status. Issues can be marked as Pending, In Progress, or Resolved. You'll receive updates as the status changes.",
    'photo': "Yes! You can upload a photo when reporting an issue. This helps authorities understand the problem better and respond more effectively.",
    'location': "We automatically detect your location using GPS when you report an issue. Make sure location services are enabled in your browser.",
    'urgent': "For urgent safety issues that require immediate attention, please contact emergency services directly. Use CivicConnect for non-emergency civic issues.",
    'help': "Here's what I can help you with:\n• How to report an issue\n• Available issue categories\n• Tracking issue status\n• Uploading photos\n• Location services\n• Emergency vs non-emergency issues",
    'default': "I'm here to help with questions about reporting civic issues. You can ask me about the reporting process, available categories, photo uploads, or anything else related to using CivicConnect!"
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simple keyword matching for bot responses
    const lowerInput = inputValue.toLowerCase();
    let botResponse = botResponses.default;

    if (lowerInput.includes('report') || lowerInput.includes('how')) {
      botResponse = botResponses.report;
    } else if (lowerInput.includes('categories') || lowerInput.includes('types')) {
      botResponse = botResponses.categories;
    } else if (lowerInput.includes('status') || lowerInput.includes('track')) {
      botResponse = botResponses.status;
    } else if (lowerInput.includes('photo') || lowerInput.includes('picture') || lowerInput.includes('image')) {
      botResponse = botResponses.photo;
    } else if (lowerInput.includes('location') || lowerInput.includes('gps')) {
      botResponse = botResponses.location;
    } else if (lowerInput.includes('urgent') || lowerInput.includes('emergency')) {
      botResponse = botResponses.urgent;
    } else if (lowerInput.includes('help')) {
      botResponse = botResponses.help;
    }

    // Simulate bot thinking delay
    setTimeout(() => {
      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg transition-all duration-300 z-50 flex items-center justify-center ${
          isOpen 
            ? 'bg-gray-600 hover:bg-gray-700' 
            : 'bg-blue-600 hover:bg-blue-700 hover:scale-110'
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl z-50 flex flex-col border border-gray-200">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg">
            <div className="flex items-center space-x-2">
              <Bot className="h-6 w-6" />
              <div>
                <h3 className="font-semibold">CivicConnect Assistant</h3>
                <p className="text-blue-100 text-sm">Ask me about reporting issues</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  {message.isBot && (
                    <div className="flex items-center space-x-2 mb-1">
                      <Bot className="h-4 w-4" />
                      <span className="text-xs font-medium">Assistant</span>
                    </div>
                  )}
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;