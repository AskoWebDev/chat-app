import { createContext, useContext, useState, useEffect } from 'react';
import {SocketContext} from './SocketContext';

export const NameContext = createContext()

export function ThemeProvider({ children }) {
	const socket = useContext(SocketContext)

	const [name, setName] = useState(() => localStorage.getItem('name'))


	function handle(e) {
		e.preventDefault()

		const input = document.getElementById('text_name')

		setName(input.value)

	}
	
	if (name !== '') {
		localStorage.setItem('name', name)
	}

	const values = {
		name: name,
		handle: handle
	}


	return(
		<NameContext.Provider value={values}>
			{children}
		</NameContext.Provider>
	)
}

