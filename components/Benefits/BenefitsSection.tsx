'use client'

import { useEffect, useRef } from 'react'
import { TbBrandTrello } from 'react-icons/tb';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { useNavigationContext } from '@/contexts/NavigationContext'

const benefits = [
   {
      name: 'Project Board',
      description:
         'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
      icon: TbBrandTrello,
   },
   {
      name: 'SSL certificates',
      description:
         'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
      icon: TbBrandTrello,
   },
   {
      name: 'Simple queues',
      description:
         'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
      icon: TbBrandTrello,
   },
   {
      name: 'Advanced security',
      description:
         'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
      icon: TbBrandTrello,
   },
]

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

export default function BenefitsSection() {
   const ref = useRef<HTMLDivElement | null>(null)
   const entry = useIntersectionObserver(ref, {})
   const isVisible = !!entry?.isIntersecting
   const { setVisibleSection } = useNavigationContext()

   useEffect(() => {
      if (isVisible) {
         setVisibleSection('#method')
      }
   }, [isVisible, setVisibleSection])

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
               <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                  <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                     {benefits.map((item) => (
                        <div key={item.name} className="relative pl-16">
                           <dt className="text-base font-semibold leading-7 text-gray-900">
                              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                 <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                              </div>
                              {item.name}
                           </dt>
                           <dd className="mt-2 text-base leading-7 text-gray-600">{item.description}</dd>
                        </div>
                     ))}
                  </dl>
               </div>
            </div>
         </div>
      </div>
   )
}