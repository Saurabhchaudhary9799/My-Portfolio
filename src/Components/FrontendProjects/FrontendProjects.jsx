import React from "react";

const FrontendProjects = () => {
  return (
    <section className="frontend-projects">
      <div className="container grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border  rounded-xl  bg-[#171f38]">
          <div className="">
            <img
              className="w-full h-64 object-fill rounded-xl"
              src="src/assets/topic.png"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-y-3 p-4">
            <h1 className="text-2xl text-white">Topic</h1>
            <p className="text-[#777]">
              This projects related to a learning website which have course
              related to various domain
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="border p-2 bg-white rounded-xl">Tailwind</div>
              <div className="border p-2 bg-white rounded-xl">ReactJs</div>
              <div className="border p-2 bg-white rounded-xl">Javascript</div>
            </div>
            <div className="flex justify-between  ">
              <div className=" p-2 bg-white rounded-xl bg-yellow-500">
                <a
                  href="https://github.com/Saurabhchaudhary9799/Topic"
                  target="_blank"
                >
                  {" "}
                  Github Repo
                </a>
              </div>

              <div className=" p-2 bg-white rounded-xl bg-blue-500">
                Live View
              </div>
            </div>
          </div>
        </div>
        <div className="border  rounded-xl  bg-[#171f38]">
          <div className="">
            <img
              className="w-full h-64 object-fill rounded-xl"
              src="src/assets/portfolio.png"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-y-3 p-4">
            <h1 className="text-2xl text-white">My PortFolio</h1>
            <p className="text-[#777]">
              This is my Portfolio which have my educational & working details{" "}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="border p-2 bg-white rounded-xl">ReactJS</div>
              <div className="border p-2 bg-white rounded-xl">Tailwind</div>
            </div>
            <div className="flex justify-between  ">
              <div className=" p-2 bg-white rounded-xl bg-yellow-500">
                <a
                  href="https://github.com/Saurabhchaudhary9799/My-Portfolio"
                  target="_blank"
                >
                  {" "}
                  Github Repo
                </a>
              </div>

              <div className=" p-2 bg-white rounded-xl bg-blue-500">
                Live View
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontendProjects;
