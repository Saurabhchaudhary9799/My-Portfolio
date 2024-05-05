import React from 'react'
import Education from '../Education/Education'
import {motion} from "framer-motion"
const AboutMe = () => {
  return (
    <section className="about-me-section flex justify-center  py-16 " id='about' >
  <div   className="container px-[20px] sm:px-[100px]">
       <motion.div initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.05,
            },
          }} className='text-white text-2xl '>
        <h1>About Me</h1>
       </motion.div>
       <motion.div initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.17,
            },
          }} className='text-[#777] text-xl  p-2'>
         <p>
         Hello! I'm Saurbh Kumar, a passionate and driven Computer Science Engineering student currently in my 3rd year at Shri Mata Vaishno Devi University. I specialize in full stack web development with javascript ,React.js , Node.js ,.Express.js & MongoDB , with a keen interest in applying my skills to solve real-world problems.
         </p>
       </motion.div>
       <div>
         <Education/>
       </div>
  </div>
    </section>
  )
}

export default AboutMe