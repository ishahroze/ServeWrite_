'use client'
import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail } from 'lucide-react';
function Contact() {
    const [state, handleSubmit] = useForm("xqazevnr");

  if (state.succeeded) {
    return <p>thanks</p>
  }
  return (
    <div className='bg-[url("/bg-1.png")] bg-bg bg-cover bg-center min-h-fil'><div className="sm:text-6xl pt-6 text-3xl flex justify-center text-white pb-8">Contact Us</div><div className='text-white text-2xl ml-6 mr-4 text-center sm:text-left'>Ready to elevate your academic and professional tasks? Contact Serve Write now </div> <div className='  grid ml-6 mt-12 mr-6  rounded-md sm:grid-cols-2 grid-cols-1'><div className='col-span-1 order-2   gap-7 mb-10'>
    <form onSubmit={handleSubmit} className='gap bg-bg  sm:shadow-md sm:shadow-white shadow-  border-0 min-h-24 sm:mr-8 sm:pl-6 sm:pr-4  rounded-md sm:pb-10 sm:pt-4 second pl-2 sm:ml-0 ml-4 mt-4  mr-4 sm:mb-0 mb-8 '>
      <div className='mt-5 mb-5 '>
      <div className='sm:text-4xl text-3xl underline  text-white pb-4'>Fill It</div>
        <input
          id="name"
          type="text"
          name="name"
          placeholder='Your/Company Name'
          required
          className=' text-white sm:text-xl text-xs bg-transparent rounded-md border-b-2 max-w-full min-w-full '
        />
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
        />
      </div>
      <div>
      <input
          id="Subject"
          type="text"
          name="name"
          placeholder='Subject'
          required
          className=' text-white sm:text-xl text-xs sm:mt-10 bg-transparent rounded-md border-b-2   max-w-full min-w-full'
        />
      </div>
      <div>
        
        <input
          id="email"
          type="email"
          name="email"
          placeholder='Enter Your Email Adress'
            className=' text-white sm:text-xl text-xs sm:mt-10 bg-transparent rounded-md border-b-2 mt-4  max-w-full min-w-full'
          required
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </div>
      <div>
        
        <textarea
          id="message"
          name="message"
          placeholder='Write Your Message'
          required
            className=' text-white sm:text-xl text-xs sm:mt-10 mt-4 pb-0 bg-transparent rounded-md border-b-2 align-baseline  max-w-full min-w-full'
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </div>
      <button type="submit" className='bg-white text-bg sm:text-xl text-xs mt-2 rounded-md p-1 '  disabled={state.submitting} >
        Send Message
      </button>
      <div className='sm:hidden flex mt-4  '>GMAIL:servewriteinfo@gmail.com</div>
    </form></div><div className='hidden sm:order-1 ml-6   col-span-1 sm:flex flex-col gap-20  text-white mt-16'>
       <div className='bg-bg border-white border-opacity-40 border h-24 text-4xl text-center items-center flex flex-row pl-4 text-black rounded-tr-md rounded-br-md' ><Image src={"/gmail.png"} alt='gmail' width={50} height={50} className='mr-4'/>  servewriteinfo@gmail.com</div>
       <div className='bg-white h-24 text-bg rounded-tr-full rounded-br-full' ></div>
       <div className=' h-24 text-4xl text-center items-center justify-center pl-8 pr-8 flex flex-row  text-black rounded-tr-full rounded-br-full' ><Image src={"/linkedin.png"} alt='gmail' width={50} height={50} className='mr-4'/><Image src={"/instagram.png"} alt='gmail' width={50} height={50} className='mr-4'/><Image src={"/facebook.png"} alt='gmail' width={50} height={50} className='mr-4'/></div>
        </div></div></div>
  )
}

export default Contact