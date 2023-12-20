'use client';

import { useState } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

const page = (): JSX.Element => {
  const { sendMessage, messages } = useWebSocket();
  const [userInput, setUserInput] = useState('');

  return (
    <div className="bg-red-500 h-full">
      <input
        type="text"
        onChange={(e) => setUserInput(e.currentTarget.value)}
      />
      <button onClick={() => sendMessage(userInput)}>Send</button>
      <ul>
        {messages.map((message, idx) => (
          <li key={idx}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default page;
