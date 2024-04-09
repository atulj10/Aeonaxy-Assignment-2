import React from 'react'
import './Section.css'
import image from '../../Assests/Section2.png'
import Card from '../Card/Card'

const Section3 = ({ w }) => {
    return (
        <div className={`section3-container`}>
            <div className={`flex ${(w < 450) ? "flex-col" : ""} justify-evenly `}>
                <div className={`flex flex-col justify-between`}>
                    <h1 className='text-8xl'>Create your<br /> space</h1>
                    <div>
                        <p className={`my-5 ${(w < 450) ? "" : "text-2xl"}`}>Tell your story your way- with different ways to <br /> write,style and brand your work.</p>
                        <button>Start writing</button>
                    </div>
                </div>
                <div>
                    <img src={image} />
                </div>
            </div>
            <div className={`flex ${(w < 450) && "flex-col"} justify-center w-full object-contain`}>
                <Card content1="Start a Blog" content2="Create a blog  for free to have a personalized home for your writing. Brand your space and share your writing width reader on any device"/>
                <Card content1="Start a Publication" content2="Collaborate with others or publish under a brand name. Use our story submission system and expressive customization options."/>
            </div>
        </div>
    )
}

export default Section3
