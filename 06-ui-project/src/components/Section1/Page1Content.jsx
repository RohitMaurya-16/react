// import React from 'react'
import LeftContent from './LeftContent'
import RightContnent from './RightContent'
const Page1Content = (props) => {
  return (
    <div className='py-10 h-[90vh] px-18 flex items-center gap-10'>
    <LeftContent/>
    <RightContnent users={props.users}/>   
 


    </div>
  )
}

export default Page1Content