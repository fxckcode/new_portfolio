import React, { useState } from 'react'
import './Navbar.scss'
import axios from 'axios'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className='flex justify-around w-full p-5 items-center text-white'>
            <i class="fa-solid fa-bars sm:hidden text-xl relative z-10" onClick={() => setIsOpen(!isOpen)}></i>
            <a href="/" className='logo'>FxckCode</a>
            <ul className={`gap-5 ${isOpen ? "close" : "open"} sm:flex`}>
                <li><a href="#about">About</a></li>
                <li><a href="#portafolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <a href="https://github.com/fxckcode" target='_blank' className='github'>Github <i className='fa-brands fa-github'></i></a>
        </nav>        
    )
}

export default Navbar