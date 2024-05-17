import React, { useContext, useEffect } from 'react'
import { StoreContext } from '../../context/StoreContext'
import Advertise from '../../components/Advertise/Advertise'
import Header from '../../components/Header/Header'
import Dashboard from '../../components/Dashboard/Dashboard'

const Home = ({loggedIn}) => {
  const { url, setToken, token } = useContext(StoreContext)
  useEffect(() => {
        console.log(loggedIn)
    },[])
  return <>
    {!token ? <>
      <Advertise/>
    </> : <>
        <Header />
        <Dashboard/>
    </>}
  </>
}

export default Home