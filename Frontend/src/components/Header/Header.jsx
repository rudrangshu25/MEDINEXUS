import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Header.css'
const Header = () => {
    const [data, setData] = useState([])
    const [token, setToken] = useState("")
    const [email, setEmail] = useState("")
    
     const url = "http://localhost:4000"
    const fetchAdmin = async () => {
    const response = await axios.get(url + "/api/user/listuser");
        setData(response.data.data)
        console.log(response.data)
    }
    const loadAdminData = async (token) => {
    const response = await axios.post(url + "/api/user/getUser", {}, { headers: { token } })
    setEmail(response.data.emailData)
    } 
    useEffect(() => {
        async function loadData() {
          await fetchAdmin();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
                await loadAdminData(localStorage.getItem("token"));
            }
        }
    loadData();
    },[])

    return <>
        {
            data.map((item, index) => {
                if (item.email === email)
                {
                    return <>
                        <div className='headname'><span><img src={`${url}/images/`+item.image} alt='' /></span>{item.name}</div>
                    </>
                }
            })
      }
  </>
}

export default Header