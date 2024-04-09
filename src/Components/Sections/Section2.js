import React from 'react'
import './Section.css'
import image from '../../Assests/user.png'

const Section2 = ({w}) => {
    return (
        <div className={`section2-container flex ${(w<450) && "flex-col"} justify-evenly`}>
            <div className='p-10'>
                <h1 className={`p-24 ${(w<450)? "text-6xl pl-0" :"text-8xl"}`}>Join a network of curious mind</h1>
            </div>
            <div className='user'>
                <hr />
                <div className='flex'>
                    <img src={image} />
                    <div className=' flex flex-col justify-end ml-5'>
                        <h1 className={`${!(w<450) && "text-2xl"}`}>Barak obama</h1>
                        <p>DAD,HUSBAND,PRESIDENT,CITIZEN</p>
                    </div>
                </div>
                <hr />
                <div className='flex'>
                    <img src={image} />
                    <div className=' flex flex-col justify-end ml-5'>
                        <h1 className={`${!(w<450) && "text-2xl"}`}>Michael Chabon</h1>
                        <p>NOVELIST, SCREENWRITER, AND COLUMNIST</p>
                    </div>
                </div>
                <hr />
                <div className='flex'>
                    <img src={image} />
                    <div className=' flex flex-col justify-end ml-5'>
                        <h1 className={`${!(w<450) && "text-2xl"}`}>Camille Fournier</h1>
                        <p>ENGINEER, CTO, AND AUTHOR</p>
                    </div>
                </div>
                <hr />
                <div className='flex'>
                    <img src={image} />
                    <div className=' flex flex-col justify-end ml-5'>
                        <h1 className={`${!(w<450) && "text-2xl"}`}>Carvell Wallace </h1>
                        <p>NEW YORK TIMES BESTSELLING AUTHOR AND PODCASTER</p>
                    </div>
                </div>
                <hr />
                <div className='flex'>
                    <img src={image} />
                    <div className=' flex flex-col justify-end ml-5'>
                        <h1 className={`${!(w<450) && "text-2xl"}`}>Devon Price</h1>
                        <p>SOCIAL PSYCHOLOGIST AND AUTHOR</p>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default Section2
