import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider, createRoutesFromElements, Route,Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Authenticate from './pages/Authenticate.jsx'
import Register from './pages/Register.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
  <>
    <Route>
      <Route path='/' element={<App />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/authenticate' element={<Authenticate />}/>
      <Route path='/register' element={<Register />}/>
    </Route>
  </>
  )
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
