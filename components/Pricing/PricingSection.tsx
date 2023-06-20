'use client'

import { useEffect, useRef } from 'react'
import { TbArrowUp, TbArrowUpRight, TbBolt, TbBrain, TbBrandTrello, TbCheck, TbCheckbox, TbDeviceLaptop, TbHeartHandshake, TbRefreshDot } from 'react-icons/tb';

import { useIntersectionObserver } from 'usehooks-ts'
import { useNavigationContext } from '@/contexts/NavigationContext'
import classNames from 'classnames';
import Link from 'next/link';

const tiers = [
   {
      name: 'Monthly',
      id: 'tier-monthly',
      href: '#',
      price: "$15,495/m",
      priceHint: "Paid monthly",
      description: (
         <>
            <div>No minimum commitment.</div>
            <div>Pause or cancel anytime.</div>
         </>
      ),
      features: [
         'One task at a time',
         'Unlimited users',
         'Priority support',
         'Hosted preview URLs',
         'Custom themes / branding',
         'Pause or cancel anytime'
      ],
      mostPopular: true,
   },
   {
      name: 'Quarterly',
      id: 'tier-quarterly',
      href: '#',
      price: "$14,995/m",
      priceHint: "Paid quarterly",
      description: (
         <>
            <div>Save $500 per month.</div>
            <div>Paid once every 3 months.</div>
         </>

      ),
      features: [
         'One task at a time',
         'Unlimited users',
         'Priority support',
         'Hosted preview URLs',
         'Custom themes / branding',
      ],
      mostPopular: false,
   },
   {
      name: 'Yearly',
      id: 'tier-yearly',
      href: '#',
      price: "$14,495/m",
      priceHint: "Paid yearly",
      description: (
         <>
            <div>Save $1,000 per month.</div>
            <div>Paid once every 12 months.</div>
         </>
      ),
      features: [
         'One task at a time',
         'Unlimited users',
         'Priority support',
         'Hosted preview URLs',
         'Custom themes / branding',
      ],
      mostPopular: false,
   },
]

export default function PricingSection() {
   const ref = useRef<HTMLDivElement | null>(null)
   const entry = useIntersectionObserver(ref, {})
   const isVisible = !!entry?.isIntersecting
   const { setVisibleSection } = useNavigationContext()

   useEffect(() => {
      if (isVisible) {
         setVisibleSection('#pricing')
      }
   }, [isVisible, setVisibleSection])

   return (
      <div className='space-y-2 px-6 mt-24'>
         <div className='flex flex-col items-center'>
            <div ref={ref} className='flex-col'>
               <h1 className='text-5xl md:text-6xl font-bold bg-gradient-to-l bg-clip-text bg-300% text-transparent from-transparent to-easyBlack via-easyWhite animate-gradient-x duration-9000'>Not-so-secret</h1>
               <h1 className='text-5xl md:text-6xl text-easyBlack font-bold'>
                  pricing + plans
               </h1>
            </div>
         </div>

         <div className='flex flex-col items-center'>
            <div className='tracking-normal text-left'>
               <div className='pt-10 px-6 text-wrap text-xl sm:text-2xl text-easyBlack'>
                  Choose a plan that fits your needs.
               </div>
            </div>
         </div>
         <div className="py-24 sm:py-32">
            <div className="isolate mx-auto grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
               {tiers.map((item) => (
                  <div
                     key={item.id}
                     className={classNames(
                        item.mostPopular ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-200',
                        'rounded-2xl xl:p-10 bg-darkGray p-8 shadow-lg hover:shadow-2xl transition duration-200 ring-1 ring-slate-900/10'
                     )}
                  >
                     <div className="flex items-center justify-between gap-x-4">
                        <h3
                           id={item.id}
                           className="text-easyWhite text-2xl font-medium"
                        >
                           {item.name}
                        </h3>
                        {item.mostPopular ? (
                           <p className="rounded-full bg-blue-300/10 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-300 animate-pulse">
                              Most popular
                           </p>
                        ) : null}
                     </div>
                     <div className="mt-4 text-sm leading-6 text-easyWhite/90">{item.description}</div>
                     <div className="my-6 flex flex-col items-baseline gap-x-1">
                        {/* <span className="text-4xl font-bold tracking-tight text-gray-900">{item.price[frequency.value]}</span> */}
                        <div className="text-2xl font-semibold leading-6 text-easyWhite">{item.price}</div>
                        <div className="text-xs leading-6 font-light text-gray-300 mt-2">{item.priceHint}</div>
                     </div>
                     <Link
                        href={item.href}
                        aria-describedby={item.id}
                        className="rounded-2xl text-lg bg-amazonOrange px-4 py-4 font-semibold text-daryGray flex justify-center transition duration-200 shadow-xl hover:shadow-2xl shadow-amazonOrange/10 hover:shadow-amazonOrange/20"
                     >
                        Get Started
                     </Link>
                     <Link href="https://cal.com/bolandco" target="_blank" className="my-4 flex justify-center items-center space-x-1 text-blue-600 hover:text-blue-500 text-sm">
                        <span>Book a call</span>
                        <TbArrowUpRight className="inline-block h-4 w-4" aria-hidden="true" />
                     </Link>
                     <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
                        {item.features.map((feature) => (
                           <li key={feature} className="flex gap-x-3">
                              <TbCheckbox className="h-6 w-5 flex-none text-neonGreen" aria-hidden="true" />
                              <span className="text-easyWhite/90">{feature}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>
            <div className="mt-12 max-w-md flex flex-col self-center justify-center rounded-2xl p-8 ring-1 ring-slate-900/10 sm:p-10 bg-darkGray">
               <div>
                  <h3 className="text-2xl font-medium text-easyWhite">A la carte</h3>
                  <div className="mt-1 text-sm text-easyWhite/90">
                     <div>One-off task or quick integration?</div>
                     <div className="mt-1">We can help.</div>
                  </div>
               </div>
               <div />
               <div className="space-y-4 mt-8">
                  <div className="text-2xl font-semibold leading-6 text-easyWhite">$2,495/d</div>
                  <Link
                     href="#"
                     className="rounded-2xl text-lg bg-amazonOrange px-4 py-4 font-semibold text-daryGray flex justify-center transition duration-200 shadow-xl hover:shadow-2xl shadow-amazonOrange/10 hover:shadow-amazonOrange/20"
                  >
                     Get Started
                  </Link>
                  <Link href="https://cal.com/bolandco" target="_blank" className="my-4 flex justify-center items-center space-x-1 text-blue-600 hover:text-blue-500 text-sm">
                     <span>Book a call</span>
                     <TbArrowUpRight className="inline-block h-4 w-4" aria-hidden="true" />
                  </Link>
               </div>
            </div>
         </div>
      </div>
   )
}