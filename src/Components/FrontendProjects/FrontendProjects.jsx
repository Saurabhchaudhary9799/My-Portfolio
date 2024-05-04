import React from 'react'

const FrontendProjects = () => {
  return (
    <section className="frontend-projects">
    <div className="container grid grid-cols-3 gap-4">
        <div className='border  rounded-xl  bg-[#171f38]'>
           <div className='h-3/6'>
               <img className='w-full h-full object-cover rounded-xl' src="https://images.pexels.com/photos/693859/pexels-photo-693859.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
           </div>
           <div className='flex flex-col gap-y-3 p-4'>
               <h1 className='text-2xl text-white'>Project-Name</h1>
               <p className='text-[#777]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, aperiam!</p>
               <div className="flex flex-wrap gap-4">
                   <div className='border p-2 bg-white rounded-xl'>afhgjkf</div>
                   <div className='border p-2 bg-white rounded-xl'>Tag2</div>
                   <div className='border p-2 bg-white rounded-xl'>Tag3</div>
               </div> 
               <div className="flex justify-between  ">
                   <div className='border p-2 bg-white rounded-xl'>Github Repo</div>
                   <div className='border p-2 bg-white rounded-xl'>Live View</div>
                  
               </div> 
           </div>
        </div>
        <div className='border  rounded-xl  bg-[#171f38]'>
           <div className='h-3/6'>
               <img className='w-full h-full object-cover rounded-xl' src="https://images.pexels.com/photos/693859/pexels-photo-693859.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
           </div>
           <div className='flex flex-col gap-y-3 p-4'>
               <h1 className='text-2xl text-white'>Project-Name</h1>
               <p className='text-[#777]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, aperiam!</p>
               <div className="flex flex-wrap gap-4">
                   <div className='border p-2 bg-white rounded-xl'>afhgjkf</div>
                   <div className='border p-2 bg-white rounded-xl'>Tag2</div>
                   <div className='border p-2 bg-white rounded-xl'>Tag3</div>
               </div> 
               <div className="flex justify-between  ">
                   <div className='border p-2 bg-white rounded-xl'>Github Repo</div>
                   <div className='border p-2 bg-white rounded-xl'>Live View</div>
                  
               </div> 
           </div>
        </div>
        
    </div>
</section>
  )
}

export default FrontendProjects