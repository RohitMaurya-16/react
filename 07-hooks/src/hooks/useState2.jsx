import  { useState } from 'react'

const UseState2 = () => {

    const [first, setfirst] = useState(0);
    function decrease(){
        setfirst((val)=>val-1);
    }

    function increase(){
        setfirst((val)=>val+1);
    }
    
  return (
   <div className="flex flex-col items-center justify-center gap-6 min-h-screen bg-gray-600">

  <h1 className="text-3xl font-bold text-white text-center">
    HERE I AM USING MY{" "}
    <span className="text-amber-400">onMouseMove</span>{" "}
    ANIMATION
  </h1>

  <div className="flex items-center gap-4">
    
    <button onMouseMove={decrease} className="px-6 py-2 rounded-lg bg-red-500 text-white font-semibold shadow-md hover:bg-red-600 active:scale-95 transition-all duration-200">
      Decrease
    </button>

    <h1 className="text-3xl font-bold px-5 py-2 bg-amber-500 rounded-lg shadow-lg">
      {first}
    </h1>

    <button
      onMouseMove={increase}
      className="px-6 py-2 rounded-lg bg-green-500 text-white font-semibold shadow-md hover:bg-green-600 active:scale-95 transition-all duration-200"
    >
      Increase
    </button>

  </div>

</div>
  )
}

export default UseState2;