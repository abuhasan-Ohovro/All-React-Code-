// import React from 'react'
import profilePic from './pic/themen.png'

function Card() {
  return (
    <div className='card'>
        <img className='hasan' src={profilePic} alt="This is a pic of mine (very handsome :) )" />
        <h4  className='name'>Mohammad Hasan </h4>
        <p  className='description'>I am nery Addicted to Coding and Computer Science. I love Coding , This is my Obbestion.</p>
      
    </div>
  )
}

export default Card
