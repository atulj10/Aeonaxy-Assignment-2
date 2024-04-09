import React from 'react'
import './Section.css'
import video from '../../Assests/section1Img.mp4'

const Section1 = ({w}) => {
    return (
        <div className={`flex ${(w<450) && "flex-col"} justify-evenly my-20 bg-black`}>
            <div className={`${(w<450) ? "p-20 pb-5" : "p-40"} flex flex-col items-start gap-14`}>
                <p className='text-white'>START A BLOG FOR FREE</p>
                <h1 className='text-white text-6xl'>Publish, grow, and earn, all in one place.</h1>
                <h1 className='text-white'>If you have a story to tell, knowledge to share, or a perspective to offer- welcome home. Sign up for free so your writing can thrive in a network supported by millions of readers not ads.</h1>
                <button className='writing-btn'>Start writing</button>
            </div>
            <div className={`${(w<450) ? "pb-10" :"pt-20"}`}>
                <video width={"100%"} height={"100%"} loop autoPlay muted>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}

export default Section1
