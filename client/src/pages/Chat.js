import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_CONVERSATIONS } from '../utils/queries';
import ConversationList from '../components/ConversationList';
import MessageForm from '../components/MessageForm';

const Chat = () => {
  const { loading, error, data } = useQuery(GET_ALL_CONVERSATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Chat</h1>
      <ConversationList conversations={data.allConversations} />
      <MessageForm conversationId={null} senderId={null} receiverId={null} />
    </div>
  );
};

export default Chat;
