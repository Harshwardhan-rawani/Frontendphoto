import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Sidenav from './component/Sidenav'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
    <div className='xl:flex xl:w-screen'>
      <div className='xl:w-[5%]'>
      <Sidenav/>
      </div>
     <div className='h-screen xl:w-[95%] '>      
    <Outlet/>
     </div>
    </div>
 

  
    </>
  )
}

export default App
