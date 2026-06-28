
/* Before making ui we need to understand what is feature based and atomic ui architecture.
Feature-based architecture organizes code by what it does for the business (e.g., all files for Cart, Checkout, or Profile live in separate folders).
Atomic UI architecture organizes code by visual scale and reuse (e.g., building up from basic elements like Buttons to complex Forms, then to full Pages).

Important Note: Here we pass users object to child element Section1.jsx vis using users={users} and then 
child Section1 js will take it in props paramenter and then it will pass to its child
Page1Content.jsx using user={props.user}.. this will continue till we reacher proper desitination.
*/

// import React from 'react'
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';

const App = () => {
  const users=[
    { 
       img:'https://images.unsplash.com/photo-1765648684613-b77086065bc1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
       intro:'rd-year CS student focusing on AI/ML and software development at IILM University, passionate about building intelligent solutions [].',
       color:'black',
       tag:'Satisfied'
    },
    {
       img:'https://plus.unsplash.com/premium_photo-1661765873819-2dd94bd32016?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHByb2Zlc3Npb25hbCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
       intro:'Dedicated specialist focused on community outreach and building inclusive relationships to empower underserved populations and drive social participation.',
       color:'blue',
       tag:'Underserved'
    },
    {
       img:'https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbCUyMGdpcmxzfGVufDB8fDB8fHww',
       intro:'Finance leader with 20 years of experience driving growth, profitability, and strategic financial clarity for diverse organizations.',
       color:'pink',
       tag:'Underbanked'
    },
    {
       img:'https://plus.unsplash.com/premium_photo-1682437317248-b8b00e36bb94?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbCUyMGRhcmt8ZW58MHx8MHx8fDA%3D',
       intro:'Dedicated specialist focused on community outreach and building inclusive relationships to empower underserved populations and drive social participation.',
       color:'darkgreen',
       tag:'Underserved'
    },
    {
       img:'https://images.unsplash.com/photo-1680309915319-d46a0e40a153?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya2luZyUyMHByb2Zlc3Npb25hbCUyMGRhcmt8ZW58MHx8MHx8fDA%3D',
       intro:'Finance leader with 20 years of experience driving growth, profitability, and strategic financial clarity for diverse organizations.',
       color:'yellow',
       tag:'Underbanked'
    },
  ];
  return (
    <div>
      <Section1 users={users}/>  
      <Section2/>
    </div>
  )
}

export default App; 

