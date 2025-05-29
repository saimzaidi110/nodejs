import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import PremiumPage from './pages/PremiumPage'
import BlogPage from './pages/BlogPage'
import ContactusPage from './pages/ContactusPage'

function App() {
 const router = createBrowserRouter([
  { path:'/',
    element:<HomePage/>
  },
  { path:'/contact',
    element:<ContactusPage/>
  },
  { path:'/login',
    element:<LoginPage/>
  },
  { path:'/premium',
    element:<PremiumPage/>
  },
  { path:'/blog',
    element:<BlogPage/>
  },
 ])

  return (
    <>
   <RouterProvider router={router}/>
    </>
    
  )
}

export default App
