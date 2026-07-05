import React from 'react'

const App = () => {
  // localStorage.clear() // It is a method which is used to clear local storage
  // sessionStorage.clear() //  It is a method which is used to clear session storage

    // localStorage.setItem('user','Rohit Maurya')  // if you shut your browser this data will save as local storage if
     // if you deleted that like.

    //  const user=localStorage.getItem('user');  // it is used to get value related to key in local storage
    //  console.log(user);
   
    // localStorage.removeItem('user') // it is use to remove item in local storage.
//     const user={
//       name:'Rohit Maurya',
//       age:20,
//       city:'Lucknow',
//     }
// localStorage.setItem('user',JSON.stringify(user))// here we cannot save object in local storage first we need to convert it
// on String using JSON.stringify('object');

//Output: {"name":"Rohit Maurya","age":20,"city":"Lucknow"}
 
// If you want to convert string into object use JSON.parse('user').

  return (
    <div>App</div>
  )
}

export default App