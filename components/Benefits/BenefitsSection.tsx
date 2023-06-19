'use client'

import { useEffect, useRef } from 'react'
import { TbArrowUp, TbArrowUpRight, TbBolt, TbBrain, TbBrandTrello, TbCheck, TbDeviceLaptop, TbHeartHandshake, TbRefreshDot } from 'react-icons/tb';

import { useIntersectionObserver } from 'usehooks-ts'
import { useNavigationContext } from '@/contexts/NavigationContext'
import classNames from 'classnames';

const benefits = [
   {
      name: 'Fast Delivery',
      description: (
         <ul>
            <li>- Quick task turnaround</li>
            <li>- Seamless hand-offs</li>
            <li>- Timely notifications</li>
         </ul>
      ),
      icon: TbBolt,
      color: 'text-yellow-400'
   },
   {
      name: 'Top-Notch Quality',
      description: (
         <ul>
            <li>- DRY, extensible code</li>
            <li>- Reusable components</li>
            <li>- Custom theming / brands</li>
         </ul>
      ),
      icon: TbBrain,
      color: 'text-pink-300'
   },
   {
      name: 'Project Board',
      description: (
         <ul>
            <li>- Unlimited requests / tasks</li>
            <li>- Unlimited team members</li>
            <li>- Asset / image uploads</li>
         </ul>
      ),
      icon: TbBrandTrello,
      cta: 'Trello Guide',
      href: 'https://trello.com/guide',
      color: 'text-blue-600'
   },
   {
      name: 'Modern Tech',
      description: (
         <ul>
            <li>- Serverless deployments</li>
            <li>- Demoable preview URLs</li>
            <li>- SSR, CSR, SSG, & ISR</li>
         </ul>
      ),
      icon: TbDeviceLaptop,
      cta: 'Rendering Guide',
      href: "https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration",
      color: 'text-gray-400'
   },
   {
      name: 'Fixed Rates',
      description: (
         <ul>
            <li>- Automated invoices</li>
            <li>- Predictable payments</li>
            <li>- Multiple payment methods</li>
         </ul>
      ),
      icon: TbRefreshDot,
      color: 'text-green-500'
   },
   {
      name: 'Yours, Truly',
      description: (
         <ul>
            <li>- Ownership of end-product</li>
            <li>- No studio dependencies</li>
            <li>- Easily transferable</li>
         </ul>
      ),
      icon: TbHeartHandshake,
      cta: 'Terms of Use',
      href: "/terms",
      color: 'text-red-500'
   },
]

export default function BenefitsSection() {
   const ref = useRef<HTMLDivElement | null>(null)
   const entry = useIntersectionObserver(ref, {})
   const isVisible = !!entry?.isIntersecting
   const { setVisibleSection } = useNavigationContext()

   useEffect(() => {
      if (isVisible) {
         setVisibleSection('#benefits')
      }
   }, [isVisible, setVisibleSection])

   return (
      <div className='space-y-2 px-6 mt-24'>
         <div className='flex flex-col items-center'>
            <div ref={ref} className='flex-col'>
               <h1 className='text-5xl md:text-6xl text-easyBlack font-bold'>Membership</h1>
               <h1 className='text-5xl md:text-6xl text-easyBlack font-bold'>
                  benefits & perks
               </h1>
            </div>
         </div>

         <div className='flex flex-col items-center'>
            <div className='tracking-normal text-left'>
               <div className='pt-10 px-6 text-wrap text-xl sm:text-2xl text-easyBlack'>
                  Immediate benefits for your team and business, plus new offerings and perks as they become available.
               </div>
            </div>
         </div>
         <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-2xl lg:max-w-none">
               <dl className="col-span- grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-6 text-easyBlack sm:grid-cols-2 lg:gap-y-16">
                  {benefits.map((item) => (
                     <div key={item.name} className="relative pl-9">
                        <dt className="font-semibold text-easyBlack">
                           <item.icon className={classNames(item.color, "h-12 w-12 mb-2")} aria-hidden="true" />
                           <span className="text-xl">{item.name}</span>
                        </dt>
                        <dd className="mt-2 text-lg">{item.description}</dd>
                        {item?.cta && (
                           <dd className="mt-3">
                              <a
                                 href={item.href}
                                 className="text-blue-600 hover:text-blue-500"
                                 target="_blank"
                                 rel="noopener noreferrer"
                              >
                                 {item.cta} <TbArrowUpRight className="inline-block h-4 w-4" aria-hidden="true" />
                              </a>
                           </dd>
                        )}
                     </div>
                  ))}
               </dl>
            </div>
         </div>
      </div>
   )
}