import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage'
import App from './App'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
<>
   <App />
    <ToastContainer />
</>
 
)
