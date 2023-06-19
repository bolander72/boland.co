'use client'

import { useEffect, useRef } from 'react'

import Testimonial from '../Testimonial'
import { useIntersectionObserver, useWindowSize } from 'usehooks-ts'
import { useNavigationContext } from '@/contexts/NavigationContext'

const methods = [
   {
      name: 'Completely Async',
      description:
         'Too many meetings? We agree. We operate asynchronously to keep you in the loop without wasting your time.',
   },
   {
      name: 'Tidy & Managed',
      description: 'Manage your project board with Trello. View active, queued, and completed tasks with ease.',
   },
   {
      name: 'Open & Inclusive',
      description: 'The whole team is welcome. Anyone can submit requests and track their progress.',
   },
]

export default function MethodSection() {
   const ref = useRef<HTMLDivElement | null>(null)
   const entry = useIntersectionObserver(ref, {})
   const isVisible = !!entry?.isIntersecting
   const { setVisibleSection } = useNavigationContext()

   useEffect(() => {
      if (isVisible) {
         setVisibleSection('#method')
      }
   }, [entry?.intersectionRatio, isVisible, setVisibleSection])

   return (
      <div className='space-y-2 px-6 mt-24'>
         <div className='flex flex-col items-center'>
            {/* <div className='flex-col'>
               <h1 className='text-4xl sm:text-5xl md:text-6xl text-easyBlack font-bold'>All the time </h1>
               <h1 className='text-4xl sm:text-5xl md:text-6xl text-easyBlack font-bold'>
                  it&apos;s getting better.
               </h1>
            </div> */}
            <div ref={ref} className='flex-col'>
               <h1 className='text-5xl md:text-6xl text-easyBlack font-bold'>It&apos;s better,</h1>
               <h1 className='text-5xl md:text-6xl text-easyBlack font-bold'>
                  <span className="underline underline-offset-8 decoration-blue-300">simply</span> better
               </h1>
            </div>
         </div>

         <div className='flex flex-col items-center'>
            <div className='tracking-normal text-left'>
               <div className='pt-10 px-10 text-wrap text-xl sm:text-2xl text-easyBlack'>
                  We replace unreliable freelancers and expensive agencies with a flat monthly fee, building products you&apos;re going to love.
               </div>
               {/* <div className='text-lg sm:text-2xl text-easyBlack'>No more dreaded "syncs".</div> */}
            </div>
         </div>
         <div className="py-24 sm:py-32">
            <div className="">
               <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                  <div className="lg:ml-auto lg:pl-4">
                     <div className="lg:max-w-lg">
                        <dl className="max-w-xl space-y-12 text-base leading-6 text-easyBlack lg:max-w-none">
                           {methods.map((item) => (
                              <div key={item.name} className="relative">
                                 <dt className="font-semibold text-xl block mb-3">
                                    {/* <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" /> */}
                                    {item.name}
                                 </dt>{' '}
                                 <dd className="inline">{item.description}</dd>
                              </div>
                           ))}
                        </dl>
                     </div>
                  </div>
                  <div className="flex items-start justify-end lg:order-first">
                     <Testimonial
                        quote="Mira’s teaching style is second to none. Everything was easy to follow every step of the way."
                        name="John Doe"
                        title="CEO, Acme"
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}