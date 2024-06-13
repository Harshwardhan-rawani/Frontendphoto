import React from 'react'
import { Link, useLocation } from 'react-router-dom'
function Userls() {
    const location = useLocation()
  return (
    <div>
        <div className='bg-gray-200 m-3 outline outline-gray-700 outline-1 rounded-md '>
            <Link to={`/login`}>
            <button className={`${location.pathname==="/login"?"bg-gray-400":""} xl:px-7 py-2 px-3 font-bold rounded-l-md hover:text-black`}>Login</button>
            </Link>
            <Link to={`/signup`}>
            <button className={`${location.pathname==="/signup"?"bg-gray-400":""} xl:px-7 py-2 px-3 font-bold rounded-r-md hover:text-black`}>Signup</button>
            </Link>
          
         
        </div>
    </div>
  )
}

export default Userls
