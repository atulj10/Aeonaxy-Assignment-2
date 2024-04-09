import React from 'react'
import './Card.css'

const Card = ({ content1, content2 }) => {
    return (
        <div className='card text-center'>
            <div className='content-front'>
                <h1 className='text-4xl'>{content1} &nbsp; -></h1>
                <p>HOVER/CLICK ME 😉</p>
            </div>
            <div className='content-back'>
                <h1 className='text-2xl'>{content2}</h1>
            </div>
        </div>
    )
}

export default Card
