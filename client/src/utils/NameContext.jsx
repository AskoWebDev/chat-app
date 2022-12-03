import { createContext, useContext, useState, useEffect } from 'react';
import {SocketContext} from './SocketContext';
import { redirect, useNavigate } from 'react-router-dom';

export const NameContext = createContext()

export function ThemeProvider({ children }) {
	const socket = useContext(SocketContext)
	

	const [name, setName] = useState('')


	function handle(e) {
		e.preventDefault()

		const input = document.getElementById('text_name')

		if (input.value !== '' && input.value !== null) {
			setName(input.value)
			
		} 
		

	}
	
	if (name !== '') {
		localStorage.setItem('name', name)
	}

	const values = {
		name: name,
		handle: handle
	}

	console.log(name)
	return(
		<NameContext.Provider value={values}>
			{children}
		</NameContext.Provider>
	)
}

