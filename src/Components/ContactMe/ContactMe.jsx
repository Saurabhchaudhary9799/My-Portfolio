import React from 'react'
import { FaGithub, FaInstagramSquare, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const ContactMe = () => {
  return (
    <section className="contact-section px-[20px] sm:px-[120px] my-10" id='contact'>
       <div className="contact   bg-white rounded-xl p-4 flex flex-col justify-center items-center gap-y-2">
            <h1><span className='text-[#777] text-2xl mr-3'>Name:</span> Saurbh Kumar</h1>
            <h1><span className='text-[#777] text-2xl mr-3'>Mobile No:</span>8003276806</h1>
            <h1><span className='text-[#777] text-2xl mr-3'>Email:</span>Saurbhbailara@gmail.com</h1>
            <button className='bg-[#32af6f] text-white text-xl p-3 rounded-3xl ease-in-out duration-300 hover:-translate-y-[3px]'>Contact Me</button>
            <span className='text-xl'>or</span>
            <div className='p-2  '>
                <ol className='flex  gap-x-8  '>
                <li className=' ease-in-out duration-300 hover:text-[#32af6f] hover:scale-150'><a href="https://github.com/Saurabhchaudhary9799" target="_blank"><span><FaGithub/></span></a></li>
                <li className=' ease-in-out duration-300 hover:text-[#32af6f] hover:scale-150'><a href="https://www.linkedin.com/in/saurbhkumar/" target="_blank"><span><FaLinkedinIn/></span></a></li>
                <li className=' ease-in-out duration-300 hover:text-[#32af6f] hover:scale-150'><a href="https://www.instagram.com/_100_ra_bh_9799/" target="_blank"><span><FaInstagramSquare/></span></a></li>
                <li className=' ease-in-out duration-300 hover:text-[#32af6f] hover:scale-150'><a href="https://twitter.com/Saurabh_barakh" target="_blank"><span><FaXTwitter/></span></a></li>
                </ol>
            </div>
       </div>
    </section>
  )
}

export default ContactMe