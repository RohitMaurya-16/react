import React from 'react'
import Card from './Components/Card';
const App = () => {
  return (
    <div className='parent'>
      <Card name ="Rohit Maurya" age={23} img="https://images.unsplash.com/photo-1780324008116-94a743271848?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card name="Vaibhav Singh" age={21} img="https://images.unsplash.com/photo-1780519123579-2088d9560826?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
    </div>
  )
};
export default App;
