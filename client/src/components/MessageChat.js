import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MessageChat = () => {
  const [messages, setMessages] = useState([]);
  const [recipientId, setRecipientId] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await axios.get('/api/messages');
      setMessages(response.data);
    };

    fetchMessages();
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    await axios.post('/api/messages', { recipientId, text });
    setText('');
    // Refresh messages
    const response = await axios.get('/api/messages');
    setMessages(response.data);
  };

  return (
    <div>
      <h2>Message Chat</h2>
      <form onSubmit={handleSendMessage}>
        <input 
          value={recipientId}
          onChange={(e) => setRecipientId(e.target.value)}
          placeholder="Recipient ID"
          required
        />
        <input 
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your message"
          required
        />
        <button type="submit">Send</button>
      </form>
      <ul>
        {messages.map(message => (
          <li key={message._id}>{message.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default MessageChat;
