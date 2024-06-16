import React, { useContext, useState } from 'react'
import Userls from './Userls';
import { Authcontext } from '../context/Auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
function Login() {
 const navigate = useNavigate()

  const {login}= useContext(Authcontext)

  const [user_data,setData]=useState({
    email : "",
    password:""
  })
  
  const handleonchange = (e)=>{
    const {name,value}=e.target
    setData({...user_data,[name]:value})
  }
  const handlesubmit = async(e)=>{
    e.preventDefault()
    try {
      const formdata = new FormData()
      formdata.append("email",user_data.email)
      formdata.append("password",user_data.password)
       const response = await axios.post(`${import.meta.env.VITE_SERVER}/login`,formdata,{
        headers :{
            'Content-Type': 'application/json'
        }
       })
       toast.success(response.data.message)
       login(response.data.token)
       navigate("/")
       
     
      
    } catch (error) {
      console.log("error")
      toast.error(error.response.data.message)
      
    }
  }
  return (
    <>
<div className='h-[80vh] xl:w-full flex justify-center items-center m-2'>

      <div className='bg-gray-200 xl:py-5 xl:px-5 xl:w-1/4 shadow-md rounded-md w-3/4'>
      <div className='flex justify-center w-full'><div><Userls/></div></div>
        
        <form className='w-full' onSubmit={handlesubmit}>
          <div className='m-3'>
            <label className=' font-medium' htmlFor="email">Email</label>
            <br />
            <input value={user_data.email} onChange={handleonchange} className='xl:h-10 p-2 w-full focus:outline-none rounded-md' placeholder='email@gmail.com' type="email" name="email" id="email" />
          </div>
          <div className='m-3'>
            <label className=' font-medium' htmlFor="password">Password</label>
            <br />
            <input value={user_data.password} onChange={handleonchange} className='xl:h-10 p-2 w-full focus:outline-none rounded-md' placeholder='**********' type="password" name="password" id="password" />
          </div>
          <div className='flex justify-end xl:px-5 px-4'>
            <Link to={`/forgot`} className='text-sm underline hover:text-blue-500'>forgot password?</Link>
          </div>
          <br />
          <div className='flex justify-center'>
            <button className='xl:py-2 xl:px-5 px-3 py-2 mb-3 bg-slate-500 font-bold text-white rounded-md'>Login</button>
          </div>
        </form>
    </div>
</div>

   
    </>
  )
}

export default Login
