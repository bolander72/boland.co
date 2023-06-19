'use client'

import React from 'react';
import Image from 'next/image';
import Marquee from "react-fast-marquee";

const LogoMarquee = () => {
   const logos = [
      '/logos/hy-vee.svg',
      '/logos/corteva.svg',
      '/logos/flux.svg',
      '/logos/swissep.svg',
      '/logos/fastpath.svg',
      '/logos/asu.svg',
      '/logos/capgemini.svg',
   ];

   return (
      <div className="relative flex w-screen bg-[#111111] py-6 sm:py-8 border-t border-t-easyWhite" id='method'>
         <Marquee autoFill speed={60} className="flex items-center">
            {logos.map((logo) => (
               <div className="mx-6 my-2" key={logo}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={logo} alt="" className='max-w-24 h-9 lg:h-12' />
               </div>
            ))}
         </Marquee>
      </div>
   );
};

export default LogoMarquee;