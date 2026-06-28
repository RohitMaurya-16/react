// import React from 'react'
import Navbar from './Navbar'
import Page1Content from './Page1Content'

const Section1 = (props) => {
  return (
    <div className="w-full min-h-screen flex flex-col"> 
      <div className="w-full">
        <Navbar/>
      </div>

      <div className="flex-1" style={{minHeight: 'calc(100vh - 80px)'}}>
        <Page1Content users={props.users}  />
      </div>
    </div>
  )
}

export default Section1