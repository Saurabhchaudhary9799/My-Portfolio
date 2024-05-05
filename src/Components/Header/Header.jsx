import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";
import { Link } from "react-scroll";
import SideMenu from "../SideMenu/SideMenu";
const Header = () => {
  const [isOpen ,setIsOpen] = useState(false);

  const handleClose = ()=>{
    setIsOpen(false);
  }
  return (
    <div className="header-section   flex justify-around py-4">
      <div>
        <h1 className="text-white text-3xl">
          <span className="text-[#32af6f]">S</span>aurbh{" "}
          <span className="text-[#32af6f]">K</span>umar
        </h1>
      </div>
      <div className=" hidden  items-center  gap-x-4 md:flex">
        <div>
          <ol className="flex  gap-x-10 text-[#777] p-2">
            <li className=" ease-in-out duration-300 hover:text-[#32af6f] hover:scale-150">
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
            <li className=" ease-in-out duration-300 hover:text-[#32af6f] hover:scale-150">
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
            <li className=" ease-in-out duration-300 hover:text-[#32af6f] hover:scale-150">
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
            <li className=" ease-in-out duration-300 hover:text-[#32af6f] hover:scale-150">
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
            <li className=" ease-in-out duration-300 hover:text-[#32af6f] hover:scale-150">
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
        <div className="p-2  border-l-2">
          <ol className="flex  gap-x-8 text-white ">
            <li className=" ease-in-out duration-300 hover:text-[#32af6f] hover:scale-150">
              <a href="https://github.com/Saurabhchaudhary9799" target="_blank">
                <span>
                  <FaGithub />
                </span>
              </a>
            </li>
            <li className=" ease-in-out duration-300 hover:text-[#32af6f] hover:scale-150">
              <a href="https://www.linkedin.com/in/saurbhkumar/" target="_blank">
                <span>
                  <FaLinkedinIn />
                </span>
              </a>
            </li>
            <li className=" ease-in-out duration-300 hover:text-[#32af6f] hover:scale-150">
              <a href="https://www.instagram.com/_100_ra_bh_9799/" target="_blank">
                <span>
                  <FaInstagramSquare />
                </span>
              </a>
            </li>
            <li className=" ease-in-out duration-300 hover:text-[#32af6f] hover:scale-150">
              <a href="https://twitter.com/Saurabh_barakh" target="_blank">
                <span>
                  <FaXTwitter />
                </span>
              </a>
            </li>
          </ol>
        </div>
      </div>
      <div className=" flex   justify-center items-center p-2 md:hidden" onClick={()=> setIsOpen(!isOpen)}>
        <span className="text-3xl text-white">
          <RiMenu2Line />
        </span>
      </div>
      {
        isOpen && <SideMenu handleClose={handleClose}/>
      }
    </div>
  );
};

export default Header;
