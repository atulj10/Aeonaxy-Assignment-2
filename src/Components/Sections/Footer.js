import React from 'react'
import './Section.css'

const Footer = ({w}) => {
  return (
    <div className={`footer  flex ${(w<450) && "flex-col"} justify-between bg-white p-5 my-2`}>
      <div><h1>LOGO</h1></div>
      <div><h1>Every idea needs a Medium</h1></div>
      <div className='flex gap-5 cursor-pointer '>
        <a>About</a>
        <h1>|</h1>
        <a>Terms</a>
        <h1>|</h1>
        <a>Privacy</a>
        <h1>|</h1>
        <a>Help</a>
      </div>
    </div>
  )
}

export default Footer
