import React from "react";
import "./Skills.css";
import { animate, motion } from "framer-motion";
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate:(index)=> ({
    opacity: 1,
    y: 0,
    transition:{
      delay:0.05*index,
    }
  }),
};
const Skills = () => {
  const skills = [
    "html",
    "CSS",
    "Tailwind",
"Bootstrap",
"ChakraUI",
"MaterialUI",
    "Javascript",
    "Framer-motion",
    "ReactJS",
    "NodeJS",
    
    "ExpressJS",
    "MongoDB",
    "Redux",
    "Typescript",
    "Computer Network",
    "OOPs",
    "DBMS",
    "Operating System",
    "C++",
    "DSA",
    "Git",
    "Github",
    "Problem Solving"
  ];

  return (
    <section
      className="skills-section px-[20px] mb-5 md:px-[120px] md:mb-10"
      id="skills"
    >
      <h2 className="section-title  text-2xl text-white font-bold pb-5 ">
        Skills
      </h2>
      <div className="skills flex flex-wrap text-[#777] gap-5">
        {skills.map((skill, index) => {
          return (
            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
custom={index}
              key={index}
              className="bg-white rounded-xl p-2 ease-in-out duration-300 hover:-translate-y-[3px]"
            >
              {skill}
            </motion.div>
          );
        })}
        {/* <div className="bg-white rounded-xl p-2 ease-in-out duration-300 hover:-translate-y-[3px]">HTML</div>
         <div className="bg-white rounded-xl p-2 ease-in-out duration-300 hover:-translate-y-[3px]">CSS</div>

         <div className="bg-white rounded-xl p-2 ease-in-out duration-300 hover:-translate-y-[3px]">Tailwind</div>
         <div className="bg-white rounded-xl p-2 ease-in-out duration-300 hover:-translate-y-[3px]">Bootstrap</div>
         <div className="bg-white rounded-xl p-2 ease-in-out duration-300 hover:-translate-y-[3px]">Javascript</div>
         <div className="bg-white rounded-xl p-2 ease-in-out duration-300 hover:-translate-y-[3px]">ReactJS</div>
         <div className="bg-white rounded-xl p-2 ease-in-out duration-300 hover:-translate-y-[3px]">NodeJS</div>
         <div className="bg-white rounded-xl p-2 ease-in-out duration-300 hover:-translate-y-[3px]">ExpressJS</div>
         <div className="bg-white rounded-xl p-2 ease-in-out duration-300 hover:-translate-y-[3px]">MongoDB</div>
         <div className="bg-white rounded-xl p-2 ease-in-out duration-300 hover:-translate-y-[3px]">Redux</div>
         <div className="bg-white rounded-xl p-2 ease-in-out duration-300 hover:-translate-y-[3px]">TypeScript</div>
         <div className="bg-white rounded-xl p-2 ease-in-out duration-300 hover:-translate-y-[3px]">Computer Network</div>
         <div className="bg-white rounded-xl p-2 ease-in-out duration-300 hover:-translate-y-[3px]">OOPS</div>
         <div className="bg-white rounded-xl p-2 ease-in-out duration-300 hover:-translate-y-[3px]">DBMS</div>
         <div className="bg-white rounded-xl p-2 ease-in-out duration-300 hover:-translate-y-[3px]">Operating System</div>
         <div className="bg-white rounded-xl p-2 ease-in-out duration-300 hover:-translate-y-[3px]">C++</div>
         <div className="bg-white rounded-xl p-2 ease-in-out duration-300 hover:-translate-y-[3px]">DSA</div> */}
      </div>
    </section>
  );
};

export default Skills;
