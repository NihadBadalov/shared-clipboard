import copy from 'copy-to-clipboard';
import logger from './logger.js';
import { io } from "socket.io-client";

const socket = io('ws://localhost:42069');

socket.on('sharedTo', (contents) => {
  logger.info('client', `Received contents: ${contents}`);

  copy(contents);
});
