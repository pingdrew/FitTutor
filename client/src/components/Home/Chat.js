import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_CONVERSATIONS } from '../../utils/queries';
import { SEND_MESSAGE } from '../../utils/mutations';
import './Chat.css';

const Chat = () => {
    const { data: conversationsData, loading, error } = useQuery(GET_ALL_CONVERSATIONS);
    console.log(conversationsData)

    return (
        <div className="chat-container">
            <div className="conversations">
                <h2>Conversations</h2>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <div>
                        {conversationsData?.conversations.map((conversation) => (
                            <div key={conversation._id} className="conversation">
                                <div>hrllo</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Chat;
