import clipboard from 'clipboardy';
import logger from './logger.js';
import { io } from "socket.io-client";

// Set the thing below to ws://IP:42069
// ^ where IP is the server's ip
const socket = io('ws://localhost:42069');

socket.on('sharedTo', (contents) => {
  logger.info('client', `Received contents: ${contents}`);

  clipboard.writeSync(contents);
});
