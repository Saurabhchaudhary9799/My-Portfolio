import React from "react";
import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section className="intro-section  flex justify-center py-16" id="home">
      <div className="container flex flex-col-reverse gap-x-5 px-4 md:flex-row ">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              delay: 0.05,
            },
          }}
          className="   md:w-3/6  sm:px-10 md:px-20 flex flex-col gap-y-5 py-10 "
        >
          <div className="flex flex-col gap-y-1 items-center md:items-start ">
            <h5 className="text-[#32af6f] text-xl">Hello</h5>
            <h2 className="text-white text-3xl">I'm Saurbh Kumar</h2>
            <h5 className="text-[#777]">Full Stack Developer</h5>
            <p className="text-[#777] ">
              Hi there! My name is Saurbh Kumar and I'm a full stack web
              developer . I love all things tech and coding ,and share my
              knowledge and experince with others.
            </p>
          </div>
          <div className=" flex justify-center md:justify-start ">
            <div className="my-resume flex  items-center justify-center w-48 p-3 gap-x-2 text-xl text-white rounded-2xl bg-[#32af6f] hover:cursor-pointer ease-in-out duration-300 hover:-translate-y-[3px]">
              My Resume{" "}
              <span>
                <FaDownload />
              </span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              delay: 0.05,
            },
          }}
          className=" md:w-3/6 flex justify-center items-center "
        >
          <img
            className="w-64 h-64 object-cover rounded-[100%]"
            src="https://res.cloudinary.com/dltk6m7c5/image/upload/v1714868153/WhatsApp_Image_2024-05-05_at_05.44.30_ddznli.jpg"
            alt="profile_image"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
