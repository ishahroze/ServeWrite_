import React from 'react'
import { Alert } from "flowbite-react";
import Image from 'next/image';
import Link from 'next/link';
function WhyUs() {
  return (
   < div className='min-h-screen bg-bg min-w-fit'>
  <div className='sm:text-6xl   flex justify-center text-3xl font-bold justify-items-start text-white pb-8 pt-8'>Why to Choose Us?</div>
  <div className="grid grid-cols-1 md:grid-cols-3 sm:pl-12 sm:pr-12 md:gap-y-24 gap-10 p-4">
   <div className=' bg-white rounded-md flex col-span-1 sm:h-60 min-h-36 p-8 '>
 <div className="flex flex-col">
  <div className="flex items-center">
    <div className="flex items-center">
      <Image src="/professional.png" alt="experience" height={100} width={100} />
      <div className="text-black sm:text-4xl text-2xl pt-0 pl-2">Experienced Professionals</div>
    </div>
  </div>
  <div className="flex-2 pt-6">
    <div className='sm:font-xs pb-4 text-black'>
    Our team consists of experts across various fields, ensuring high-quality and accurate work.</div>
  </div>
</div>

 
   </div>
   <div className=' bg-white rounded-md flex col-span-1 sm:h-60 min-h-36 p-8 '><div className="flex flex-col">
  <div className="flex items-center">
    <div className="flex items-center">
      <Image src="/delivery.png" alt="experience" height={100} width={100} />
      <div className="text-black sm:text-4xl text-2xl pt-0 pl-3">Timely<br/> Delivery</div>
    </div>
  </div>
  <div className="flex-2 pt-6">
    <div className='sm:font-xs pb-4 text-black'>
    We understand the importance of deadlines and guarantee prompt delivery of your assignments.</div>
  </div>
</div>

 </div>
 <div className=' bg-white rounded-md flex col-span-1 sm:h-60 min-h-36 p-8 '><div className="flex flex-col">
  <div className="flex items-center">
    <div className="flex items-center">
      <Image src="/ai.png" alt="experience" height={100} width={100} />
      <div className="text-black sm:text-4xl text-2xl pt-0 pl-3">AI-Free<br/> Work</div>
    </div>
  </div>
  <div className="flex-2 pt-6">
    <div className='sm:font-xs pb-4 text-black'>
    We guarantee that our work is AI-generated free, with an AI Report to verify the authenticity of your content.</div>
  </div>
</div>

 </div> <div className=' bg-white rounded-md flex col-span-1 sm:h-60 min-h-36 p-8 '><div className="flex flex-col">
  <div className="flex items-center">
    <div className="flex items-center">
      <Image src="/original.png" alt="experience" height={100} width={100} />
      <div className="text-black sm:text-4xl text-2xl pt-0 pl-3">Original<br/>  Content</div>
    </div>
  </div>
  <div className="flex-2 pt-6">
    <div className='sm:font-xs pb-4 text-black'>
    All work is 100% original, with a thorough Plagiarism Report provided.</div>
  </div>
</div>

 </div> <div className=' bg-white rounded-md flex col-span-1 sm:h-60 min-h-36 p-8 '><div className="flex flex-col">
  <div className="flex items-center">
    <div className="flex items-center">
      <Image src="/confidentia.png" alt="experience" height={100} width={100} />
      <div className="text-black sm:text-4xl text-2xl pt-0 pl-3">Confidentiality</div>
    </div>
  </div>
  <div className="flex-2 pt-6">
    <div className='sm:font-xs pb-4 text-black'>
    We maintain the highest level of security for your personal and academic information.</div>
  </div>
</div>

 </div> <div className=' bg-white rounded-md flex col-span-1 sm:h-60 min-h-36 p-8 '><div className="flex flex-col">
  <div className="flex items-center">
    <div className="flex items-center">
      <Image src="/support.png" alt="experience" height={100} width={100} />
      <div className="text-black sm:text-4xl text-2xl pt-0 pl-3">24/7<br/>Support</div>
    </div>
  </div>
  <div className="flex-2 pt-6">
    <div className='sm:font-xs pb-4 text-black'>
    Our customer service team is available around the clock to assist you with any questions or concerns.</div>
  </div>
  {/* <div className="flex-2 pt-6">
  <div className='sm:font-xs pb-4 text-black '>
  <div className="flex justify-center items-center bg-black bg-opacity-50 p-4 rounded">
    Our customer service team is available around the clock to assist you with any questions or concerns.
  </div>
</div>

  </div> */}
</div>

 </div>
  </div>
</div>
  )
}

export default WhyUs