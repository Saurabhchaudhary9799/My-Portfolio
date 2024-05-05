import React from "react";
import {motion} from "framer-motion"
const Education = () => {
  return (
    <section className="education-section   my-10 flex flex-col gap-y-10 md:flex-row md:gap-x-10 ">
      <div>
        <header className="title pb-5">
          <h1 className="text-white text-2xl">Education</h1>
        </header>
        <div className="content flex flex-col gap-y-5  border-l-2 pl-4">
          <motion.div initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.05,
            },
          }} className=" relative bg-[#171f38] text-[#777] p-2 before:content-[''] before:absolute before:w-[16px] before:h-[16px] before:rounded-[50%] before:top-0 before:right-[calc(100%+10px)] before:bg-[#11a372]  ">
            <h5>Bachelor of Technology , </h5>
            <h2 className="text-[#32af6f]">August ,2021-June,2025</h2>

            <h4>
              <span>Grade :</span> 7.76{" "}
            </h4>
            <p>
              I have passed out my 10th class from Bhagvati Bal Niketan Sr. Sec.
              school , Nadbai . I got 91.33 % in my 10th class . This School
              environment is very peace and beautiful.
            </p>
          </motion.div>
          <motion.div  initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.15,
            },
          }} className="relative bg-[#171f38] text-[#777] p-2 before:content-[''] before:absolute before:w-[16px] before:h-[16px] before:rounded-[50%] before:top-0 before:right-[calc(100%+10px)] before:bg-[#11a372]">
            <h5>High School</h5>
            <h2 className="text-[#32af6f]">June ,2017-April,2019</h2>

            <h4>
              <span>Grade :</span> 91.33%{" "}
            </h4>
            <p>
              I have passed out my 10th class from Bhagvati Bal Niketan Sr. Sec.
              school , Nadbai . I got 91.33 % in my 10th class . This School
              environment is very peace and beautiful.
            </p>
          </motion.div>
          <motion.div initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.25,
            },
          }} className="relative bg-[#171f38] text-[#777] p-2 before:content-[''] before:absolute before:w-[16px] before:h-[16px] before:rounded-[50%] before:top-0 before:right-[calc(100%+10px)] before:bg-[#11a372]">
            <h5>Secondary School</h5>
            <h2 className="text-[#32af6f]">June ,2016-June,2017</h2>

            <h4>
              <span>Grade :</span> 91.33%{" "}
            </h4>
            <p>
              I have passed out my 10th class from Bhagvati Bal Niketan Sr. Sec.
              school , Nadbai . I got 91.33 % in my 10th class . This School
              environment is very peace and beautiful.
            </p>
          </motion.div>
        </div>
      </div>
      <div>
        <header className="title pb-5">
          <h1 className="text-white text-2xl">Experience</h1>
        </header>
        <div className="content flex flex-col gap-y-5  border-l-2 pl-4">
          <motion.div initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.05,
            },
          }} className=" relative bg-[#171f38] text-[#777] p-2 before:content-[''] before:absolute before:w-[16px] before:h-[16px] before:rounded-[50%] before:top-0 before:right-[calc(100%+10px)] before:bg-[#11a372]  ">
            <h5>Open Source Contributor </h5>
            <h2 className="text-[#32af6f]">1 October,2023 - 31.October,2023</h2>
            <h1 className="text-2xl text-white">HacktoberFest,2023</h1>

            <p>
              I contributed in HactoberFest ,2023  as a open source contributor . I worked basically on Javascript & React.JS in this contribution . I learned a lot about Git , Github & advanced JS.
            </p>
          </motion.div>
         
        </div>
      </div>
    </section>
  );
};

export default Education;
