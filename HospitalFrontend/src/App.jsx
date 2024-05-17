import React, { useState } from 'react'
import LoginPopup from '../src/components/LoginPopup/LoginPopup.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Addmedicine from './pages/Add Medicine/Addmedicine.jsx'
import Listmedicine from './pages/List Medicine/Listmedicine.jsx'
import Adddoctors from './pages/Add Doctors/Adddoctors.jsx'
import ListDoctor from './pages/All Doctors/Alldoctors.jsx'
const App = () => {
  const [showHospitalLogin, setShowHospitalLogin] = useState(false)
  const loggedIn=window.localStorage.getItem("isLoggedIn")
  return <>
    {showHospitalLogin ? <LoginPopup setShowHospitalLogin={setShowHospitalLogin} /> : <></>}
    <div>
      <Navbar setShowHospitalLogin={setShowHospitalLogin} loggedIn />
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/addmedicine' element={<Addmedicine/> } />
        <Route path='/listmedicine' element={<Listmedicine/> } />
        <Route path='/adddoctor' element={<Adddoctors/> } />
        <Route path='/listdoctor' element={<ListDoctor/> } />
      </Routes>
    </div>
    
    
  </>
}

export default App