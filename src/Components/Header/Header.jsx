import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";
const Header = () => {
  return (
    <div className="header-section   flex justify-around py-4">
         <div >
            <h1 className='text-white text-3xl'><span className='text-[#32af6f]'>S</span>aurbh <span className='text-[#32af6f]'>K</span>umar</h1>
         </div>
         <div className=' hidden  items-center  gap-x-4 md:flex'>
            <div >
                <ol className='flex  gap-x-10 text-[#777] p-2'>
                    <li className=' ease-in-out duration-300 hover:text-[#32af6f] hover:scale-150'><a href="#">Home</a></li>
                    <li className=' ease-in-out duration-300 hover:text-[#32af6f] hover:scale-150'><a href="#">About</a></li>
                    <li className=' ease-in-out duration-300 hover:text-[#32af6f] hover:scale-150'><a href="#">Skills</a></li>
                    <li className=' ease-in-out duration-300 hover:text-[#32af6f] hover:scale-150'><a href="#">Project</a></li>
                    <li className=' ease-in-out duration-300 hover:text-[#32af6f] hover:scale-150'><a href="#">Contact</a></li>
                </ol>
            </div>
            <div className='p-2  border-l-2'>
                <ol className='flex  gap-x-8 text-white '>
                <li className=' ease-in-out duration-300 hover:text-[#32af6f] hover:scale-150'><a href="#"><span><FaGithub/></span></a></li>
                <li className=' ease-in-out duration-300 hover:text-[#32af6f] hover:scale-150'><a href="#"><span><FaLinkedinIn/></span></a></li>
                <li className=' ease-in-out duration-300 hover:text-[#32af6f] hover:scale-150'><a href="#"><span><FaInstagramSquare/></span></a></li>
                <li className=' ease-in-out duration-300 hover:text-[#32af6f] hover:scale-150'><a href="#"><span><FaXTwitter/></span></a></li>
                </ol>
            </div>
         </div>
         <div className=' flex border  justify-center items-center p-2 md:hidden'>
             <span className='text-3xl text-white'><RiMenu2Line/></span>
         </div>
    </div>
  )
}

export default Header