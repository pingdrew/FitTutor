import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_CONVERSATIONS } from '../../utils/queries';
import { SEND_MESSAGE } from '../../utils/mutations';
import './Chat.css';

const ChatComponent = () => {
    const [selectedConversation, setSelectedConversation] = useState(null);
    const [message, setMessage] = useState('');
    const [isMinimized, setIsMinimized] = useState(false);
    const { data: conversationsData, loading, error } = useQuery(GET_ALL_CONVERSATIONS);
    const [sendMessage] = useMutation(SEND_MESSAGE);

    const handleSelectConversation = conversation => {
        setSelectedConversation(conversation);
        setIsMinimized(false); // Auto-maximize when conversation is selected
    };

    const handleSendMessage = () => {
        if (message.trim() !== '') {
            sendMessage({
                variables: {
                    messageInput: {
                        conversationId: selectedConversation._id,
                        sender_Id: 'senderId', // Placeholder
                        receiver_Id: 'receiverId', // Placeholder
                        messageContent: message,
                        timeStamp: new Date().toISOString(),
                        readStatus: false,
                    }
                },
                onCompleted: () => setMessage('')
            });
        }
    };

    const toggleMinimize = () => {
        setIsMinimized(!isMinimized);
    };

    if (loading) return <p>Loading conversations...</p>;
    if (error) return <p>Error loading conversations!</p>;

    return (
        <div className="chat-container" style={{ transform: isMinimized ? 'translateY(300px)' : 'translateY(0)' }}>
            <div className="chat-header">
                <button onClick={toggleMinimize}>{isMinimized ? 'Expand' : 'Minimize'}</button>
            </div>
            {!isMinimized && (
                <div className="chat-window">
                    <div className="conversations">
                        {conversationsData.allConversations.map(conversation => (
                            <div key={conversation._id} onClick={() => handleSelectConversation(conversation)}>
                                {conversation.participants.map(p => p.username).join(', ')}
                            </div>
                        ))}
                    </div>
                    {selectedConversation && (
                        <>
                            <div className="messages">
                                {selectedConversation.lastMessage && (
                                    <p>{selectedConversation.lastMessage.messageContent}</p>
                                )}
                            </div>
                            <div className="input-area">
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Type a message..."
                                />
                                <button onClick={handleSendMessage}>Send</button>
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default ChatComponent;
