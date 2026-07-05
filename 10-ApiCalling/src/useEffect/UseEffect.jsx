import React, { useEffect, useState } from 'react'

const UseEffect = () =>{
const [num, setnum] = useState(0);

const [num2,setnum2]=useState(10);

useEffect(function(){
    console.log("use EFfect is runing");
},[num,num2])

  return (
    <div>
        <h1>{num}</h1>
        <h1>{num2}</h1>
        <button onMouseEnter={()=>{
            setnum(num+1)
        }} onMouseLeave={()=>{
            setnum2(num2+10)
        }}>Click</button>
    </div>
  )
}

export default UseEffect