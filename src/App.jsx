import { useState } from 'react'
import './App.css'
import Navbar from './components/Header/Navbar'
import Home from './components/Home/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Home />
    </>
  )
}

export default App
