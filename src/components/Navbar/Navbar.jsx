import React, { useState } from 'react'
import './Navbar.scss'
import axios from 'axios'

function Navbar() {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <nav className='flex justify-around w-full p-5 items-center text-white fixed z-[2]'>
            <i className="fa-solid fa-bars sm:hidden text-xl relative z-10" onClick={() => setIsOpen(!isOpen)}></i>
            <a href="#hero" className='logo'>
                <img src="logo.svg" alt=""  width={100} height={100}/>
            </a>
            <ul className={`gap-5 ${isOpen ? "close" : "open"} sm:flex`}>
                <li><a href="#about" onClick={() => setIsOpen(!isOpen)}>About</a></li>
                <li><a href="#portafolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <a href="https://github.com/fxckcode" target='_blank' className='github'>Github <i className='fa-brands fa-github'></i></a>
        </nav>        
    )
}

export default Navbar