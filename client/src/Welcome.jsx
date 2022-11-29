import { useState, useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Room from './Room.jsx';
import {NameContext} from './utils/NameContext.jsx';


function Welcome() {	
	const {handle, name} = useContext(NameContext)

	
	return(
		<div className="welcome">
			<h1>Welcome to the <i>Chat App</i></h1>
			<form id="start_form" onSubmit={handle}>
				<input placeholder="Enter your name" id="text_name"></input>
				<button onClick={handle}>Start chating</button>
				{name && <Navigate to='/app' /> }
			</form>
		</div>
	)
}

export default Welcome;