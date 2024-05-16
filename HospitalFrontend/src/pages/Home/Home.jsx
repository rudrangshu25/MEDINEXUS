import React, { useContext, useEffect } from 'react'
import { StoreContext } from '../../context/StoreContext'
import Advertise from '../../components/Advertise/Advertise'
import Header from '../../components/Header/Header'
import Dashboard from '../../components/Dashboard/Dashboard'

const Home = () => {
  const { url, setToken, token } = useContext(StoreContext)
  useEffect(() => {
        async function loadData() {
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
            }
        }
    loadData();
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