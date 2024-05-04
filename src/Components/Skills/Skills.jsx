import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
const Skills = () => {
    const skills = [{ skill:"html",progress:90 },{ skill:"css",progress:80 },{ skill:"Javascript",progress:70 },{ skill:"ReactJS",progress:80 },{ skill:"Redux",progress:80 },{ skill:"TailwindCSS",progress:90 },{ skill:"Bootstrap",progress:80 },{ skill:"MaterialUI",progress:80 },{ skill:"ChakraUI",progress:70},{ skill:"NodeJS",progress:70 },{ skill:"ExpressJS",progress:70 },{ skill:"MongoDB",progress:70 },{ skill:"Operating System",progress:60 },{ skill:"DBMS",progress:60 },{ skill:"Computer Network ",progress:60 },{ skill:"OOPS",progress:60 }]
  return (
    <section className="skills-section  px-[120px] mb-10">
        <h2 className="section-title  text-2xl text-white font-bold pb-5 ">Skills</h2>
        <div className='grid grid-cols-2 gap-4'>
         {
            skills.map((el,index)=>{
                return <div key={index}>
                      <span className='text-[#32af6f]'>{el.skill}</span>
                      <ProgressBar completed={el.progress} bgColor='#171f38' borderRadius='10px'/>
                </div>
            })
         }
        </div>
    </section>
  )
}

export default Skills