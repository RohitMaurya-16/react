/*
 As you can see App.jsx look very crowded -- in real project making try to avoid fill App.jsx thats why we use components
 based architecture.

 Divide you whole website into different components to make easier to write.
 
If we give any identity to element with need use  'className' instead of 'class'-- only for jsx

We can also use {Card()} in place of <Card /> both with return card.jsx export data

use { } to print or write js code or print data from variable 

You can call function as many time as possible as per need.
 
*/

import React from 'react'
import Card from './components/Card';
import Navbar from './components/Navbar';
 const App = () => {

  return (
    <>
    {/* <div className='card'>
      <h1>Rohit Maurya</h1>
      <p className='para'>This is my name and i am here to write my first program using react rate me how good i am...</p>
    </div>

    <div className='card'>
      <h1>Rohit Maurya</h1>
      <p className='para'>This is my name and i am here to write my first program using react rate me how good i am...</p>
    </div>    */}
    
     <Navbar/>
     <Card  />    
      
     </>  
  )
};

export default App;




