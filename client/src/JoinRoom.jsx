import { useState, useContext } from 'react';
import { SocketContext } from './utils/SocketContext';
import { RoomContext } from './utils/RoomContext';

function JoinRoom() {
	const socket = useContext(SocketContext)
	const {join} = useContext(RoomContext)

	return(
		<div className="joinRoom">
			<form onSubmit={join}>
				<input placeholder="Join the room" id='room'></input>
				<button onClick={join}>Join</button>
			</form>
		</div>
	)
}

export default JoinRoom;