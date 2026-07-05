import React, { useEffect, useState } from 'react'
import axios from "axios";

const App = () => {
  const [UserData, setUserData] = useState([])
  const [index, setindex] = useState(5)

  // Fetches data dynamically based on the current page index
  const getData = async () => {
    try {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=23`)
      setUserData(response.data)
      console.log(response.data)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }
   
  // Triggers whenever the page index changes
  useEffect(function(){
    getData()
  }, [index])

  // Navigation handlers
  const handlePrev = () => {
    if (index > 1) {
      setindex(index - 1)
    }
  }

  const handleNext = () => {
    setindex(index + 1)
  }

  let printUserData = <h3 className='text-gray-500'>No users available</h3>

  if (UserData.length > 0) {
    printUserData = UserData.map(function(elem){
      return (
        <div key={elem.id} className='group transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(245,158,11,0.25)]'>
          <a href={elem.url} target='_blank' rel="noreferrer">
            
            {/* Big image container (h-80 w-80) with dynamic hover border */}
            <div className='h-80 w-80 overflow-hidden bg-zinc-900 rounded-xl border border-transparent group-hover:border-amber-400 transition-colors duration-300'>
              <img className='h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110' src={elem.download_url} alt={elem.author}/>
            </div>
            
            {/* Author name smoothly turns amber on card hover */}
            <h2 className='font-bold text-xl mt-2 w-80 truncate text-gray-400 group-hover:text-amber-400 transition-colors duration-300 flex justify-center'>{elem.author}</h2>
          </a>
        </div>
      )
    })
  }

  return (
    <div className='bg-black h-screen text-white p-4 flex flex-col justify-between overflow-hidden'>
      
      {/* Inline styles injected directly into the document to remove scrollbar visuals entirely */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Grid wrapper container with hidden scrollbar */}
      <div className='flex flex-wrap justify-center gap-6 p-2 overflow-auto flex-1 content-start no-scrollbar'>
        {printUserData}
      </div>

      {/* Sticky Bottom Pagination Panel */}
      <div className='flex justify-center items-center p-4 gap-6 bg-black border-t border-zinc-900 mt-2'>
        <button 
          onClick={handlePrev}
          disabled={index === 1}
          className={`bg-amber-400 text-black rounded px-5 py-2 font-bold cursor-pointer active:scale-95 transition-all ${index === 1 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-amber-500'}`}
        >
          Prev
        </button>

        <span className='font-bold text-lg text-amber-400 tracking-wide'>Page {index}</span>

        <button 
          onClick={handleNext}
          disabled={index === 42}
          className={`bg-amber-400 text-black rounded px-5 py-2 font-bold cursor-pointer active:scale-95 hover:bg-amber-500 transition-colors ${index === 42 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-amber-500'}`}
        >
          Next
        </button>
      </div>

    </div>
  )
}

export default App