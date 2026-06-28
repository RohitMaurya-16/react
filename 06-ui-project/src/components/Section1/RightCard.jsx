// import React from 'react'

import RightCardContent from "./RightCardContent"

// import {ArrowRight} from 'lucide-react'
const RightCard = (props) => {
  return (
    <div className="h-full w-80 rounded-4xl overflow-hidden relative flex  shrink-0">
        <img className="h-full w-full object-cover" src={props.img} alt='Upload Correct Url'/>
        <RightCardContent intro={props.intro} tag={props.tag} id={props.id} color={props.color}/>
    </div>
  )
}

export default RightCard