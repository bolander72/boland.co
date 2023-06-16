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
      <div className="relative flex w-screen bg-white py-16 border border-double border-darkGray">
         <Marquee speed={60} className="flex items-center">
            {logos.map((logo) => (
               <div className="mx-8" key={logo}>
                  <img src={logo} alt="hy-vee" className='max-w-24 h-12' />
               </div>
            ))}
         </Marquee>
      </div>
   );
};

export default LogoMarquee;