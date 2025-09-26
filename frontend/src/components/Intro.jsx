import React from 'react'
import profilePic from '../assets/pp.jpg'
const Intro = () => {
  return (
    <div>
        <section className="intro">
            <div className="left-side">
                <h1 >Hi, I'm Hari Chaitanya</h1>
                <p>Hi, I’m Hari Chaitanya Bodakuntla — a Frontend web developer passionate about building
                    interactive and user-friendly digital experiences. I specialize in Html, CSS, JavaScript, React,
                    and Node.js, and I’m always exploring ways to turn ideas into clean, functional websites.</p>
            </div>
            <div className="right-side"> 
                <img src={profilePic} alt="profile picture" height={300} width={250} /> 
            </div>
        </section>
    </div>
  )
}

export default Intro
