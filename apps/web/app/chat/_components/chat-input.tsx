import { useState } from 'react';
import { useWebSocket } from '../../../hooks/useWebSocket';

const ChatInput = () => {
  const { sendMessage } = useWebSocket();
  const [userInput, setUserInput] = useState('');

  return (
    <div className="bg-slate-200 flex items-center justify-between space-x-3 p-6 absolute left-0 right-0 bottom-0">
      <input
        type="text"
        placeholder="Enter your message"
        className="w-full border border-slate-300 rounded p-2"
        onChange={(e) => setUserInput(e.currentTarget.value)}
      />
      <button
        className="bg-teal-600 text-white px-8 py-2 rounded font-medium"
        onClick={() => sendMessage(userInput)}
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
