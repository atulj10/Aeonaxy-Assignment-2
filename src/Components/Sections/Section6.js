import React from 'react'
import './Section.css'

const Section6 = ({w}) => {
  return (
    <div className='section6-container'>
      <h1 className={`${(w<450) ? " text-4xl ":" text-6xl "}  mb-32`}>More about writing on Medium: </h1>
      <h2>How do I start writing on Medium?</h2>
      <h3>First, make a free account. Then, to create a story, click on your profile picture in the top corner of the page,then "Write a story".</h3>
      <hr/>
      <h2>How can I make money writing on Medium?</h2>
      <hr/>
      <h2>Who writes on Medium?</h2>
      <h3>Anyone can write on Medium. Whether you've never written before or are ready to create a full publication, it's easy to get started and we allow you to focus more in big ideas and less on driving clicks.
      First, make a free account. Then, to create a story, click on your profile picture in the top corner of the page,then "Write a story".</h3>
      <hr/>
      <div  className='flex justify-center gap-5'>
        <button className='btn1'>Looking for help to getting started?</button>
        <button className='btn2'>Check out our guide </button>
      </div>
    </div>
  )
}

export default Section6
