import React from 'react'

 const App = () => {
  return (
     < >
    <div id='parent'>
      <h1 id='child_1'>Hello</h1>
      <h2 id='child_2'> Beta</h2>
      </div>  {/* return function always return only one thing not 2 things like outer element should be one.. here <div> is outter element.*/}
      <div></div>   
      </>  // this is an fragment when we don't need to use div as outer element.

)};

export default App;
