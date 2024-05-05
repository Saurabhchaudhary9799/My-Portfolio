import React from "react";

const FrontendProjects = () => {
  return (
    <section className="frontend-projects">
      <div className="container grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="  rounded-xl  bg-[#171f38] ease-in-out duration-300 hover:-translate-y-[3px]">
          <div className="">
            <img
              className="w-full h-64 object-fill rounded-xl"
              src="https://res.cloudinary.com/dltk6m7c5/image/upload/v1714809964/k8wdcb8czfxediqhdah9.png"
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
              <div className=" p-2 bg-white rounded-xl bg-yellow-500 ease-in-out duration-300 hover:-translate-y-[3px]">
                <a
                  href="https://github.com/Saurabhchaudhary9799/Topic"
                  target="_blank"
                >
                  {" "}
                  Github Repo
                </a>
              </div>

              <div className=" p-2 bg-white rounded-xl bg-blue-500 ease-in-out duration-300 hover:-translate-y-[3px]">
                Live View
              </div>
            </div>
          </div>
        </div>
        <div className="  rounded-xl  bg-[#171f38] ease-in-out duration-300 hover:-translate-y-[3px]">
          <div className="">
            <img
              className="w-full h-64 object-fill rounded-xl"
              src="https://res.cloudinary.com/dltk6m7c5/image/upload/v1714809963/udunngdm1wpfm8tqqv1m.png"
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
              <div className=" p-2 bg-white rounded-xl bg-yellow-500 ease-in-out duration-300 hover:-translate-y-[3px]">
                <a
                  href="https://github.com/Saurabhchaudhary9799/My-Portfolio"
                  target="_blank"
                >
                  {" "}
                  Github Repo
                </a>
              </div>

              <div className=" p-2 bg-white rounded-xl bg-blue-500 ease-in-out duration-300 hover:-translate-y-[3px]">
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
