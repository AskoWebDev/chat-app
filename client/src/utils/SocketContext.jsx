import { useState, useEffect, createContext } from 'react';

import { io } from 'socket.io-client';

export const SocketContext = createContext()


export function SocketProvider({ children }) {
	const socket = io('http://localhost:3000')
	

	return(
		<SocketContext.Provider value={socket}>
			{children}
		</SocketContext.Provider>
	)
}