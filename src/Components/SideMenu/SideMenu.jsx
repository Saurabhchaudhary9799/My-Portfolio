import React from 'react'
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-scroll';
const SideMenu = ({handleClose}) => {
  return (
    <section className="side-menu fixed top-0 right-0 bg-white h-[100vh] w-[200px] z-20 " onClick={handleClose}>
         <div className='flex justify-center gap-x-5 p-2 items-center'>
             <h1>Portfolio</h1>
             <span onClick={handleClose}><RxCross1/></span>
         </div>
         <div>
         <ol className=" flex flex-col gap-y-5 text-[#777] p-2">
            <li className=" text-center ease-in-out duration-300 hover:text-[#32af6f] " >
            <Link
                activeClass="active"
                to="home"
               
                smooth={true}
               
                offset={-50}
                duration={300}
                
              >
                Home
              </Link>
            </li>
            <li className=" text-center ease-in-out duration-300 hover:text-[#32af6f] ">
            <Link
                activeClass="active"
                to="about"
               
                smooth={true}
               
                offset={-50}
                duration={300}
                
              >
                About
              </Link>
            </li>
            <li className=" text-center ease-in-out duration-300 hover:text-[#32af6f] ">
            <Link
                activeClass="active"
                to="skills"
               
                smooth={true}
               
                offset={-50}
                duration={300}
                
              >
              Skills
              </Link>
            </li>
            <li className="text-center ease-in-out duration-300 hover:text-[#32af6f] ">
            <Link
                activeClass="active"
                to="projects"
               
                smooth={true}
               
                offset={-50}
                duration={300}
                
              >
                Projects
              </Link>
            </li>
            <li className="text-center ease-in-out duration-300 hover:text-[#32af6f] ">
              <Link
                activeClass="active"
                to="contact"
               
                smooth={true}
               
                offset={-50}
                duration={300}
                
              >
                Contact{" "}
              </Link>
            </li>
          </ol>
         </div>
          
    </section>
  )
}

export default SideMenu