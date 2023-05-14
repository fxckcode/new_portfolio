import React from 'react'
import './About.scss'

function About() {
  return (
    <div className='contain-about flex items-center justify-center' id="about">
      <div className="terminal bg-black rounded w-2/4 shadow-xl">
        <div className="head-terminal gap-2 flex text-[12px] border-b p-2 border-gray-900 text-gray-800">
          <i className="fa-sharp fa-solid fa-circle"></i>
          <i className="fa-sharp fa-solid fa-circle"></i>
          <i className="fa-sharp fa-solid fa-circle"></i>
        </div>
        <div className="content-terminal p-4">
          <p>$ <span className="terminalShell"></span></p>
        </div>
      </div>
    </div>
  )
}

export default About