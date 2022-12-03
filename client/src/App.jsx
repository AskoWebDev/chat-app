import { useState } from 'react'
import JoinRoom from './JoinRoom'
import Room from './Room'
import Message from './Message'
import Exit from './Exit';

import { Outlet } from 'react-router-dom';

function App() {
  
  return (
    
      <div className="App">
        <div className="user">
          <JoinRoom />
          <Room />
        </div>
        <div className="main">
          <Message />
        </div>
        
      </div>

  )
}

export default App
