import React, { useState } from 'react'
import LoginPopup from '../src/components/LoginPopup/LoginPopup.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  return <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
    <div>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home/> } />
      </Routes>
    </div>
    
  </>
}

export default App