// import React from 'react'
import { useState } from 'react';

const UseState1 = () => {

  // let a =20;
  // function changeA()
  // {
  //   console.log(a);
  //   a++;
  //   console.log(a);
  // }

  /* When you try to call changeA function and when you click on button it will not
  change value of a because Direct Interarction between site and user that want to change is not allwed
  you need to find any broker/mediator and here broker is--

  useState() function.

  */

  const [first, setfirst] = useState(0); // state for number
  const [name, setName] = useState("Rohit"); // state for name

  // stores square of first
  const [arr, setArray] = useState(0);

  function changeA() {

    // Functional Update:
    // val = current value of first
    setfirst((val) => {

      const newValue = val + 1;

      // Updating square using new value
      setArray(newValue * newValue);

      return newValue;
    });

    // Updating name state
    setName("Rohit Maurya");
  }

  return (
    // Centered wrapper filling the screen with a modern slate gradient background
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 p-6 font-sans text-white">

      {/* Container Card */}
      <div className="w-full max-w-xl scale-100 transform rounded-2xl border border-slate-700/50 bg-slate-900/60 p-8 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-indigo-500/10">

        {/* Main Text Content */}
        <h1 className="mb-8 text-center text-2xl font-bold leading-relaxed tracking-wide text-slate-100 md:text-3xl">

          My name is{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text font-extrabold text-transparent">
            {name}
          </span>

          {" "}and square of number{" "}

          <span className="font-mono text-yellow-400">
            {first}
          </span>

          {" "}is{" "}

          <span className="font-mono text-emerald-400">
            {arr}
          </span>

        </h1>

        {/* Interactive Button */}
        <div className="flex justify-center">
          <button
            onClick={changeA}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-3.5 text-base font-semibold tracking-wide text-white shadow-lg transition-all duration-200 hover:from-indigo-600 hover:to-purple-700 hover:shadow-xl hover:shadow-indigo-500/20 active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Clicked
          </button>
        </div>

      </div>
      <div></div>
    </div>
  );
};

export default UseState1;