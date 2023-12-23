import express from 'express';
import { createServer } from 'http';
import { Server, type Socket } from 'socket.io';
import process from 'process';
import { Redis } from 'ioredis';

export const startServer = () => {
  const publisher = new Redis();
  const subscriber = new Redis();

  const port = process.env.PORT || 8000;

  const app = express();
  const httpServer = createServer(app);

  const io = new Server(httpServer, {
    cors: {
      origin: '*',
    },
  });

  io.on('connection', (socket: Socket) => {
    console.log('New client connected:', socket.id);

    socket.on('message', async ({ message }) => {
      await publisher.publish('MESSAGES', JSON.stringify({ message }));
    });
  });

  subscriber.subscribe('MESSAGES', () => {
    subscriber.on('message', (channel, message) => {
      if (channel === 'MESSAGES')
        io.emit('message', JSON.parse(message).message);
    });
  });

  httpServer.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
  });
};
