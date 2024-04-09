import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (<>
    <h1 className='logo'><button>LOGO</button></h1>
        <div className='nav-container'>
            <div className='non-hover'>
                <span>HOVER</span>
            </div>
            <div className='hovered'>
                <button className='nav-btn'>HOME</button>
                <span>&nbsp; | &nbsp;</span>
                <button className='nav-btn'>ABOUT</button>
                <span>&nbsp; | &nbsp;</span>
                <button className='nav-btn'>LINK</button>
                <span>&nbsp; | &nbsp;</span>
                <button className='nav-btn'>LINK</button>
            </div>
        </div>
    </>
    )
}

export default Navbar
