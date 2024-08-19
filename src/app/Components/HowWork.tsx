'use client'
import React, { useState } from 'react';
import { ChevronsUpDown } from 'lucide-react';
function HowWork() {
  const [content, setContent] = useState('Fill out our simple form with details about your assignment or project.'); // State to hold the content

  const handleClick = (text: any) => {
    setContent(text); // Update the content based on the clicked item
  };

  return (
    <div className='min-h-screen bg-bg w-full pb-8 max-w-full'>
      <div className='sm:text-6xl  flex justify-center text-3xl font-bold text-white pb-8 pt-8'>
        How It Works
      </div>
      <div className='w-full min-h-full ml-8 mr-8'>
        {/* This div will be hidden on small screens */}
        <div className='hidden sm:block w-full min-h-full'>
          <div className='grid sm:grid-cols-[25%,1fr] grid-row gap-y-6 rounded-md h-full mr-24 gap-4'>
            {/* Sidebar with clickable elements */}
            <div className='bg-white h-full sm:ml-10 ml-0 rounded-md'>
              <ul className='gap-5 text-bg flex flex-wrap justify-between'>
                <li className='w-1/3 sm:w-full'>
                  <button
                    className="block mb-2 p-2 bg-transparent text-left sm:text-3xl text-xs w-full border-b-2 border-bg text-bg rounded"
                    onClick={() => handleClick('Fill out our simple form with details about your assignment or project.')}
                  >
                    1) Submit Your Request
                  </button>
                </li>
                <li className='w-1/3 sm:w-full'>
                  <button
                    className="block mb-2 p-2 bg-transparent text-left sm:text-3xl text-xs w-full border-b-2 border-bg text-bg rounded"
                    onClick={() => handleClick('Get a personalized quote based on your specific requirements.')}
                  >
                    2) Receive a Quote
                  </button>
                </li>
                <li className='w-1/3 sm:w-full'>
                  <button
                    className="block mb-2 p-2 bg-transparent text-left sm:text-3xl text-xs w-full border-b-2 border-bg text-bg rounded"
                    onClick={() => handleClick('Work with our writers and provide necessary information and feedback.')}
                  >
                    3) Collaborate with Experts
                  </button>
                </li>
                <li className='w-1/2 sm:w-full'>
                  <button
                    className="block mb-2 p-2 bg-transparent text-left sm:text-3xl text-xs w-full border-b-2 border-bg text-bg rounded"
                    onClick={() => handleClick('Receive your completed assignment on time and review it.')}
                  >
                    4) Get Your Assignment
                  </button>
                </li>
                <li className='w-1/2 sm:w-full'>
                  <button
                    className="block mb-2 p-2 bg-transparent text-left sm:text-3xl text-xs w-full border-b-2 border-bg text-bg rounded"
                    onClick={() => handleClick('If needed, request revisions to ensure the final product meets your expectations.')}
                  >
                    5) Request Revisions
                  </button>
                </li>
              </ul>
            </div>

            {/* Main content area */}
            <div className='relative flex justify-center h-full items-center p-4 rounded-md sm:mr-8 bg-[url("/cover-image.jpg")] bg-cover bg-center'>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
                <div className="p-4 rounded">
                  <p className="text-white text-xl text-center">{content}</p> 
                </div>
                <button className='bg-bg text-white flex items-center p-2 rounded-md mt-4'>Get In Touch</button>
              </div>
            </div>
          </div>
        </div>
      </div>
     { /*For Mobile Screen*/}
      <div className="min-h-full block sm:hidden pr-4 pl-4">
  <div className='grid grid-row w-fit gap-y-6  rounded-tl-md rounded-br-md    bg-white ml-4 mr-4  bg-[url("/mobile.jpg")] bg-cover bg-center '>
    <div className='flex border-b border-bg pl-2 pt-2 pb-2 pr-2'><div className='pr-8 font-semibold'>1) Submit Your Request </div>  </div>
    <p className='pl-2'>Fill out our simple form with details about your assignment or project.</p>
   </div>
   <div className='grid mt-4 grid-row w-fit gap-y-6  rounded-tr-md rounded-bl-md bg-[url("/mobile.jpg")] bg-cover bg-center   bg-white ml-4 mr-4 '>
    <div className='flex border-b border-bg pl-2 pt-2 pb-2 pr-2'><div className='pr-8 font-semibold'>2) Receive a Quote </div>  </div>
    <p className='pl-2'>Get a personalized quote based on your specific requirements.</p>
   </div>
   <div className='grid grid-row w-fit gap-y-6  rounded-tl-md rounded-br-md mt-4 bg-[url("/mobile.jpg")] bg-cover bg-center   bg-white ml-4 mr-4 '>
    <div className='flex border-b border-bg pl-2 pt-2 pb-2 pr-2'><div className='pr-8 font-semibold'>3) Collaborate with Experts </div>  </div>
    <p className='pl-2'>Work with our writers and provide necessary information and feedback.</p>
   </div>
   <div className='grid mt-4 grid-row w-fit gap-y-6  rounded-tr-md rounded-bl-md bg-[url("/mobile.jpg")] bg-cover bg-center   bg-white ml-4 mr-4 '>
    <div className='flex border-b border-bg pl-2 pt-2 pb-2 pr-2'><div className='pr-8 font-semibold'>4) Get Your Assignment </div>  </div>
    <p className='pl-2'>Receive your completed assignment on time and review it.</p>
   </div>
   <div className='grid grid-row w-fit gap-y-6  rounded-tl-md rounded-br-md mt-4 bg-[url("/mobile.jpg")] bg-cover bg-center   bg-white ml-4 mr-4 '>
    <div className='flex border-b border-bg pl-2 pt-2 pb-2 pr-2'><div className='pr-8 font-semibold'>5) Request Revisions </div>  </div>
    <p className='pl-2'>If needed, request revisions to ensure the final product meets your expectations.</p>
   </div>
  </div>
</div>

    
  );
}

export default HowWork;
