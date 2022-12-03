import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Welcome from './Welcome'
import './index.css'
import { ThemeProvider } from './utils/NameContext'
import { SocketProvider } from './utils/SocketContext'
import { RoomProvider } from './utils/RoomContext'

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

// const router = createBrowserRouter([
//   { 
//     path: '/',
//     element: <Welcome />,
//     children: [
//       {
//         path: 'app',
//         element: <App />,
//       }
//     ],
//   },
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <SocketProvider>
    <RoomProvider>
      <ThemeProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Welcome />} />
              <Route path='/app' element={<App />} />
            </Routes>
          </BrowserRouter>
      </ThemeProvider>
    </RoomProvider>
  </SocketProvider>
)