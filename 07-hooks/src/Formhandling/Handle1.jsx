// import React from 'react'

const Handle1 = () => {

    const handle=(e)=>{
         e.preventDefault(); // it is use prevent default behavior of any elements.
     console.log("Form Submitted");
    };
  return (
    <div className=" h-screen w-full flex  justify-center items-center bg-green-300">
        <form onSubmit={handle}>
             <input  className="py-10 px-20 m-5 bg-gray-400 rounded-2xl text-2xl border-s-black " type="text"  placeholder="Enter You name"/>
             <button className="py-10 px-20 bg-gray-800 rounded-2xl text-white text-2xl"  >Submit</button>
        </form>
    </div>
  )
}

export default Handle1