import React from "react";
import { FaDownload } from "react-icons/fa6";
const Intro = () => {
  return (
    <section className="intro-section  flex justify-center py-16">
      <div className="container flex flex-col-reverse gap-x-5 px-4 md:flex-row ">
        <div className="   md:w-3/6  sm:px-10 md:px-20 flex flex-col gap-y-5 py-10 ">
          <div className="flex flex-col gap-y-1 items-center md:items-start ">
            <h5 className="text-[#32af6f] text-xl">Hello</h5>
            <h2 className="text-white text-3xl">I'm Saurbh Kumar</h2>
            <h5 className="text-[#777]">Full Stack Developer</h5>
            <p className="text-[#777] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              laudantium neque omnis, distinctio maxime corporis vel quis cum
              suscipit. Nulla perferendis non, a ratione atque alias veniam
              ipsam qui fugiat?
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
              <div className="my-resume flex  items-center justify-center w-48 p-3 gap-x-2 text-xl text-white rounded-2xl bg-[#32af6f] hover:cursor-pointer ">
                 My Resume <span><FaDownload/></span>
              </div>
          </div>
        </div>
        <div className=" md:w-3/6 flex justify-center items-center ">
          <img className="w-64 h-64 object-cover rounded-[100%]" src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile_image" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
