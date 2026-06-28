// import React from 'react'

const Navbar = () => {

  
  return (
    <div className='flex items-center justify-between  py-6 px-18 '> 
    <h4   className='bg-black text-white px-5 py-2 rounded-full uppercase' >Target Audiance</h4>
    <button className='bg-gray-200 px-8 py-2 uppercase rounded-full tracking-wider text-sm'  onClick={function(){
      alert("Hello Guys");
    }}>digital Banking Plateform</button>
    </div>
  )
}

export default Navbar