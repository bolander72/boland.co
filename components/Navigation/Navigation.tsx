'use client'

import { useState } from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@/components/Navigation/Popover"

const links = [
   {
      title: 'Method',
      href: '#method'
   },
   {
      title: 'Process',
      href: '#process'
   },
   {
      title: 'Benefits',
      href: '#benefits'
   },
   {
      title: 'Pricing',
      href: '#pricing'
   },
   {
      title: 'FAQs',
      href: '#faqs'
   },
]

function AnimatedLink ({ href, title }: { href: string, title: string }) {
   return (
      <a
         href={href}
         className="px-2 my-10 md:px-3 text-sm text-easyWhite/95 hover:text-blue-300 group relative antialiased focus:outline-none"
      >
         <span
            className="inline-block opacity-0 group-hover:mr-2.5 transition-all duration-300 transform translate-x-5 group-hover:opacity-100 group-hover:translate-x-0" aria-hidden="true"
         >
            [
         </span>
         {title}
         <span
            className="inline-block opacity-0 group-hover:ml-2.5 transition-all duration-300 transform -translate-x-5 group-hover:opacity-100 group-hover:translate-x-0" aria-hidden="true"
         >
            ]
         </span>
      </a>
   )
}

export default function Navigation() {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

   return (
      <div className="fixed top-5 inset-x-0 z-50 aos-init aos-animate" data-aos="fade-down" data-aos-duration="1500">
         <div className="lg:max-w-4xl mx-auto px-8">
            <div className="w-full mx-auto">
               <div className="relative flex flex-col w-full p-5 mx-auto bg-darkGray/70 border border-white/5 shadow-thick backdrop-blur-xl backdrop-filter rounded-2xl lg:px-8">
                  <div className="flex flex-row items-center justify-between lg:justify-start">
                     <Link href="/" className="text-lg font-bold text-easyWhite transition duration-500 ease-in-out transform tracking-wide lg:pr-8">
                        <div className="hover:opacity-90">Boland Co.</div>
                     </Link>
                     <nav
                        className="flex-col flex-grow lg:py-0 lg:items-end justify-center hidden md:flex"
                     >
                        <ul className="space-y-2 list-none md:space-y-0 lg:ml-auto items-center md:inline-flex justify-center text-center md:text-left">
                           {links.map(({ href, title }) => (
                              <li key={title}>
                                 <AnimatedLink href={href} title={title} />
                              </li>
                           ))}
                           <li className='text-easyWhite hover:text-blue-300 ml-5'>
                              <Link
                                 href="#"
                                 target="_blank"
                                 className="rounded-lg bg-black/10 px-3.5 py-2.5 text-sm font-semibold text-easyWhite shadow-sm hover:bg-black/20"
                              >
                                 Login
                              </Link>
                           </li>
                        </ul>
                     </nav>
                     <Popover onOpenChange={(e: boolean) => setMobileMenuOpen(e)}>
                        <PopoverTrigger className='flex justify-center'>
                           <div
                              className="inline-flex justify-center text-easyWhite/95 hover:text-blue-300 focus:outline-none focus:text-easyWhite md:hidden"
                           >
                              <div className="flex  cursor-pointer w-10 h-10 relative justify-center items-center" >
                                 <span
                                    aria-hidden="true"
                                    className={classNames("block absolute h-0.5 w-5 bg-current transform transition duration-200 ease-in-out", mobileMenuOpen ? 'rotate-45' : '-translate-y-1.5')}
                                 />
                                 <span
                                    aria-hidden="true"
                                    className={classNames("block absolute h-0.5 w-5 bg-current transform transition duration-200 ease-in-out", mobileMenuOpen && 'opacity-0')} />
                                 <span
                                    aria-hidden="true"
                                       className={classNames("block absolute h-0.5 w-5 bg-current transform transition duration-200 ease-in-out", mobileMenuOpen ? "-rotate-45" : "translate-y-1.5")} />
                              </div>
                           </div>
                        </PopoverTrigger>
                        <PopoverContent className='bg-darkGray/70 opacity-100 border border-white/5 shadow-thick backdrop-blur-xl backdrop-filter rounded-2xl mt-8 md:hidden'>
                           <div>
                              <ul className="space-y-4 list-none md:space-y-0 lg:ml-auto items-center md:inline-flex justify-center text-center md:text-left my-4">
                                 {links.map(({ href, title }) => (
                                    <li key={title}>
                                       <AnimatedLink href={href} title={title} />
                                    </li>
                                 ))}
                                 <li className='text-easyWhite hover:text-blue-300 pt-4'>
                                    <Link
                                       href="#"
                                       target="_blank"
                                       className="rounded-lg bg-black/10 px-3.5 py-2.5 text-sm font-semibold text-easyWhite shadow-sm hover:bg-black/20"
                                    >
                                       Login
                                    </Link>
                                 </li>
                              </ul>
                           </div>
                        </PopoverContent>
                     </Popover>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
