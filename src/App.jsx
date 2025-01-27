import React from 'react'
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <div className='bg-slate-950 w-full'>
        <NavBar />
      </div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>

    </div>
  )
}

export default App

