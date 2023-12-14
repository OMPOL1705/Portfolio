import React from 'react';
import {
    Link
  } from "react-router-dom";
import "../mynav/mynav.css"  

const Mynav = () => {
  return (
    <div className="nav-links">
        <div className="nav-link">
        <Link aria-current="page" to="/about">
            <img src="/linux-logo-11609367586ylouiw3chu-removebg-preview.png" alt=''/>
            <p className='img__description'>About Me</p>
        </Link>
        </div>
        <div className="nav-link">
        <Link aria-current="page" to="/projects">
            <img src="/png-transparent-visual-studio-code-hd-logo-thumbnail-removebg-preview.png" alt=''/>
            <p className='img__description'>Projects</p>
        </Link>
        </div>
        <div className="nav-link">
        <Link aria-current="page" to="/experience">
            <img src="/png-transparent-terminal-macos-unix-swipe-angle-rectangle-computer-removebg-preview.png" alt=''/>
            <p className='img__description'>Experience</p>
        </Link>
        </div>
    </div>
  )
}

export default Mynav
