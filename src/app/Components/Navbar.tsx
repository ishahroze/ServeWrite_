'use client'
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
function Navbar() {
  const router = useRouter()
  
  return (
    <nav className='hidden  md:flex w-full justify-between bg-bg items-center p-4 text-white border-b-2 border-white'>
      <div className='flex-1'>
        {/* Add content here if needed */}
      </div>
      <ol className='flex text-xl gap-24 items-center pr-14 text-white'>
        <li className=''>Home</li>
      <Link href="/services"><li>Our Services</li></Link>  
        <li>How Do We Work</li>
        <li>About Us</li>
      </ol>
    </nav>
  );
}

export default Navbar;
