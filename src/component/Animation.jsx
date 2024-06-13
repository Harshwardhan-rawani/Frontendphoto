import React from 'react'
import "./css/Animate.css"
import pic1 from "../assets/pic1.jpg"
import pic2 from "../assets/pic2.jpg"
import pic3 from "../assets/pic3.jpg"
import pic4 from "../assets/pic4.jpg"
import pic5 from "../assets/pic5.jpg"
import pic6 from "../assets/pic6.jpg"
import pic7 from "../assets/pic7.jpg"
import pic8 from "../assets/pic8.jpg"
import pic9 from "../assets/pic9.jpg"
import pic10 from "../assets/pic10.jpg"
function Animation() {
  return (
   <>
   <div className='w-100% overflow-hidden relative'>

   <div className='flex w-fit animate '>
    <div className='m-2 w-44 h-44 rotate-2 object-cover' ><img src={pic1} className='w-full h-full' alt="" /></div>
    <div className='m-2 w-44 h-44 -rotate-2 object-cover' ><img src={pic2} className='w-full h-full' alt="" /></div>
    <div className='m-2 w-44 h-44 rotate-2 object-cover' ><img src={pic3} className='w-full h-full' alt="" /></div>
    <div className='m-2 w-44 h-44 -rotate-2 object-cover' ><img src={pic4} className='w-full h-full' alt="" /></div>
    <div className='m-2 w-44 h-44 rotate-2 object-cover' ><img src={pic5} className='w-full h-full' alt="" /></div>
    <div className='m-2 w-44 h-44 -rotate-2 object-cover' ><img src={pic6} className='w-full h-full' alt="" /></div>
    <div className='m-2 w-44 h-44 rotate-2 object-cover' ><img src={pic7} className='w-full h-full' alt="" /></div>
    <div className='m-2 w-44 h-44 -rotate-2 object-cover' ><img src={pic8} className='w-full h-full' alt="" /></div>
    <div className='m-2 w-44 h-44 rotate-2 object-cover' ><img src={pic9} className='w-full h-full' alt="" /></div>
    <div className='m-2 w-44 h-44 -rotate-2 object-cover' ><img src={pic10} className='w-full h-full' alt="" /></div>
  
    
   
    
    
   </div>
   <div className='text-center text-xl font-bold absolute bottom-1 w-full bg-[#1f1e1e7f] text-white'>Gallery</div>
   </div>
   </>
  )
}

export default Animation
