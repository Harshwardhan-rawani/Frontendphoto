import React, { useContext, useState } from 'react'
import axios from "axios"
import { Authcontext } from '../context/Auth'
import { useNavigate } from 'react-router-dom'
function Uploadphoto() {
  const navigate =  useNavigate()
  const {token} =useContext(Authcontext)
  const [data,setData]=useState({
    image :null,
    title  :""
  })
  const handleonchange = (e)=>{
      setData({...data , [e.target.name]:e.target.value})
  }
  const handleonsubmit =  async(e)=>{
    e.preventDefault()
    try {
      const formdata =new FormData()
      formdata.append("image",data.image)
      formdata.append("title",data.title)
      const res = await axios.post(`https://photogalleryback.onrender.com/uploadphoto`,formdata,
        {
          headers:{
               
                'Content-Type': 'multipart/form-data',
                    "Authorization": `Bearer ${token}`,
          }
        }
      )
      console.log(res.data)
      console.log("image uploaded")
      navigate("/photo")
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }
  
  const handleimage = (e)=>{
    setData({...data,image:e.target.files[0]})
  }
  return (
<>
<div className='h-[80vh] xl:w-full flex justify-center items-center'>

      <div className='bg-gray-200 xl:py-5 xl:px-5 xl:w-1/4 shadow-md rounded-md w-3/4'>
        
        <form className='w-full' onSubmit={handleonsubmit}>
          <div className='m-3'>
            <label className=' font-medium' htmlFor="image">Upload</label>
            <br />
            <input required onChange={handleimage}  className='xl:h-10 p-2 w-full focus:outline-none rounded-md'  type="file" name="image" id="image" />
          </div>
          <div className='m-3'>
            <label className=' font-medium' htmlFor="title">Title</label>
            <br />
            <input required value={data.title} placeholder='Title' onChange={handleonchange} className='xl:h-10 p-2 w-full focus:outline-none rounded-md'  type="text" name="title" id="title" />
          </div>
      

          <div className='flex justify-center'>
            <button className='xl:py-2 xl:px-5 px-3 py-2 mb-3 bg-slate-500 font-bold text-white rounded-md'>Upload</button>
          </div>
        </form>
    </div>
</div>
</>
  )
}

export default Uploadphoto
