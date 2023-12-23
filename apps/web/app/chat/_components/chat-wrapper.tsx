import React, { HTMLAttributes } from 'react';
import ChatInput from './chat-input';
import ChatMessages from './chat-messages';

interface ChatWrapperProps extends HTMLAttributes<HTMLDivElement> {}

const ChatWrapper = ({ className }: ChatWrapperProps) => {
  return (
    <div className={`${className} h-full bg-slate-100`}>
      <ChatMessages />
      <ChatInput />
    </div>
  );
};

export default ChatWrapper;
