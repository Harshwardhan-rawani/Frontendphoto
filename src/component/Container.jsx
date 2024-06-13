import React from 'react'
import { MdAddPhotoAlternate } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./css/Container.css"
function Container() {
  return (
    <>

        <div className='px-3 py-1'>
  
          <div>
            <Link to={"/photo"} className='group hover:bg-slate-600 flex space-x-5 items-center p-2 my-1 shadow-md rounded-md'>
              <div className='text-7xl group-hover:text-white'><MdAddPhotoAlternate /></div>
              <div className='text-2xl font-bold group-hover:text-white'>Photo</div>
            </Link>
            <Link to={"/video"} className='group hover:bg-slate-600  flex space-x-5 items-center p-2 my-4 shadow-md rounded-md'>
              <div className='text-7xl group-hover:text-white'><FaVideo /></div>
              <div className='text-2xl font-bold group-hover:text-white'>Video</div>
            </Link>
            <Link to={"/files"} className='group hover:bg-slate-600  flex space-x-5 items-center p-2 my-4 shadow-md rounded-md'>
              <div className='text-7xl group-hover:text-white'><FaFile /></div>
              <div className='text-2xl font-bold group-hover:text-white'>Files</div>
            </Link>
          </div>
        </div>
    </>
  )
}

export default Container
