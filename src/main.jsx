import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './context/authContext.jsx'
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { MantineProvider } from '@mantine/core';
import '@mantine/carousel/styles.css';
import { RoomContextProvider } from './context/roomContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <RoomContextProvider>
    <AuthContextProvider>
      <MantineProvider>
        <App />
      </MantineProvider>
    </AuthContextProvider >
  </RoomContextProvider>
  // </React.StrictMode>,
)
