import React, { useState } from 'react'
import Userls from './Userls';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
function Signup() {
  const navigate = useNavigate()
  const [user_data,setUser_data]=useState({
    username:"",
    email : "",
    password:"",
    confirm_password:"",
    phone:"",

  
  })
 const handleonchange = (e)=>{
   const {name,value}=e.target
   setUser_data({...user_data,[name]:value})
 }

const handlesubmit =async(e)=>{
  e.preventDefault()
  try {
    if(user_data){
      const formdata =new FormData()
      formdata.append("username",user_data.username)
      formdata.append("email",user_data.email)
      formdata.append("password",user_data.password)
      formdata.append("confirm_password",user_data.confirm_password)
      formdata.append("phone",user_data.phone)
      const response = await axios.post(`https://photogallery-y9n9.onrender.com/signup`,formdata,{
        headers:{
          'Content-Type': 'application/json',
        }
      })
      toast.success(response.data.message)
      navigate("/login")
    }
  } catch (error) {
    toast.error(error.response.data.message)
  }



}
  return (
    <>
<div className='h-[90vh] xl:w-full flex justify-center items-center'>

<div className='bg-gray-200 xl:py-5 xl:px-5 xl:w-1/4 shadow-md rounded-md w-3/4'>
<div className='flex justify-center'><div><Userls/></div></div>
  
  <form className='w-full'  onSubmit={handlesubmit}>
    <div className='m-3 '>
      <label className='font-medium' htmlFor="username">Username</label>
      <br />
      <input required className='xl:h-10 p-2 w-full focus:outline-none rounded-md' onChange={handleonchange} value={user_data.username} placeholder='username' type="text" name="username" id="username" />
    </div>
   
    <div className='m-3 '>
      <label className='font-medium' htmlFor="email">Email</label>
      <br />
      <input required className='xl:h-10 p-2 w-full focus:outline-none rounded-md' onChange={handleonchange} value={user_data.email} placeholder='email@gmail.com' type="email" name="email" id="email" />
    </div>
    <div className='m-3 '>
      <label className='font-medium' htmlFor="password">Password</label>
      <br />
      <input required className='xl:h-10 p-2 w-full focus:outline-none rounded-md' onChange={handleonchange} value={user_data.password} placeholder='**********' type="password" name="password" id="password" />
    </div>
    <div className='m-3'>
      <label className='font-medium' htmlFor="confirm_password">Confirm_Password</label>
      <br />
      <input required className='xl:h-10 p-2 w-full focus:outline-none rounded-md' onChange={handleonchange} value={user_data.confirm_password} placeholder='**********' type="password" name="confirm_password" id="confirm_password" />
    </div>
    <div className='m-3'>
      <label className='font-medium' htmlFor="phone">Phone</label>
      <br />
      <input required className='xl:h-10 p-2 w-full focus:outline-none rounded-md' onChange={handleonchange} value={user_data.phone} placeholder='+91 XXXX-XXX-XXX' type="text" name="phone" id="phone" />
    </div>
    <div className='flex justify-center'>
      <button className='xl:py-2 xl:px-5 bg-slate-500 font-bold text-white rounded-md mb-3 px-3 py-2'>Signup</button>
    </div>
  </form>
</div>
</div>
    </>
  )
}

export default Signup
