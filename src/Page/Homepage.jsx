import React from 'react'
import Header from '../Components/Header/Header'
import Intro from '../Components/Intro/Intro'
import AboutMe from '../Components/AboutMe/AboutMe'
import Skills from '../Components/Skills/Skills'
import Projects from '../Components/Projects/Projects'
import ContactMe from '../Components/ContactMe/ContactMe'
import Footer from '../Components/Footer/Footer'

const Homepage = () => {
  return (
    <>
    <Header/>
    <Intro/>
    <AboutMe/>
    <Skills/>
    <Projects/>
    <Footer/>
    </>
  )
}

export default Homepage