import React, { useContext, useEffect, useState } from 'react'
import { FiPlus } from "react-icons/fi";
import { Link, useAsyncError } from 'react-router-dom';
import pic1 from "../assets/pic1.jpg"
import axios from "axios"
import { MdDeleteOutline } from "react-icons/md";
import { Authcontext } from '../context/Auth';
import { RxCross2 } from "react-icons/rx";
function Photo() {
  const [data,setdata]=useState(null)
  const [image,setimage]=useState(null)
  const {token} = useContext(Authcontext)

  const deletephoto = async(id)=> {
    try {
      setdata(data.filter(item => item._id !== id))
      const res = await axios.delete(`${import.meta.env.VITE_SERVER}/photo/${id}`,{
        headers : {
          "Authorization": `Bearer ${token}`
        }
      })
      // setdata(res.data)
      // window.location.reload()
    } catch (error) {
      console.log("error")
    }
    
  }
  const fetchdata = async()=>{
    const res = await axios.get(`${import.meta.env.VITE_SERVER}/getimage`,{
      headers : {
        "Authorization": `Bearer ${token}`,
      }
    })
    console.log(res.data)
    setdata(res.data)
  }
  useEffect(()=>{
    fetchdata()
  },[])
 
  if(!data) return <div>Loading</div>
  return (
   <>
   <div className={`absolute w-full flex items-center bg-[#151515f7]  justify-center  top-0 h-full z-30 ${image?"block":"hidden"}`}>
    <div className='relative flex justify-center  items-center h-1/2 '>
    <img src={`http://localhost:8000/${image}`} className='w-full h-full' alt="" />
    <div className='absolute top-2 right-2 font-bold text-3xl' onClick={()=>{setimage(null)}}><RxCross2 /></div>
    </div>

   </div>
   <div className='px-3 text-xl font-semibold'>Photo</div>
   <div className='px-3 py-2' >
     {data.map((e,index)=>{
          return <div key={index} className='shadow-md rounded-md w-full h-20 space-y-3 relative hover:border-r-4 hover:border-gray-700 focus:border-gray-700'>
          <div className='h-full w-full flex space-x-3 my-3' onClick={()=>{setimage(e.image)}}>
              <img src={`http://localhost:8000/${e.image}`} alt="" className='h-full rounded-l-md' />
              <div className='text-lg font-semibold'>{e.title}</div>
          </div>
          <div className='absolute top-0 right-2 text-lg' onClick={()=>deletephoto(e._id)}><MdDeleteOutline /></div>
         </div>
     })}
       <Link to={"/uploadphoto"} className='border-2  hover:border-slate-500 w-12  h-12 xl:w-14 xl:h-14 rounded-full fixed xl:bottom-3 bottom-20 right-3 flex justify-center items-center'> <FiPlus  className='text-3xl xl:text-4xl hover:text-black'/></Link>
   </div>
   </>
  )
}

export default Photo
