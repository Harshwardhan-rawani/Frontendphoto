import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaHome } from "react-icons/fa";
import { FaDraftingCompass } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { FaSquarePlus } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FaRightFromBracket } from "react-icons/fa6";
import { IoMdArrowDropup } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
function Sidenav() {
    const [hideshow,setHideshow]=useState(false)
    const location = useLocation()
    
  return (
    <div className='bg-gray-800 z-50 fixed bottom-0 w-screen xl:static xl:h-screen xl:flex xl:flex-col xl:justify-between xl:pt-24 xl:pb-5 xl:w-full' >
      <div className='flex justify-evenly items-center p-3 xl:flex-col '>
                <div className={`text-lg sm:text-xl md:text-2xl xl:m-3  ${location.pathname === "/"?"text-orange-500":"text-white"} `}><Link className='hover:text-orange-300' to={`/`}><FaHome /></Link></div>
                <div className={`text-lg sm:text-xl md:text-2xl xl:m-3  text-white`}><Link className='hover:text-orange-300' to={`#`}><FaDraftingCompass /></Link></div>
                <div className={`text-lg sm:text-xl md:text-2xl xl:m-3  text-white`}><Link className='hover:text-orange-300' to={`#`}><FaCalendarAlt /></Link></div>
                <div className={`text-lg sm:text-xl md:text-2xl xl:m-3 ${location.pathname === "/chart"?"text-orange-500":"text-white"}`}><Link className='hover:text-orange-300' to={`/chart`}><FaChartPie /></Link></div>
                <div className={`text-lg sm:text-xl md:text-2xl xl:m-3  text-white`}><Link className='hover:text-orange-300' to={`#`}><FaSquarePlus /></Link></div>
                <div className="text-lg sm:text-xl md:text-2xl xl:m-3  text-white lg:hidden" onClick={()=>{setHideshow(!hideshow)}}>
                <div className="btn-group dropup ml-5">
  <button
    type="button"
    className="text-white dropdown-toggle"
    data-bs-toggle="dropdown"
    aria-expanded="true"
  >
  </button>
  <ul className="dropdown-menu p-2">
    <li className='text-sm'>Setting</li>
    <li></li>
  </ul>
</div>
                </div>
      </div>
        <div className={`lg:block hidden p-3`}>
        <div className="text-lg sm:text-xl md:text-2xl xl:m-3  text-white"><Link className='hover:text-orange-300' to={`#`}><IoMdSettings /></Link></div>
      <div className="text-lg sm:text-xl md:text-2xl xl:m-3  text-white"><Link className='hover:text-orange-300' to={`#`}><FaRightFromBracket /></Link></div>
        </div>
   


  
    </div>
    
  )
}

export default Sidenav
