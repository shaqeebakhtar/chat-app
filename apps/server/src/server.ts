import express from 'express';
import { createServer } from 'http';
import { Server, type Socket } from 'socket.io';

export const startServer = () => {
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

    socket.on('message', ({ message }) => {
      io.emit('message', message);
    });
  });

  httpServer.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
  });
};
