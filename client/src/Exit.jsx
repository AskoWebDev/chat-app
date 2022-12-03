import { useRef, useState, useContext, useEffect } from 'react';
import { useNavigate, Navigate, redirect } from 'react-router-dom';
import { NameContext } from './utils/NameContext';

function Exit() {
	

	const navigate = useNavigate();
	
	const handleClear = () => {
		const checkUser = confirm('Do you want to leave the chat?')

		if (checkUser) {
			localStorage.clear()
			navigate('/')
		}
		
	}

	

	return(
		<>
			<button className='exitButton' onClick={handleClear}>Leave the chat</button>
		</>
	)
}

export default Exit;