import React from 'react'
import './Hero.scss'

function Hero() {
  return (
    <div className="contain flex flex-col" id="hero">
        <div>
            <h1 className='headline'>Hi! I'm Diego 👋</h1>
            <div>
              <span className='multiText'></span>
            </div>
        </div>
    </div>
  )
}

export default Hero