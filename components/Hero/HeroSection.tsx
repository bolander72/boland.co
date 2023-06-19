'use client'

import LogoMarquee from "./LogoMarquee";
import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import { useNavigationContext } from "@/contexts/NavigationContext";
import Link from "next/link";
import ProjectMarquee from "./ProjectMarquee";

export default function HeroSection() {
   const ref = useRef<HTMLDivElement | null>(null)
   const entry = useIntersectionObserver(ref, {})
   const isVisible = !!entry?.isIntersecting
   const { setVisibleSection } = useNavigationContext()

   // const words = [
   //    '(d)app',
   //    'campaign',
   //    'demo',
   //    'event',
   //    'feature',
   //    'product',
   //    'project',
   //    'website'
   // ]

   useEffect(() => {
      if (isVisible) {
         setVisibleSection('')
      }
   }, [isVisible, setVisibleSection])

   return (
      <div className='space-y-2 pt-48'>
         <div className='flex flex-col items-center'>
            <div ref={ref} className='flex-col'>
               <h1 className='text-5xl sm:text-6xl md:text-7xl text-easyWhite font-bold'>A web studio</h1>
               <h1 className='text-4xl sm:text-5xl md:text-6xl text-easyWhite font-bold'>for your next
                  <div className='mt-1'>
                     <span className='bg-gradient-to-r bg-clip-text bg-300% text-transparent from-blue-400 to-orange-500 via-purple-500 animate-gradient-x'>
                        {/* {words[Math.floor(Math.random() * words.length)]} */}
                        project
                     </span>.
                  </div>
               </h1>
            </div>
         </div>

         <div className='tracking-normal text-center'>
            <div className='pt-16 text-lg sm:text-2xl text-easyWhite'>
            <span className="hidden md:inline-block">
               Flexible&nbsp;
            </span>
            <span className="uppercase md:normal-case">w</span>eb development subscriptions
            </div>
            <div className='pt-0 text-md sm:text-xl text-blue-300'>Perfect for fixed timelines and budgets</div>
         </div>

         <div className='text-sm pt-6 text-easyWhite text-center flex flex-col justify-center items-center'>
            <div className="mb-8">
               <Link
                  href="#pricing"
                  className="rounded-2xl text-lg bg-amazonYellow px-16 py-4 font-semibold text-easyBlack flex justify-center transition duration-200 shadow-xl hover:shadow-2xl shadow-amazonYellow/10 hover:shadow-amazonYellow/20"
               >
                  View Plans
               </Link>
            </div>
            <span>Better results, <span className="italic">guaranteed</span>.</span>
         </div>
         <section className="mt-12 text-center">
            <div className="items-center">
               <div className="mt-20 lg:mt-28">
                  <div className="flex justify-center text-2xl font-semibold text-easyWhite bg-red-600 rounded-2xl w-48 p-2 mx-6 hadow-xl hover:shadow-2xl shadow-red-600/10 hover:shadow-red-600/20">
                     <span className="animate-pulse">LIVE</span>
                     <span className="text-easyWhite text-sm flex items-center ml-2">projects</span>
                  </div>
                  <ProjectMarquee />
               </div>
            </div>
         </section>
         <section className="mt-12 text-center">
            <div className="items-center">
               <div className="mt-12 lg:mt-16">
                  <LogoMarquee />
               </div>
            </div>
         </section>
      </div>
   )
}