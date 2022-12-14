import { useContext, useEffect, useState } from 'react';
import { SocketContext } from './utils/SocketContext';
import { NameContext } from './utils/NameContext';

import Exit from './Exit';

function Room() {
	const socket = useContext(SocketContext)
	const {name} = useContext(NameContext)

	const [message, setMessage] = useState('')

	useEffect(() => {
		socket.on('room_message', (data) => {
			setMessage(data)
		})
	})
	
	return(
		<div className="room">
			<h3>{message} </h3>
			<Exit />
		</div>
	)
}

export default Room;