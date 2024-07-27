import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SEND_MESSAGE } from '../utils/mutations';

const MessageForm = ({ conversationId, senderId, receiverId }) => {
  const [message, setMessage] = useState({
    messageContent: '',
    conversationId: conversationId,
    sender_Id: senderId,
    receiver_Id: receiverId,
  });

  const [sendMessage] = useMutation(SEND_MESSAGE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessage({ ...message, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendMessage({ variables: { ...message } });
      alert('Message sent successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to send message.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea name="messageContent" value={message.messageContent} onChange={handleChange} placeholder="Write your message" required />
      <button type="submit">Send Message</button>
    </form>
  );
};

export default MessageForm;
