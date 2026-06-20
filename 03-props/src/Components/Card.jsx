import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.img} alt="correct url"/>
        <h1>{props.name}</h1>
        <p>My age is {props.age}</p>
        <button>View Profile</button>
      </div>
  )
};

export default Card;
