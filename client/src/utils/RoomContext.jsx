import { createContext, useState, useContext } from 'react';
import { SocketContext } from './SocketContext';

export const RoomContext = createContext()

export function RoomProvider({ children }) {
	const socket = useContext(SocketContext)

	const [room, setRoom] = useState(() => localStorage.getItem('room'))

	const join = (e) => {
		e.preventDefault()

		const room_number = document.getElementById('room')

		if (room_number.value !== '') {
			setRoom(room_number.value)
			room_number.value = ''
		}
		

	}

	if (room !== '') {
		localStorage.setItem('room', room)
		socket.emit('join_room', room)
	}


	const values = {
		room: room,
		join: join
	}

	return(
		<RoomContext.Provider value={values}>
			{children}
		</RoomContext.Provider>
	)
}