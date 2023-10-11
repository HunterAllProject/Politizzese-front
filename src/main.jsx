import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './global.css'
import {AuthProvider} from './context/auth/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,

)
