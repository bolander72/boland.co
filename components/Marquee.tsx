import Link from "next/link";
import { TbArrowUpRight } from "react-icons/tb";
import Badge from "./Badge";

export default function Marquee() {
   return (
      <section className='flex flex-col items-stretch my-12'>
         <div className="px-2 text-lg mb-2">Contributions</div>

         {/* https://coolors.co/ 3 shades darker */}
         <div className="flex items-start justify-between px-6 py-3 bg-gradient-to-r from-[#FD49A0] via-[#FD49A0] to-[#FD0D81] border-b hover:opacity-95">
            <div className="text-sm leading-6 text-easyWhite flex">
               <Link
                  target="_blank"
                  href="https://sexy.ai"
                  className="flex flex-row hover:underline"
               >
                  <strong className="font-medium">Sexy AI</strong>
                  <span aria-hidden="true" className="ml-px"><TbArrowUpRight /></span>
               </Link>
               <span className="ml-2 text-sm flex items-center lowercase">sexy.ai</span>
               <span className="ml-2 text-sm flex items-center uppercase">(NSFW)</span>
               <Badge variant="outline" className="ml-4 text-sm flex items-center text-easyWhite lowercase font-normal">AI</Badge>
            </div>
            <div className="justify-end text-easyWhite/50 hidden md:flex">&apos;23</div>
         </div>

         <div className="flex items-start justify-between px-6 py-3 bg-gradient-to-r from-[#DF2266] via-[#DF2266] to-[#B31952] border-b hover:opacity-95">
            <div className="text-sm leading-6 text-easyWhite flex">
               <Link
                  target="_blank"
                  href="https://getmainline.io"
                  className="flex flex-row hover:underline">
                  <strong className="font-medium">Mainline</strong>
                  <span aria-hidden="true" className="ml-px"><TbArrowUpRight /></span>
               </Link>
               <span className="ml-2 text-sm flex items-center lowercase">getmainline.io</span>
               <Badge variant="outline" className="ml-4 text-sm flex items-center text-easyWhite lowercase font-normal">web3</Badge>
            </div>
            <div className="justify-end text-easyWhite/50 hidden md:flex">&apos;23</div>
         </div>

         <div className="flex items-start justify-between px-6 py-3 bg-gradient-to-r from-[#369999] via-[#369999] to-[#2A7979] border-b hover:opacity-95">
            <div className="text-sm leading-6 text-easyWhite flex">
               <Link
                  target="_blank"
                  href="https://tronic.app/"
                  className="flex flex-row hover:underline"
               >
                  <strong className="font-medium">Tronic</strong>
                  <span aria-hidden="true" className="ml-px"><TbArrowUpRight /></span>
               </Link>
               <span className="ml-2 text-sm flex items-center lowercase">tronic.app</span>
               <Badge variant="outline" className="ml-4 text-sm flex items-center text-easyWhite lowercase font-normal">web3</Badge>
            </div>
            <div className="justify-end text-easyWhite/50 hidden md:flex">&apos;23</div>
         </div>

         <div className="flex items-start justify-between px-6 py-3 bg-gradient-to-r from-[#8BA242] via-[#8BA242] to-[#708235] border-b hover:opacity-95">
            <div className="text-sm leading-6 text-easyBlack flex">
               <Link
                  target="_blank"
                  href="https://smartlockerusa.com/"
                  className="flex flex-row hover:underline"
               >
                  <strong className="font-medium">Smartlocker</strong>
                  <span aria-hidden="true" className="ml-px"><TbArrowUpRight /></span>
               </Link>
               <span className="ml-2 text-sm flex items-center lowercase">smartlockerusa.com</span>
               <Badge variant="outline" className="ml-4 text-sm flex items-center text-easyBlack border-easyBlack lowercase font-normal">agtech</Badge>
            </div>
            <div className="justify-end text-easyWhite/50 hidden md:flex">&apos;23</div>
         </div>

         <div className="flex items-start justify-between px-6 py-3 bg-gradient-to-r from-[#FA9556] via-[#FA9556] to-[#F87625] border-b hover:opacity-95">
            <div className="text-sm leading-6 text-easyBlack flex">
               <Link
                  target="_blank"
                  href="https://ae.studio/"
                  className="flex flex-row hover:underline"
               >
                  <strong className="font-medium">AE Studio</strong>
                  <span aria-hidden="true" className="ml-px"><TbArrowUpRight /></span>
               </Link>
               <span className="ml-2 text-sm flex items-center lowercase">ae.studio</span>
               <Badge variant="outline" className="ml-4 text-sm flex items-center text-easyBlack border-easyBlack lowercase font-normal">web3</Badge>
            </div>
            <div className="justify-end text-easyWhite/50 hidden md:flex">&apos;22</div>
         </div>

         <div className="flex items-start justify-between px-6 py-3 bg-gradient-to-r from-[#1966FF] via-[#1966FF] to-[#004BE0] border-b hover:opacity-95">
            <div className="text-sm leading-6 text-easyWhite flex">
               <Link
                  target="_blank"
                  href="https://the.com/"
                  className="flex flex-row hover:underline"
               >
                  <strong className="font-medium">The.com</strong>
                  <span aria-hidden="true" className="ml-px"><TbArrowUpRight /></span>
               </Link>
               <span className="ml-2 text-sm flex items-center lowercase">the.com</span>
               <Badge variant="outline" className="ml-4 text-sm flex items-center text-easyWhite border-easyWhite lowercase font-normal">no-code</Badge>
            </div>
            <div className="justify-end text-easyWhite/50 hidden md:flex">&apos;22</div>
         </div>

         <div className="flex items-start justify-between px-6 py-3 bg-gradient-to-r from-[#8D1D40] via-[#8D1D40] to-[#66152E] border-b hover:opacity-95">
            <div className="text-sm leading-6 text-easyWhite flex">
               <Link
                  target="_blank"
                  href="https://asu.edu"
                  className="flex flex-row hover:underline"
               >
                  <strong className="font-medium">
                     <span className="md:hidden">ASU</span>
                     <span className="hidden md:block">Arizona State University</span>
                  </strong>
                  <span aria-hidden="true" className="ml-px"><TbArrowUpRight /></span>
               </Link>
               <span className="ml-2 text-sm flex items-center lowercase">asu.edu</span>
               <Badge variant="outline" className="ml-4 text-sm flex items-center text-easyWhite border-easyWhite lowercase font-normal">e-learning</Badge>
            </div>
            <div className="justify-end text-easyWhite/50 hidden md:flex">&apos;22</div>
         </div>

         <div className="flex items-start justify-between px-6 py-3 bg-gradient-to-r from-[#FFF202] via-[#FFF202] to-[#CCC200] border-b hover:opacity-95">
            <div className="text-sm leading-6 text-easyBlack flex">
               <Link
                  target="_blank"
                  href="https://blockearner.com.au"
                  className="flex flex-row hover:underline"
               >
                  <strong className="font-medium">Blockearner</strong>
                  <span aria-hidden="true" className="ml-px"><TbArrowUpRight /></span>
               </Link>
               <span className="ml-2 text-sm flex items-center lowercase">blockearner.com.au</span>
               <Badge variant="outline" className="ml-4 text-sm flex items-center text-easyBlack border-easyBlack lowercase font-normal">web3</Badge>
            </div>
            <div className="justify-end text-easyWhite/50 hidden md:flex">&apos;21</div>
         </div>

         <div className="flex items-start justify-between px-6 py-3 bg-gradient-to-r from-[#E21C11] via-[#E21C11] to-[#AB150D] border-b hover:opacity-95">
            <div className="text-sm leading-6 text-easyWhite flex">
               <Link
                  target="_blank"
                  href="https://hy-vee.com"
                  className="flex flex-row hover:underline"
               >
                  <strong className="font-medium">Hy-Vee</strong>
                  <span aria-hidden="true" className="ml-px"><TbArrowUpRight /></span>
               </Link>
               <span className="ml-2 text-sm flex items-center lowercase">hy-vee.com</span>
               <Badge variant="outline" className="ml-4 text-sm flex items-center text-easyWhite lowercase font-normal">e-commerce</Badge>
            </div>
            <div className="justify-end text-easyWhite/50 hidden md:flex">&apos;21</div>
         </div>

         <div className="flex items-start justify-between px-6 py-3 bg-gradient-to-r from-[#FAB303] via-[#FAB303] to-[#CA9102] border-b hover:opacity-95">
            <div className="text-sm leading-6 text-easyBlack flex">
               <Link
                  target="_blank"
                  href="https://www.gofastpath.com/"
                  className="flex flex-row hover:underline"
               >
                  <strong className="font-medium">Fastpath</strong>
                  <span aria-hidden="true" className="ml-px"><TbArrowUpRight /></span>
               </Link>
               <span className="ml-2 text-sm flex items-center lowercase">gofastpath.com</span>
               <Badge variant="outline" className="ml-4 text-sm flex items-center text-easyBlack border-easyBlack lowercase font-normal">saas</Badge>
            </div>
            <div className="justify-end text-easyWhite/50 hidden md:flex">&apos;19</div>
         </div>

         <div className="flex items-start justify-between px-6 py-3 bg-gradient-to-r from-[#0073D3] via-[#0073D3] to-[#005AA3] border-b hover:opacity-95">
            <div className="text-sm leading-6 text-easyWhite flex">
               <Link
                  target="_blank"
                  href="https://corteva.com/"
                  className="flex flex-row hover:underline"
               >
                  <strong className="font-medium">Corteva</strong>
                  <span aria-hidden="true" className="ml-px"><TbArrowUpRight /></span>
               </Link>
               <span className="ml-2 text-sm flex items-center lowercase">corteva.com</span>
               <Badge variant="outline" className="ml-4 text-sm flex items-center text-easyWhite border-easyWhite lowercase font-normal">agtech</Badge>
            </div>
            <div className="justify-end text-easyWhite/50 hidden md:flex">&apos;19</div>
         </div>

         <div className="flex items-start justify-between  px-6 py-3 bg-gradient-to-r from-[#17ABDA] via-[#17ABDA] to-[#1183A6] border-b hover:opacity-95">
            <div className="text-sm leading-6 text-easyWhite flex">
               <Link
                  target="_blank"
                  href="https://capgemini.com"
                  className="flex flex-row hover:underline"
               >
                  <strong className="font-medium">Capgemini</strong>
                  <span aria-hidden="true" className="ml-px"><TbArrowUpRight /></span>
               </Link>
               <span className="ml-2 text-sm flex items-center lowercase">capgemini.com</span>
               <Badge variant="outline" className="ml-4 text-sm flex items-center text-easyWhite border-easyWhite lowercase font-normal">SAAS</Badge>
            </div>
            <div className="justify-end text-easyWhite/50 hidden md:flex">&apos;19</div>
         </div>

         <div className="flex items-start justify-between px-6 py-3 bg-gradient-to-r from-[#FE0000] via-[#FE0000] to-[#CC0000] border-b hover:opacity-95">
            <div className="text-sm leading-6 text-easyWhite flex">
               <Link
                  target="_blank"
                  href="https://swissep.org"
                  className="flex flex-row hover:underline"
               >
                  <strong className="font-medium">Swiss EP</strong>
                  <span aria-hidden="true" className="ml-px"><TbArrowUpRight /></span>
               </Link>
               <span className="ml-2 text-sm flex items-center lowercase">swissep.org</span>
               <Badge variant="outline" className="ml-4 text-sm flex items-center text-easyWhite border-easyWhite lowercase font-normal">ngo</Badge>
            </div>
            <div className="justify-end text-easyWhite/50 hidden md:flex">&apos;17</div>
         </div>

         <div className="flex items-start justify-between px-6 py-3 bg-gradient-to-r from-[#0555FB] via-[#0555FB] to-[#0345C9] border-b hover:opacity-95">
            <div className="text-sm leading-6 text-easyWhite flex">
               <Link
                  target="_blank"
                  href="https://thenewdigitalschool.com/"
                  className="flex flex-row hover:underline"
               >
                  <strong className="font-medium">
                     <span className="md:hidden">TNDS</span>
                     <span className="hidden md:block">The New Digital School</span>
                  </strong>
                  <span aria-hidden="true" className="ml-px"><TbArrowUpRight /></span>
               </Link>
               <span className="ml-2 text-sm flex items-center lowercase">thenewdigitalschool.com</span>
               <Badge variant="outline" className="ml-4 text-sm flex items-center text-easyWhite border-easyWhite lowercase font-normal">e-learning</Badge>
            </div>
            <div className="justify-end text-easyWhite/50 hidden md:flex">&apos;17</div>
         </div>

      </section>
   )
}