import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Authcontext } from '../context/Auth'

function Uploadprofile() {
  const {token} =useContext(Authcontext)
    const [image,setimage]=useState(null)
    const handleonchange =(e)=>{
        setimage(e.target.files[0])
    }
    const handleonsubmit = (e)=>{
        e.preventDefault()
        try {
            const formdata = new FormData()
            formdata.append("image",image)
            const res = axios.post(`${import.meta.env.VITE_SERVER}/uploads`,formdata,{
                headers : {
                    'Content-Type': 'multipart/form-data',
                    "Authorization": `Bearer ${token}`,
                }
            })
            console.log("file uploaded successfully")
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    }
  return (
    <>
      <form onSubmit={handleonsubmit}>
        <label htmlFor="image">Upload profile</label>
        <input type="file" name='image' id="image" onChange={handleonchange} />
        <button type='submit'>upload</button>
      </form>
    </>
  )
}

export default Uploadprofile
