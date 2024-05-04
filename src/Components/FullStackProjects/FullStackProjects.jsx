import React from "react";
import { Link } from "react-router-dom";

const FullStackProjects = () => {
  return (
    <section className="full-stack-projects">
      <div className="container grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border  rounded-xl  bg-[#171f38]">
          <div className="">
            <img
              className="w-full h-64 object-cover rounded-xl"
              src="https://res.cloudinary.com/dltk6m7c5/image/upload/v1714809933/cpxxfilvptnz2y6ss68z.png"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-y-3 p-4">
            <h1 className="text-2xl text-white">Chatify</h1>
            <p className="text-[#777]">
              This project is built based on Javascript & socket.io . With the
              help of this people can communicate with each other .
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="border p-2 bg-white rounded-xl">React.JS</div>
              <div className="border p-2 bg-white rounded-xl">Socket.io</div>
              <div className="border p-2 bg-white rounded-xl">MongoDB</div>
              <div className="border p-2 bg-white rounded-xl">NodeJS</div>
            </div>
            <div className="flex justify-between  ">
                
            <div className=" p-2 bg-white rounded-xl bg-yellow-500">
              <a href="https://github.com/Saurabhchaudhary9799/mern-chat-app" target="_blank"> Github Repo</a> 
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
              className="w-full h-64 object-cover rounded-xl"
              src="https://res.cloudinary.com/dltk6m7c5/image/upload/v1714809933/kjoessk3qraa4ofpwvoi.png"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-y-3 p-4">
            <h1 className="text-2xl text-white">Natours</h1>
            <p className="text-[#777]">
               In this project , people can book their favorite tours and enjoy their life .
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="border p-2 bg-white rounded-xl">Tailwind</div>
              <div className="border p-2 bg-white rounded-xl">ReactJS</div>
              <div className="border p-2 bg-white rounded-xl">Stripe</div>
              <div className="border p-2 bg-white rounded-xl">MongoDB</div>
              <div className="border p-2 bg-white rounded-xl">Express.JS</div>
            </div>
            <div className="flex justify-between  ">
            <div className=" p-2 bg-white rounded-xl bg-yellow-500">
               <a href="https://github.com/Saurabhchaudhary9799/TourWebsite" target="_blank">Github Repo</a> 
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
              className="w-full h-64 object-cover rounded-xl"
              src="https://images.pexels.com/photos/693859/pexels-photo-693859.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-y-3 p-4">
            <h1 className="text-2xl text-white">Expense Tracker</h1>
            <p className="text-[#777]">
              This project is basically built for money management . It tracks your expenses and helps in managing your income & savings
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="border p-2 bg-white rounded-xl">React.JS</div>
              <div className="border p-2 bg-white rounded-xl">Javascript</div>
              <div className="border p-2 bg-white rounded-xl">NodeJS</div>
            </div>
            <div className="flex justify-between  ">
            <div className=" p-2 bg-white rounded-xl bg-yellow-500">
               <a href="https://github.com/Saurabhchaudhary9799/expense-tracker" target="_blank">Github Repo</a> 
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
              className="w-full h-64 object-cover rounded-xl"
              src="https://images.pexels.com/photos/693859/pexels-photo-693859.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-y-3 p-4">
            <h1 className="text-2xl text-white">Blog Application</h1>
            <p className="text-[#777]">
               This project keeps your blogs & daily notes which you have created .
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="border p-2 bg-white rounded-xl">MaterialUI</div>
              <div className="border p-2 bg-white rounded-xl">Javascript</div>
              <div className="border p-2 bg-white rounded-xl">MongoDB</div>
            </div>
            <div className="flex justify-between  ">
            <div className=" p-2 bg-white rounded-xl bg-yellow-500">
                <a href="https://github.com/Saurabhchaudhary9799/BlogWebsite" target="_blank">Github Repo</a>
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

export default FullStackProjects;
