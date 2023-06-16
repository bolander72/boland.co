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
      <div className="relative flex w-screen bg-[#111111] py-6 sm:py-8 border-y border-t-easyWhite border-b-[#BE9C6F]">
         <Marquee autoFill speed={60} className="flex items-center">
            {logos.map((logo) => (
               <div className="mx-6" key={logo}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={logo} alt="hy-vee" className='max-w-24 h-6 sm:h-9' />
               </div>
            ))}
         </Marquee>
      </div>
   );
};

export default LogoMarquee;