import React, { useContext, useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import { toast } from "react-toastify"
const Alldoctors = () => {
  const url = "http://localhost:4000";
  










  const [token, setToken] = useState("")
  const [email, setEmail] = useState("")
  const [adminData, setAdminData] = useState([]);
    const fetchAdmin = async () => {
    const response = await axios.get(url + "/api/hospital/listuser");
    setAdminData(response.data.data)
  }
  const loadAdminData = async (token) => {
    const response = await axios.post(url + "/api/hospital/getUser", {}, { headers: { token } })
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
















  const [list, setList] = useState([]);
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/hospital_doctor/list`);
    if (response.data.success) {
      setList(response.data.data)
      console.log(response.data.data)
    }
    else {
      toast.error("Error")
    }
  }
  useEffect(() => {
    fetchList();
  }, [])
  


  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/hospital_doctor/remove`, { id: foodId },{ headers: { token } })
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message)
    }
    else {
      toast.error("Error")
    }
  }
  return (
    <div className='list add flex-col'>
      {!token ? <>
                <h2 className='nottoken'>Kindly Sign In To Your Account . . . .</h2>
            </> : <><p className='headlist'>All Doctors In Your Hospital List</p>
      <div className='list-table'>
        <div className='list-table-format title'>
            <b>Image</b>
            <b>Name</b>
            <b>Specialization</b>
            <b>Description</b>
            <b>Dates Available</b>
            <b>Charges</b>
            <b>Action</b>
        </div>
        {list.map((item, index) => {
          if(item.userId===email)
          return(
          <div key={index} className='list-table-format'>
            <img src={`${url}/images/`+item.image} alt='' />
            <p>{item.name }</p>
            <p>{item.specialization }</p>
            <p>{item.description }</p>
            <p>{item.datesavailable}</p>
            <p>₹{item.charges}</p>
            <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>
          </div>
          )
        })}
      </div></>}
      
    </div>
  )
}

export default Alldoctors