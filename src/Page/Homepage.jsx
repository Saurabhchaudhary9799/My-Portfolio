import React from 'react'
import Header from '../Components/Header/Header'
import Intro from '../Components/Intro/Intro'
import AboutMe from '../Components/AboutMe/AboutMe'
import Skills from '../Components/Skills/Skills'
import Projects from '../Components/Projects/Projects'
import ContactMe from '../Components/ContactMe/ContactMe'
import Footer from '../Components/Footer/Footer'
import { BiUpArrowAlt } from "react-icons/bi";
import { Link } from 'react-scroll'
const Homepage = () => {
  return (
    <>
    {/* <div className='fixed  bottom-1 right-1 border bg-white p-2 text-2xl rounded-full'>
    <Link
                activeClass="active"
                to="home"
               
                smooth={true}
               
                offset={-150}
                duration={300}
                
              >
<BiUpArrowAlt/>
    </Link>
    </div> */}
    <Header/>
    <Intro/>
    <AboutMe/>
    <Skills/>
    <Projects/>
    <ContactMe/>
    <Footer/>

    </>
  )
}

export default Homepage