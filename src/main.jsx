import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Route } from 'react-router-dom'
import App from './App.jsx'
import Home from './components/Home/home.jsx'
import './index.css'
import Signin from './components/Siginin/Signin.jsx'
import Signup from './components/Signup/Signup.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="signin" element={<Signin/>}>
        <Route path="" element={<Home/>}/>
      </Route>
      <Route path="signup" element={<Signup/>}>
        <Route path="" element={<Home/>}/>
      </Route>
      
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
