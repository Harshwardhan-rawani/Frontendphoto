import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import {Link} from "react-router-dom"
import { Authcontext } from '../context/Auth';
import { FaRegUser } from "react-icons/fa";
import { Authusercontext } from '../context/Authuser';
function Name() {
  const {token,logout}=useContext(Authcontext)
  const {user}=useContext(Authusercontext)
  console.log(user)
  const username = user? user.username : "Guest";
  return (
    <>
    
         <div className='xl:px-5 xl:py-7 xl:grid xl:grid-cols-6 xl:gap-20 xl:w-[95%] h-fit'>
            <div className='xl:col-span-2 flex space-x-3 xl:space-x-5'>
              <div className='rounded-full xl:w-14 xl:h-14 w-10 h-10 border-2 border-gray-600 flex justify-center items-center'>
                <div className='xl:text-2xl md:text-xl text-lg text-gray-500'><FaRegUser/></div>
              </div>
              <div>
              <p className='xl:text-3xl font-bold col-span-2 text-gray-800'>Welcome.. {username}! </p>
              <p className='xl:text-lg md:text-md text-sm text-gray-500'>Here is your drive</p>
              </div>

            </div>
           <div className='h-10 flex justify-center xl:col-span-3 group xl:mt-0 mt-2'>
            <input type="text" className=' h-full w-full rounded-l-md px-3  bg-[#e8e6e6] outline-none group-hover:ring-1 group-hover:ring-gray-300' placeholder='Search..................'/>
            <button className='outline-none h-full px-2 rounded-r-md  bg-[#e8e6e6] text-gray-400 group-hover:ring-1 group-hover:ring-gray-300'><FaSearch /></button>
           </div>
          
         <div className={`${token?"hidden":""} flex justify-end`} >
         <Link to={`/login`} className={`hover:text-black focus:bg-gray-500`}> <button className='bg-gray-800 text-white xl:px-5 rounded-md xl:py-2 font-bold xl:static absolute top-3 right-5 px-2 py-1'>Login</button> </Link>
         </div>
        <div className={`${token?"":"hidden"} flex justify-end `} >
             <button className='bg-gray-800 text-white xl:h-10 xl:px-5 xl:py-2 rounded-md xl:static absolute top-3 right-5 px-2 py-1' onClick={()=>{logout()}}>Logout</button>
        </div>

 
        </div>
    </>
  )
}

export default Name
