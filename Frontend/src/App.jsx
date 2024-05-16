import React, { useState } from 'react'
import LoginPopup from '../src/components/LoginPopup/LoginPopup.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  const loggedIn=window.localStorage.getItem("isLoggedIn")
  return <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
    <div>
      <Navbar setShowLogin={setShowLogin} loggedIn />
      <Routes>
        <Route path='/' element={<Home loggedIn/> } />
      </Routes>
    </div>
    
  </>
}

export default App