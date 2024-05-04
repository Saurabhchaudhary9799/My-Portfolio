import React from 'react'
import Education from '../Education/Education'

const AboutMe = () => {
  return (
    <section className="about-me-section flex justify-center  py-16">
  <div className="container px-[20px] sm:px-[100px]">
       <div className='text-white text-2xl '>
        <h1>About Me</h1>
       </div>
       <div className='text-[#777] text-xl  p-2'>
         <p>
         Hello! I'm Saurbh Kumar, a passionate and driven Computer Science Engineering student currently in my 3rd year at Shri Mata Vaishno Devi University. I specialize in full stack web development with javascript ,React.js , Node.js ,.Express.js & MongoDB , with a keen interest in applying my skills to solve real-world problems.
         </p>
       </div>
       <div>
         <Education/>
       </div>
  </div>
    </section>
  )
}

export default AboutMe