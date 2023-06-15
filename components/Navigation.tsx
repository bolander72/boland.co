'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'
import Link from 'next/link'

export default function Navigation() {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

   return (
      <div className="fixed top-5 inset-x-0 z-50 aos-init aos-animate" data-aos="fade-down" data-aos-duration="1500">
         <div className="lg:max-w-4xl mx-auto px-8">
            <div className="w-full mx-auto">
               <div className="relative flex flex-col w-full p-5 mx-auto bg-dark-bg/70 border border-white/5 shadow-thick backdrop-blur-xl backdrop-filter rounded-2xl lg:px-8">
                  <div className="flex flex-row items-center justify-between lg:justify-start">
                     <Link href="/" className="text-lg font-bold tracking-tighter text-white transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8">
                        <div>Boland Co.</div>
                     </Link>
                     <nav
                        className={classNames("flex-col flex-grow lg:py-0 md:flex lg:items-end justify-center", mobileMenuOpen ? 'flex' : 'hidden')}
                     >
                        <ul className="space-y-2 list-none md:space-y-0 lg:ml-auto items-center md:inline-flex justify-center text-center md:text-left">
                           <li>
                              <a href="#process" className="px-2 lg:px-6 py-10 md:px-3 text-sm text-slate-400 hover:text-blue-300">
                                 Process
                              </a>
                           </li>
                           <li>
                              <a href="#benefits" className="px-2 lg:px-6 py-10 md:px-3 text-sm text-slate-400 hover:text-blue-300 hover:border-blue-500">
                                 Benefits
                              </a>
                           </li>
                           <li>
                              <a href="#pricing" className="px-2 lg:px-6 py-10 md:px-3 text-sm text-slate-400 hover:text-blue-300">
                                 Pricing
                              </a>
                           </li>
                           <li>
                              <a href="/faq" className="px-2 lg:px-6 py-10 md:px-3 text-sm text-slate-400 hover:text-blue-300">
                                 FAQ
                              </a>
                           </li>
                           <li>
                              <a href="/submit" className="px-2 lg:px-6 py-10 md:px-3 text-sm text-slate-400 hover:text-blue-300">
                                 Contact
                              </a>
                           </li>
                           <li className='text-white hover:text-blue-300'>
                              <Link
                                 href="#"
                                 target="_blank"
                                 className="rounded-lg bg-black/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/20"
                              >
                                 Login
                              </Link>
                           </li>
                        </ul>
                     </nav>
                     <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="inline-flex justify-center p-0 text-slate-400 hover:text-blue-300 focus:outline-none focus:text-white md:hidden"
                     >
                        <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                           <path
                              className={classNames(mobileMenuOpen ? 'hidden' : 'inline-flex')}
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M4 6h16M4 12h16M4 18h16"
                           >
                           </path>
                           <path
                              className={classNames(mobileMenuOpen ? 'inline-flex' : 'hidden')}
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M6 18L18 6M6 6l12 12"
                           >
                           </path>
                        </svg>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
