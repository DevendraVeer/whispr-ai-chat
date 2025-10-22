const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage for conversations (we'll add MongoDB later)
let conversations = [];

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, conversationId } = req.body;

    // Find or create conversation
    let conversation = conversations.find(c => c.id === conversationId);
    if (!conversation) {
      conversation = { id: conversationId, messages: [] };
      conversations.push(conversation);
    }

    // Add user message
    conversation.messages.push({ role: 'user', content: message });

    // Call Groq API
    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: 'llama-3.1-8b-instant',
        messages: conversation.messages,
        temperature: 0.7,
        max_tokens: 1000
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const aiMessage = response.data.choices[0].message.content;
    
    // Add AI response to conversation
    conversation.messages.push({ role: 'assistant', content: aiMessage });

    res.json({ 
      message: aiMessage,
      conversationId: conversation.id 
    });

  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to get AI response' });
  }
});

// Get all conversations
app.get('/api/conversations', (req, res) => {
  res.json(conversations);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});