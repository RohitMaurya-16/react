// import React from 'react'
import {ArrowRight} from 'lucide-react'
const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full   p-8 flex flex-col justify-between">
            <h2 className='bg-white rounded-full h-12 w-12 flex justify-center  items-center text-xl font-semibold'>{props.id}</h2>
            <div>
                <p className=' text-lg leading-relaxed text-white mb-14'>{props.intro}</p>
                 <div className='flex justify-between'> 
                    <button  onMouseMove={function(){
                     alert("Click me PLZ");
                    }} style={{backgroundColor:props.color}} className= 'text-white font-medium px-8 py-3 rounded-full '>{props.tag}</button>
                    <button style={{backgroundColor:props.color}} className=' text-white font-medium px-4 py-2 rounded-full'><ArrowRight size={15} /></button>
                 </div>
            </div>
        </div>
  )
}

export default RightCardContent


