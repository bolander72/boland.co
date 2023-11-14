import Link from "next/link";
import { TbArrowUpRight } from "react-icons/tb";
import Badge from "../ui/badge";

export default function Marquee() {
   return (
      <section className='flex flex-col items-stretch my-12'>
         <div className="px-2 text-2xl mb-2">Recent Contributions</div>
         {/* https://coolors.co/ 3 shades darker */}
         <div className="flex items-start justify-between px-6 py-3 bg-gradient-to-r from-[#525252] via-[#525252] to-[#333333] border-b hover:opacity-95">
            <div className="text-md leading-6 text-easyWhite flex">
               <Link
                  target="_blank"
                  href="https://aimg.io"
                  className="flex flex-row underline"
               >
                  <strong className="font-normal">AIMG</strong>
                  <span aria-hidden="true" className="ml-px"><TbArrowUpRight /></span>
               </Link>
               <span className="ml-2 text-sm flex items-center lowercase">AIMG.IO</span>
               <Badge variant="outline" className="ml-4 text-sm flex items-center !text-easyWhite lowercase font-normal">AI</Badge>
            </div>
            <div className="justify-end text-easyWhite/50 hidden md:flex">Q3 &apos;23</div>
         </div>
         <div className="flex items-start justify-between px-6 py-3 bg-gradient-to-r from-[#6A85FA] via-[#6A85FA] to-[#395CF9] border-b hover:opacity-95">
            <div className="text-md leading-6 text-easyWhite flex">
               <Link
                  target="_blank"
                  href="https://getmainline.io"
                  className="flex flex-row underline">
                  <strong className="font-normal">Mainline</strong>
                  <span aria-hidden="true" className="ml-px"><TbArrowUpRight /></span>
               </Link>
               <span className="ml-2 text-sm flex items-center lowercase">getmainline.io</span>
               <Badge variant="outline" className="ml-4 text-sm flex items-center !text-easyWhite lowercase font-normal">social</Badge>
            </div>
            <div className="justify-end text-easyWhite/50 hidden md:flex">Q2 &apos;23</div>
         </div>

         <div className="flex items-start justify-between px-6 py-3 bg-gradient-to-r from-[#369999] via-[#369999] to-[#2A7979] border-b hover:opacity-95">
            <div className="text-md leading-6 text-easyWhite flex">
               <Link
                  target="_blank"
                  href="https://tronic.app/"
                  className="flex flex-row underline"
               >
                  <strong className="font-normal">Tronic</strong>
                  <span aria-hidden="true" className="ml-px"><TbArrowUpRight /></span>
               </Link>
               <span className="ml-2 text-sm flex items-center lowercase">tronic.app</span>
               <Badge variant="outline" className="ml-4 text-sm flex items-center !text-easyWhite lowercase font-normal">web3</Badge>
            </div>
            <div className="justify-end text-easyWhite/50 hidden md:flex">Q2 &apos;23</div>
         </div>

         <div className="flex items-start justify-between px-6 py-3 bg-gradient-to-r from-[#8BA242] via-[#8BA242] to-[#708235] border-b hover:opacity-95">
            <div className="text-md leading-6 text-easyWhite flex">
               <Link
                  target="_blank"
                  href="https://smartlockerusa.com/"
                  className="flex flex-row underline"
               >
                  <strong className="font-normal">Smartlocker</strong>
                  <span aria-hidden="true" className="ml-px"><TbArrowUpRight /></span>
               </Link>
               <span className="ml-2 text-sm flex items-center lowercase">smartlockerusa.com</span>
               <Badge variant="outline" className="ml-4 text-sm flex items-center !text-easyWhite border-easyWhite lowercase font-normal">agtech</Badge>
            </div>
            <div className="justify-end text-easyWhite/50 hidden md:flex">Q1 &apos;23</div>
         </div>

         <div className="flex items-start justify-between px-6 py-3 bg-gradient-to-r from-[#FA9556] via-[#FA9556] to-[#F87625] border-b hover:opacity-95">
            <div className="text-md leading-6 text-easyWhite flex">
               <Link
                  target="_blank"
                  href="https://ae.studio/"
                  className="flex flex-row underline"
               >
                  <strong className="font-normal">AE Studio</strong>
                  <span aria-hidden="true" className="ml-px"><TbArrowUpRight /></span>
               </Link>
               <span className="ml-2 text-sm flex items-center lowercase">ae.studio</span>
               <Badge variant="outline" className="ml-4 text-sm flex items-center !text-easyWhite border-easyWhite lowercase font-normal">saas</Badge>
            </div>
            <div className="justify-end text-easyWhite/50 hidden md:flex">Q4 &apos;22</div>
         </div>

         {/* <ViewMore /> */}

      </section>
   )
}