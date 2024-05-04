import React from 'react'

const ShortLearningProjects = () => {
  return (
    <section className="short-learning-projects">
         <div className="container grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
             <div className='border  rounded-xl  bg-[#171f38]'>
                <div className=''>
                    <img className='w-full h-64 object-cover rounded-xl' src="https://images.pexels.com/photos/693859/pexels-photo-693859.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>
                <div className='flex flex-col gap-y-3 p-4'>
                    <h1 className='text-2xl text-white'>Material UI Learning</h1>
                    <p className='text-[#777]'>I built this short project to learn Material UI . </p>
                    <div className="flex flex-wrap gap-4">
                        <div className='border p-2 bg-white rounded-xl'>MaterialUI</div>
                        <div className='border p-2 bg-white rounded-xl'>ReactJS</div>
                       
                    </div> 
                    <div className="flex justify-between  ">
                    <div className=" p-2 bg-white rounded-xl bg-yellow-500">
              <a href="https://github.com/Saurabhchaudhary9799/MaterialUI-project" target="_blank"> Github Repo</a> 
              </div>
             
              <div className=" p-2 bg-white rounded-xl bg-blue-500">
                Live View
              </div>
                       
                    </div> 
                </div>
             </div>
             <div className='border  rounded-xl  bg-[#171f38]'>
                <div className=''>
                    <img className='w-full h-64 object-cover rounded-xl' src="https://images.pexels.com/photos/693859/pexels-photo-693859.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>
                <div className='flex flex-col gap-y-3 p-4'>
                    <h1 className='text-2xl text-white'>Social Media Website</h1>
                    <p className='text-[#777]'>I built this short project to learn ReactJS . </p>
                    <div className="flex flex-wrap gap-4">
                        <div className='border p-2 bg-white rounded-xl'>React JS</div>
                       
                       
                    </div> 
                    <div className="flex justify-between  ">
                    <div className=" p-2 bg-white rounded-xl bg-yellow-500">
              <a href="https://github.com/Saurabhchaudhary9799/Social_media_project" target="_blank"> Github Repo</a> 
              </div>
             
              <div className=" p-2 bg-white rounded-xl bg-blue-500">
                Live View
              </div>
                       
                    </div> 
                </div>
             </div>
         </div>
    </section>
  )
}

export default ShortLearningProjects