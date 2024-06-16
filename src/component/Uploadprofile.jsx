import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Authcontext } from '../context/Auth'
import { useNavigate } from 'react-router-dom'
function Uploadprofile() {
  const {token} =useContext(Authcontext)
    const [image,setimage]=useState(null)
    const navigate = useNavigate()
    const handleonchange =(e)=>{
        setimage(e.target.files[0])
    }
    const handleonsubmit = async(e)=>{
        e.preventDefault()
        try {
            const formdata = new FormData()
            formdata.append("image",image)
            const res = await axios.put(`https://photogallery-y9n9.onrender.com/uploads`,formdata,{
                headers : {
                    'Content-Type': 'multipart/form-data',
                    "Authorization": `Bearer ${token}`,
                }
            })
            navigate("/")
            window.location.reload()
            console.log("file uploaded successfully")
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    }
  return (
    <>
      <div className='h-[80vh] xl:w-full flex justify-center items-center'>

      <div className='bg-gray-200 xl:py-5 xl:px-5 xl:w-1/4 shadow-md rounded-md w-3/4'>
        
        <form className='w-full' onSubmit={handleonsubmit}>
          <div className='m-3'>
            <label className=' font-medium' htmlFor="image">Upload</label>
            <br />
            <input required onChange={handleonchange} className='xl:h-10 p-2 w-full focus:outline-none rounded-md'  type="file" name="image" id="image" />
          </div>
          <div className='flex justify-center'>
            <button type="submit" className='xl:py-2 xl:px-5 px-3 py-2 mb-3 bg-slate-500 font-bold text-white rounded-md'>Upload</button>
          </div>
        </form>
    </div>
</div>
    </>
  )
}

export default Uploadprofile
