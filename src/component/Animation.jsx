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
   <div className='w-100% overflow-hidden relative flex'>

   <div className='w-fit animate flex'>
  <div className='flex'>    
    {[pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8,pic9,pic10].map((e,index)=>{
           return <div className='m-2 w-44 h-44  object-cover' key={index}><img src={e} className='w-full h-full rounded-sm shadow-sm' alt="" /></div>
    })}
    
    </div>
   </div>
   <div className='w-fit animate flex'>
  <div className='flex'>    
    {[pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8,pic9,pic10].map((e,index)=>{
          return  <div className='m-2 w-44 h-44 object-cover' ><img src={e} className='w-full rounded-sm shadow-sm h-full' alt="" /></div>
    })}
    
    </div>
   </div>
 
   
   <div className='text-center text-xl font-bold absolute bottom-1 w-full bg-[#1f1e1e7f] text-white'>Gallery</div>
   </div>
   </>
  )
}

export default Animation
