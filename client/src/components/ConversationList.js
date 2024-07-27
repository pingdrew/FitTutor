import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_CONVERSATIONS } from '../utils/queries';

const ConversationList = () => {
  const { loading, data } = useQuery(GET_ALL_CONVERSATIONS);
  const conversations = data?.allConversations || [];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Conversations</h2>
      <ul>
        {conversations.map((conversation) => (
          <li key={conversation._id}>
            {conversation.participants.map((participant) => participant.username).join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConversationList;
