import React from 'react'
import Name from '../component/Name'
import Container from '../component/Container'
import Animation from '../component/Animation'
function Home() {
  return (
    <>
    <div className='bg-[#F6F5F2] p-2'>
      <div className='xl:h-1/6'><Name/></div>
      <div className='xl:h-5/6 mt-4'><Animation/></div>
      <div className='xl:h-5/6 mt-2'><Container/></div>
   
      
  
    </div>

    </>
  )
}

export default Home
