import React from 'react'
import './Section.css'

const Section5 = ({w}) => {
  return (
    <div className='section5-container'>
      <h1 className={`${(w<450)?"text-6xl":"text-8xl"}`}>Earn money from <br/> your writing.</h1>
      <h1 className={`${!(w<450) && "text-2xl"} mt-10`}>Writing has its rewards when you join the Partner Program. <br/>Learn how to get paid for the content you publish and the audiences you build. </h1>
      <button>Learn More</button>
    </div>
  )
}

export default Section5
