import React from 'react'
import { MdAddPhotoAlternate } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import "./css/Container.css"
function Container() {
  return (
    <>

        <div className='px-3 py-1'>
  
          <div>
            <div className='flex space-x-5 items-center p-2 my-1 shadow-md rounded-md'>
              <div className='text-7xl'><MdAddPhotoAlternate /></div>
              <div className='text-2xl font-bold'>Photo</div>
            </div>
            <div className='flex space-x-5 items-center p-2 my-4 shadow-md rounded-md'>
              <div className='text-7xl'><FaVideo /></div>
              <div className='text-2xl font-bold'>Video</div>
            </div>
            <div className='flex space-x-5 items-center p-2 my-4 shadow-md rounded-md'>
              <div className='text-7xl'><FaFile /></div>
              <div className='text-2xl font-bold'>Files</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Container
