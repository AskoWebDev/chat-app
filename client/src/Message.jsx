import { useContext, useState, useEffect, useRef } from 'react';
import { SocketContext } from './utils/SocketContext';
import { NameContext } from './utils/NameContext';
import { RoomContext } from './utils/RoomContext';

import ScrollToBottom from 'react-scroll-to-bottom';

function Message() {
	const socket = useContext(SocketContext)
	const {name} = useContext(NameContext)
	const {room} = useContext(RoomContext)

	const [message, setMessage] = useState('')
	const [receiveMessage, setReceiveMessage] = useState([])
	const [time, setTime] = useState(null)

	// initializing Ref
	const bottomRef = useRef(null)

	// a function that sets 'message' state with 
	// a new message
	const sendMessage = (e) => {
		e.preventDefault()

		const new_message = document.getElementById('message')
		
		if (new_message.value !== '') {

			setMessage(new_message.value)

			setTime(new Date(Date.now()).getHours() 
				+ ':' + new Date(Date.now()).getMinutes() 
			)

			new_message.value = ''
		}


	} 
	
	// values that are send to server
	const sendValues = {
		name:name,
		time: time,
		message: message,
		room: room,
	}

	// send values to server whenever
	// a new message is typed
	useEffect(() => {
		if (message !== '') {
			socket.emit('send_message', sendValues)
			setReceiveMessage((list) => [...list, sendValues])
			console.log('sent')
		}
	}, [message])
		
	// receiving a message from server
	useEffect(() => {
		socket.on('receive_message', (data) => {
			setReceiveMessage((list) => [...list, data])
			
		})
	
		console.log('message received')
	}, [socket])

	// scrolls to the bottom every time
	// a new message received
	useEffect(() => {
		bottomRef.current.scrollIntoView({behavior: 'smooth'});
	}, [receiveMessage])
	
	return(
		<div className="message"> 
			
			<div className="message_table">
				
				{receiveMessage.map((messageContent) => {
					return (		
						<div className='mainDiv' id={name === messageContent.name  ? 'you' : 'other'}>
							<div>
								<div className='messageContent' >
									<p>{messageContent.message}</p>
								</div>
								<div className='timeAndName'>
									<p>{messageContent.time}</p>
									<p><b>{messageContent.name}</b></p>
								</div>
							</div>
						</div>
					)
				})}
				<div ref={bottomRef}></div>
			</div>
			
			
			<form onSubmit={sendMessage}>
				<div className="send_message">
					<input placeholder="Send a message" id='message'></input>
					<button onClick={sendMessage}>Send</button>
				</div>
			</form>
		</div>
	)
}

export default Message;