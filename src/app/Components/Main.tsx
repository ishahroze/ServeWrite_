import React from 'react';
import { Contact } from 'lucide-react';
function Main() {
  return (
    <div className='relative sm:min-h-screen min-h-fit sm:bg-[url("/bg-2.png")] bg-bg bg-cover bg-center drop-shadow-xl shadow-white flex flex-col pb-10 rounded-b-md'>
      {/* Overlay with 50% opacity */}
      <div className='absolute inset-0 bg-gradient-to-b from-bg to-black opacity-0 z-10'></div>

      {/* Text content */}
      <div className='sm:text-6xl relative z-10  sm:flex justify-center text-2xl font-bold justify-items-start text-white pb-8 pt-8 hidden'>
         Welcome to ServeWrite
      </div>
      <div className='sm:hidden pb-8 text-3xl flex-col text-center mt-10 text-white font-bold flex justify-center items-center pl-8 pr-8'>
To Serve You Assigment and Writing Services
<div className=' text-xs pt-6'>EXPERIENCED | ORIGINAL | TIMELY</div>
<button className='bg-white flex flex-row text-bg text-xl p-2 rounded-md mt-14 shadow-black shadow-md'>Contact Us <Contact className='ml-1'/></button>
      </div>

      <div className='relative z-20  grid grid-col-2 text-center   '>
        {/* <div className='col-span-1 text-xl font-light sm:leading-6 pt-1 leading-8 pl-4 pr-4 pb-8 text-white sm:pt-8'>At Serve Write, we’re committed to supporting your academic and professional success with our expert assignment services.
        From essays and research papers to theses and custom projects, our dedicated team ensures high-quality, timely, and original work tailored to your needs.</div> */}
        <div className='col-span-1'></div>
        
      </div>
    </div>
  );
}

export default Main;
