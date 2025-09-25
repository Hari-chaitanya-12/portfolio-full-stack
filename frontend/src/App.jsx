import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Details from './components/Details';
import Education from './components/Education';
import ContactForm from './components/ContactForm';
import Experience from './components/Experience';

import './App.css';

function App() {

  return (
    <>
      <Navbar/>
      <Intro/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Education/>
      <Experience/>
      <ContactForm/>
    </>
  )
}

export default App
