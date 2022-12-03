import { useState, useEffect, useContext } from 'react';
import { Navigate, useNavigate, redirect, } from 'react-router-dom';
import Room from './Room.jsx';
import {NameContext} from './utils/NameContext.jsx';

import { Outlet } from 'react-router-dom';

function Welcome() {	
	const {handle, name} = useContext(NameContext)

	const navigate = useNavigate();

	useEffect(() => {
		const item = localStorage.getItem('name')
		if (item !== null) {
			navigate('/app')
		} 
		console.log(item)
	})
	
	
	return(
		<div className="welcome">
			<h1>Welcome to the <i>Chat App</i></h1>
			<form id="start_form" onSubmit={handle}>
				<input placeholder="Enter your name" id="text_name"></input>
				<button onClick={handle}>Start chating</button>	
			</form>
			
		</div>
	)
}

export default Welcome;