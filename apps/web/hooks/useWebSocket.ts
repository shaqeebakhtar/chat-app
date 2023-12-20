import { useCallback, useEffect, useRef, useState } from 'react';
import { socketInit } from '../socket/socket';
import { Socket } from 'socket.io-client';
import { ACTIONS } from '../socket/actions';

export const useWebSocket = () => {
  const socketRef = useRef<Socket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);

  const sendMessage = (message: string) => {
    socketRef.current?.emit(ACTIONS.MESSAGE, { message });
  };

  const onMessageRecieved = useCallback((message: string) => {
    setMessages((prev) => [...prev, message]);
  }, []);

  useEffect(() => {
    socketRef.current = socketInit();

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    socketRef.current?.on(ACTIONS.MESSAGE, onMessageRecieved);

    return () => {
      socketRef.current?.off(ACTIONS.MESSAGE);
    };
  }, []);

  return { sendMessage, messages };
};
