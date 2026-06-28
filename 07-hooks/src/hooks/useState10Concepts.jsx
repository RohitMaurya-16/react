
/*
first concept: each concept 5 line gap.

import React from 'react'
const useState10Concepts = () => {

  const [new, newSet]=useState(10);
  const btnClicked=()=>{
    console.log(new);   // output will be 10
    setNew(20);  // desplay will show 20
    console.log(new); //out will be 10
    }
    
  Why is this happening? Because console.log() is synchronous, while setNew() is an asynchronous task."

  return (
    <div>useState10-Concepts
    <button onClicked={btnClicked}>Button</button>
    </div>
  )
}

export default useState10Concepts;

*/





/* 

import React from 'react'

const useState10Concepts = () => {

  const [first, setfirst] = useState(10)

  setfirst(10); // 10 will not shown in the browser bcz you rendered same value, you need to setFirst value somthing new.

  return (
    <div>{first}</div> 
  )
}

export default useState10Concepts

*/
/*

You can use object Destruction to  change data in the object. You can see it on line 60.

*/





// import React from 'react'
// import { useState } from 'react'

// const UseState10Concepts = () => {

//   const [first, setfirst] = useState({user:'Rohit', age:20});
  
//   const btnClicked = ()=>{
//     // const  newdata={...first};
//     // newdata.user="Rohit Maurya"
//     // newdata.age=25
//     // setfirst(newdata)
//     setfirst(prev=>({...prev,user:"Rohit Maurya",age:50}))
//   };

//   return (
    
// <div className='flex h-96 w-90 flex-col items-center justify-center bg-pink-500 py-10 mb-7'>
 
//   <h1 className='text-xl font-bold'>
//     Your name is  {first.user} <br/> and  age is {first.age}
//   </h1>
//   <button 
//     className='mt-4 flex h-10 w-20 items-center justify-center rounded-2xl border-2 bg-green-600' 
//     onClick={btnClicked}>
//     Click it
//   </button>
// </div>

//   )
// }

// export default UseState10Concepts




// import React, {useState} from 'react'

// const  UseState10Concepts = () => {

//   const [first, setfirst] = useState(1);
//  // Button Click Handler
//  const onbtn = () => {

//   // React batches these state updates together
//   // Each callback receives the latest updated value

//   setfirst((prev) => prev + 1); // 0 → 1
//   setfirst((prev) => prev + 1); // 1 → 2
//   setfirst((prev) => prev + 1); // 2 → 3

//   // Final result: +3
// };

//   return (
//     <div>
//       <button className='w-20 h-10 hover:caret-amber-600 bg-gray-400 text-black rounded-xl' onClick={onbtn}> Click {first}</button>
//     </div>
//   )
// }

// export default UseState10Concepts

