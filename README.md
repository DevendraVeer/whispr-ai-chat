# Whispr - AI Chat Application

A full-stack AI-powered chat application built with React, Express.js, and Groq's Llama 3.1 model.

## Features

- 🤖 Real-time AI conversations using Groq API (Llama 3.1)
- 💬 Clean, modern chat interface with smooth animations
- 🔄 Conversation history with message counter
- ⚡ Fast response times with optimized backend
- 🎨 Dark-themed, responsive UI
- 🧹 Clear chat functionality

## Tech Stack

**Frontend:**
- React.js with Hooks (useState, useRef, useEffect)
- Axios for API communication
- Custom CSS with animations

**Backend:**
- Node.js & Express.js
- Groq API integration (Llama 3.1)
- RESTful API architecture

## Installation

### Prerequisites
- Node.js v14+ installed
- Groq API key (free at console.groq.com)

### Setup

1. Clone the repository
```bash
git clone https://github.com/DevendraVeer/whispr-ai-chat.git
cd whispr-ai-chat
```

2. Install server dependencies
```bash
cd server
npm install
```

3. Create `.env` file in server directory
```
PORT=5000
GROQ_API_KEY=your_groq_api_key_here
```

4. Install client dependencies
```bash
cd ../client
npm install
```

5. Run the application

**Terminal 1 - Start server:**
```bash
cd server
npm run dev
```

**Terminal 2 - Start client:**
```bash
cd client
npm start
```

6. Open `http://localhost:3000` in your browser

## Project Structure
```
whispr-ai-chat/
├── client/                 # React frontend
│   ├── src/
│   │   ├── Chat.js        # Main chat component
│   │   ├── Chat.css       # Styling
│   │   └── App.js         # Root component
│   └── package.json
├── server/                 # Express backend
│   ├── server.js          # Main server file
│   ├── .env               # Environment variables
│   └── package.json
└── README.md
```

## Features Implemented

- ✅ Conversation state management
- ✅ Real-time message updates
- ✅ Loading indicators during AI response
- ✅ Error handling and user feedback
- ✅ Clear chat functionality
- ✅ Message counter in header
- ✅ Responsive design for mobile/desktop

## Technical Highlights

- Implemented async/await patterns for API calls
- Used React hooks for efficient state management
- Optimized re-renders with useRef and useEffect
- Clean component architecture
- Proper error boundaries and fallbacks

## Future Enhancements

- [ ] MongoDB integration for persistent storage
- [ ] User authentication system
- [ ] Multiple conversation threads
- [ ] Code syntax highlighting in responses
- [ ] File upload support
- [ ] Voice input capability

## License

MIT