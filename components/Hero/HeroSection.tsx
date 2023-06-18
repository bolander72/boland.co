'use client'

import LogoMarquee from "./LogoMarquee";
import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useNavigationContext } from "@/contexts/NavigationContext";

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
      <div className='space-y-2 h-screen pt-48'>
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

         <div className='text-sm pt-6 text-easyWhite text-center'>
            <span>Better results, <span className="italic">guaranteed</span>.</span>
         </div>
         <section className="mt-12 text-center">
            <div className="items-center absolute bottom-0 left-0">
               <div className="mt-20 lg:mt-28">
                  <LogoMarquee />
               </div>
            </div>
         </section>
      </div>
   )
}