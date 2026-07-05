import React from 'react'
import  axios from 'axios'  
import { useState } from 'react'
const Api = () => {

  const [data,setData]=useState([])


  const getData= async ()=>{
    const response= await axios.get('https://picsum.photos/v2/list')
    setData(response.data)


  }

// const getData= async ()=>{
//   const response= await axios.get('https://jsonplaceholder.typicode.com/users')
//   console.log(response.data)
// }

 // BELOW FUNCTIONS ARE USED TO GET DATA BY USING FETCH METHOD.
 //BEST WAY TO FETCH DATA IS USE  AXIOS

  // const getData= async ()=>{
  //   const response=  await fetch('https://jsonplaceholder.typicode.com/todos/3')
  //   const data=await response.json(); // use to get data from response  using await to wait for data
  //   console.log(data)
  // }


  //  async function getData()   // async is use to make task asynconouse
  // {
  //  const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')   //await use to tell jab tak fetch reuest pass nhi hoti tb tk wait kro
  //  console.log(response);
  // }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem,idx){
          return<div>
          <h3>Hello {elem.author}</h3>
          </div>
          
        })}
      </div>
    </div>
  )
}

export default Api