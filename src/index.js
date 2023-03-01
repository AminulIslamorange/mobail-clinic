import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import UserContext from './contexts/UserContext'
import { PhotoProvider } from 'react-photo-view';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(

  <UserContext>
    <ToastContainer position='bottom-center' />
    <PhotoProvider>
    
      <App />
    
    </PhotoProvider>
  </UserContext>
)
