import React from 'react';
import { useWebSocket } from '../../../hooks/useWebSocket';

const ChatMessages = () => {
  const { messages } = useWebSocket();

  return (
    <div className=" h-[calc(100vh-90px)] p-6">
      <div className="space-y-1">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className="bg-white w-max px-4 p-2 shadow-sm rounded-r-3xl rounded-b-3xl rounded-tl-none"
          >
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatMessages;
