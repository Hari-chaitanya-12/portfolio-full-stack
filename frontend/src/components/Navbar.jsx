import React from 'react'
import linkedin from '../assets/linkedin.png'
const Navbar = () => {
  return (
    <div>
      <header className="header">
        <h3>Hari Chaitanya</h3>
        <nav className="nav-bar">
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
            
            <a href="mailto:harichaitanya47@gmail.com"><img src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/email-envelope-line-white-icon.png" alt="mail" /></a>
            <a href="https://www.linkedin.com/in/hari-chaitanya-328a69250"><img src={linkedin} alt="linkedin" /></a>
            
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
