import React from 'react'
import './Section.css'
import image from '../../Assests/in.png'

const Section4 = ({ w }) => {
    return (
        <div className='section4-container flex flex-col'>
            <div className='heading self-center m-32'>
                <h1 className={`${(w < 450) ? "text-4xl" : "text-8xl"} text-center`}>Find and grow <br />your audience</h1>
                <p className='m-10 text-center'>With simple tools and features, you have the chance to connect with over 100 million curious readers.</p>
            </div>
            <div className={`${(w<450) ? "flex flex-col" :"views"}`}>
             <div className='flex flex-col gap-16 audience'>
                <h1 className='text-5xl'>Audience insights.</h1>
                <div className='flex flex-col'>
                <p>Use data to learn what resonate with your reader so you can keep growing your audience.</p>
                <img className='self-center' src={image}/>
                </div>
             </div>
             <div className='flex flex-col gap-16 social'>
                <h1 className='text-5xl'>Social connectivity.</h1>
                <p>Find people you're already connected with on twitter and easily share your stories across platforms.</p>
             </div>
             <div className='flex flex-col gap-16 network'>
                <h1 className='text-5xl'>Powerful network.</h1>
                <p>Readers can discover and follow you eaisly with tailored feeds and recommendations.</p>
             </div>
             <div className='flex flex-col gap-16 email'>
                <h1 className='text-5xl'>Email subscriptions.</h1>
                <p>Reach readers by having your stories delivered straight to their inboxes.</p>
             </div>
             <div className='flex flex-col gap-16 discussion'>
                <h1 className='text-5xl'>Interactive discussions.</h1>
                <p>Build relationships with yoour readers through a threaded comments section.</p>
             </div>
             <div className='flex flex-col gap-16 design'>
                <h1 className='text-5xl'>Custom design.</h1>
                <p>Eaisly customize your page to stand out and build your brand.</p>
             </div>
            </div>
        </div>
    )
}

export default Section4
