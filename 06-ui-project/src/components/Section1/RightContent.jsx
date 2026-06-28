// import React from 'react'

import RightCard from "./RightCard"

const RightContent = (props) => {
  return (
    <div id='right' className='h-full w-2/3 p-6  flex flex-nowrap gap-10 overflow-x-auto rounded-4xl'>
    {props.users.map(function(el,idx){
      return<RightCard  key={idx} id={idx+1} img={el.img} color={el.color} intro={el.intro} tag={el.tag} />
    })};
    

    </div>
  )
}

export default RightContent