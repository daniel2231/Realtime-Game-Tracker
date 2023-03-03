import React from 'react';
import socketio from 'socket.io-client';

export const socket = socketio.connect('http://localhost:8000', {
	transports: ['websocket'],
});
export const SocketContext = React.createContext();
