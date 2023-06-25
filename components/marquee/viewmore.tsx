"use client"

import Link from "next/link";
import { Button } from "../ui/button";
import { TbArrowUpRight } from "react-icons/tb";
import Badge from "../ui/badge";
import { useState } from "react";

export default function ViewMore() {
   const [show, setShow] = useState(false);

   return (
      <>
         {show ? null : (
            <div className="flex items-center justify-center my-4">
               <Button
                  variant="outline"
                  className="text-sm border-easyBlack shadow-sm hover:shadow-none shadow-easyBlack/50"
                  onClick={() => setShow(true)}
               >
                  View More
               </Button>
            </div>
         )}

         {show ? (
            <>
               <div className="flex items-start justify-between px-6 py-3 bg-gradient-to-r from-[#1966FF] via-[#1966FF] to-[#004BE0] border-b hover:opacity-95">
                  <div className="text-sm leading-6 text-easyWhite flex">
                     <Link
                        target="_blank"
                        href="https://the.com/"
                        className="flex flex-row underline"
                     >
                        <strong className="font-medium">The.com</strong>
                        <span aria-hidden="true" className="ml-px"><TbArrowUpRight /></span>
                     </Link>
                     <span className="ml-2 text-sm flex items-center lowercase">the.com</span>
                     <Badge variant="outline" className="ml-4 text-sm flex items-center !text-easyWhite border-easyWhite lowercase font-normal">no-code</Badge>
                  </div>
                  <div className="justify-end text-easyWhite/50 hidden md:flex">&apos;22</div>
               </div>

               <div className="flex items-start justify-between px-6 py-3 bg-gradient-to-r from-[#8D1D40] via-[#8D1D40] to-[#66152E] border-b hover:opacity-95">
                  <div className="text-sm leading-6 text-easyWhite flex">
                     <Link
                        target="_blank"
                        href="https://asu.edu"
                        className="flex flex-row underline"
                     >
                        <strong className="font-medium">
                           <span className="md:hidden">ASU</span>
                           <span className="hidden md:block">Arizona State University</span>
                        </strong>
                        <span aria-hidden="true" className="ml-px"><TbArrowUpRight /></span>
                     </Link>
                     <span className="ml-2 text-sm flex items-center lowercase">asu.edu</span>
                     <Badge variant="outline" className="ml-4 text-sm flex items-center !text-easyWhite border-easyWhite lowercase font-normal">e-learning</Badge>
                  </div>
                  <div className="justify-end text-easyWhite/50 hidden md:flex">&apos;22</div>
               </div>

               <div className="flex items-start justify-between px-6 py-3 bg-gradient-to-r from-[#232427] via-[#232427] to-[#0A0A0B] border-b hover:opacity-95">
                  <div className="text-sm leading-6 text-easyWhite flex">
                     <Link
                        target="_blank"
                        href="https://blockearner.com.au"
                        className="flex flex-row underline"
                     >
                        <strong className="font-medium">Blockearner</strong>
                        <span aria-hidden="true" className="ml-px"><TbArrowUpRight /></span>
                     </Link>
                     <span className="ml-2 text-sm flex items-center lowercase">blockearner.com.au</span>
                     <Badge variant="outline" className="ml-4 text-sm flex items-center !text-easyWhite border-easyWhite lowercase font-normal">web3</Badge>
                  </div>
                  <div className="justify-end text-easyWhite/50 hidden md:flex">&apos;21</div>
               </div>

               <div className="flex items-start justify-between px-6 py-3 bg-gradient-to-r from-[#E21C11] via-[#E21C11] to-[#AB150D] border-b hover:opacity-95">
                  <div className="text-sm leading-6 text-easyWhite flex">
                     <Link
                        target="_blank"
                        href="https://hy-vee.com"
                        className="flex flex-row underline"
                     >
                        <strong className="font-medium">Hy-Vee</strong>
                        <span aria-hidden="true" className="ml-px"><TbArrowUpRight /></span>
                     </Link>
                     <span className="ml-2 text-sm flex items-center lowercase">hy-vee.com</span>
                     <Badge variant="outline" className="ml-4 text-sm flex items-center !text-easyWhite lowercase font-normal">e-commerce</Badge>
                  </div>
                  <div className="justify-end text-easyWhite/50 hidden md:flex">&apos;21</div>
               </div>

               <div className="flex items-start justify-between px-6 py-3 bg-gradient-to-r from-[#FAB303] via-[#FAB303] to-[#CA9102] border-b hover:opacity-95">
                  <div className="text-sm leading-6 text-easyWhite flex">
                     <Link
                        target="_blank"
                        href="https://www.gofastpath.com/"
                        className="flex flex-row underline"
                     >
                        <strong className="font-medium">Fastpath</strong>
                        <span aria-hidden="true" className="ml-px"><TbArrowUpRight /></span>
                     </Link>
                     <span className="ml-2 text-sm flex items-center lowercase">gofastpath.com</span>
                     <Badge variant="outline" className="ml-4 text-sm flex items-center !text-easyWhite border-easyWhite lowercase font-normal">saas</Badge>
                  </div>
                  <div className="justify-end text-easyWhite/50 hidden md:flex">&apos;19</div>
               </div>

               <div className="flex items-start justify-between px-6 py-3 bg-gradient-to-r from-[#0073D3] via-[#0073D3] to-[#005AA3] border-b hover:opacity-95">
                  <div className="text-sm leading-6 text-easyWhite flex">
                     <Link
                        target="_blank"
                        href="https://corteva.com/"
                        className="flex flex-row underline"
                     >
                        <strong className="font-medium">Corteva</strong>
                        <span aria-hidden="true" className="ml-px"><TbArrowUpRight /></span>
                     </Link>
                     <span className="ml-2 text-sm flex items-center lowercase">corteva.com</span>
                     <Badge variant="outline" className="ml-4 text-sm flex items-center !text-easyWhite border-easyWhite lowercase font-normal">agtech</Badge>
                  </div>
                  <div className="justify-end text-easyWhite/50 hidden md:flex">&apos;19</div>
               </div>

               <div className="flex items-start justify-between  px-6 py-3 bg-gradient-to-r from-[#17ABDA] via-[#17ABDA] to-[#1183A6] border-b hover:opacity-95">
                  <div className="text-sm leading-6 text-easyWhite flex">
                     <Link
                        target="_blank"
                        href="https://capgemini.com"
                        className="flex flex-row underline"
                     >
                        <strong className="font-medium">Capgemini</strong>
                        <span aria-hidden="true" className="ml-px"><TbArrowUpRight /></span>
                     </Link>
                     <span className="ml-2 text-sm flex items-center lowercase">capgemini.com</span>
                     <Badge variant="outline" className="ml-4 text-sm flex items-center !text-easyWhite border-easyWhite lowercase font-normal">SAAS</Badge>
                  </div>
                  <div className="justify-end text-easyWhite/50 hidden md:flex">&apos;19</div>
               </div>

               <div className="flex items-start justify-between px-6 py-3 bg-gradient-to-r from-[#FE0000] via-[#FE0000] to-[#CC0000] border-b hover:opacity-95">
                  <div className="text-sm leading-6 text-easyWhite flex">
                     <Link
                        target="_blank"
                        href="https://swissep.org"
                        className="flex flex-row underline"
                     >
                        <strong className="font-medium">Swiss EP</strong>
                        <span aria-hidden="true" className="ml-px"><TbArrowUpRight /></span>
                     </Link>
                     <span className="ml-2 text-sm flex items-center lowercase">swissep.org</span>
                     <Badge variant="outline" className="ml-4 text-sm flex items-center !text-easyWhite border-easyWhite lowercase font-normal">ngo</Badge>
                  </div>
                  <div className="justify-end text-easyWhite/50 hidden md:flex">&apos;17</div>
               </div>

               <div className="flex items-start justify-between px-6 py-3 bg-gradient-to-r from-[#0555FB] via-[#0555FB] to-[#0345C9] border-b hover:opacity-95">
                  <div className="text-sm leading-6 text-easyWhite flex">
                     <Link
                        target="_blank"
                        href="https://thenewdigitalschool.com/"
                        className="flex flex-row underline"
                     >
                        <strong className="font-medium">
                           <span className="md:hidden">TNDS</span>
                           <span className="hidden md:block">The New Digital School</span>
                        </strong>
                        <span aria-hidden="true" className="ml-px"><TbArrowUpRight /></span>
                     </Link>
                     <span className="ml-2 text-sm flex items-center lowercase">thenewdigitalschool.com</span>
                     <Badge variant="outline" className="ml-4 text-sm flex items-center !text-easyWhite border-easyWhite lowercase font-normal">e-learning</Badge>
                  </div>
                  <div className="justify-end text-easyWhite/50 hidden md:flex">&apos;17</div>
               </div>
            </>
         ) : null}
      </>
   )
}