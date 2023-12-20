import { Socket, io } from 'socket.io-client';

export const socketInit = (): Socket => {
  return io(process.env.API_URL as string);
};
