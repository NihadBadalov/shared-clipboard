import express from 'express';
import logger from './logger.js';
import path from 'path';
import { Server, Socket } from "socket.io";
import { createServer } from 'node:http';

const __dirname = path.resolve(path.dirname(''));
const app = express();
const server = createServer(app);
const io = new Server(server);

/** @type {Array<Socket>} */
let sockets = [];

io.on('connection', socket => {
  sockets.push(socket);

  socket.on('share', contents => {
    for (let i = 0; i < sockets.length; i++) {
      if (sockets[i] === socket) continue;
      sockets[i].emit('sharedTo', contents);
    }
  });

  socket._onclose = () => {
    logger.info('server', 'Socket disconnected');
    sockets = sockets.filter(s => s !== socket);
  };
});


app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, '/src/html/index.html'));
});


server.listen(42069, () => {
  logger.info('server', 'Server running on port 42069');
});
