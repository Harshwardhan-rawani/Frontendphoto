import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { FaSearch, FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Authcontext } from '../context/Auth';
import { useNavigate } from 'react-router-dom';
import { Authusercontext } from '../context/Authuser';

function Name() {
  const { token, logout } = useContext(Authcontext);
  const { user, loading } = useContext(Authusercontext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('User:', user);
  }, [user]);

  const username = user ? user.username : "Guest";
  const image = user ? user.image : "null";

  return (
    <>
      <div className="xl:grid xl:grid-cols-6 xl:gap-20 xl:w-[95%] h-fit px-3 py-2 fixed top-0 z-50 w-full bg-[#F6F5F2]">
        <div className='xl:col-span-2 flex items-center space-x-3 xl:space-x-5'>
          <Link to={token ? "/uploads" : "/login"} className='hover:text-black rounded-full xl:w-14 xl:h-14 w-10 h-10 border-2 border-gray-400'>
            <div className='xl:text-2xl md:text-xl text-lg text-gray-500 w-full h-full'>
              {user ? (
                <img src={`${import.meta.env.VITE_SERVER}/${image}`} className='w-full h-full rounded-full' alt="User" />
              ) : (
                <FaRegUser className='my-2 mx-2' />
              )}
            </div>
          </Link>
          <div>
            <p className='xl:text-3xl font-bold col-span-2 text-gray-800'>Welcome.. {username}! </p>
            <p className='xl:text-lg md:text-md text-sm text-gray-500'>Here is your drive</p>
          </div>
        </div>
        <div className='h-10 flex justify-center xl:col-span-3 group xl:mt-0 mt-2'>
          <input type="text" className='h-full w-full rounded-l-md px-3 bg-[#e8e6e6] outline-none group-hover:ring-1 group-hover:ring-gray-300' placeholder='Search..................' />
          <div className='outline-none h-full px-2 py-2 rounded-r-md bg-[#e8e6e6] text-gray-400 group-hover:ring-1 group-hover:ring-gray-300'>
            <FaSearch />
          </div>
        </div>
        {!token ? (
          <div className="flex items-center justify-end">
            <Link to={`/login`} className={`hover:text-black focus:bg-gray-500`}>
              <button className='bg-gray-800 text-white xl:px-5 rounded-md xl:py-2 font-bold xl:static absolute top-3 right-5 px-2 py-1'>Login</button>
            </Link>
          </div>
        ) : (
          <div className="flex justify-end">
            <button className='bg-gray-800 text-white xl:h-10 xl:px-5 xl:py-2 rounded-md xl:static absolute top-3 right-5 px-2 py-1 font-bold' onClick={() => { logout(); navigate('/'); window.location.reload(); }}>Logout</button>
          </div>
        )}
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Name;
