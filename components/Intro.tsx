import Link from "next/link";
import { TbArrowUpRight } from "react-icons/tb";

export default function Intro() {
   return (
      <section className='flex flex-col items-stretch px-px'>
         <h1 className='font-sans text-8xl sm:text-9xl'>Boland Co
            <span className="bg-gradient-to-r bg-clip-text text-transparent from-easyBlack to-[#5B8984] via-blue-500 animate-gradient-xy">
               .
            </span>
         </h1>
         <h1 className="font-sans text-7xl hidden md:block px-1">indie web studio</h1>

         <div className='flex flex-col text-3xl mt-36 px-2'>
            <div>Web works</div>
            <div>Within reach</div>
            <div className="md:hidden">
               <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
               <div>Indie web studio</div>
            </div>
         </div>

         <div className='flex flex-col text-xl my-4 px-2'>
            <Link
               target="_blank"
               href="https://cal.com/bolandco/intro"
               className="flex flex-row w-max hover:underline cursor-pointer"
            >
               Book intro call <TbArrowUpRight className="ml-px" />
            </Link>
            <Link
               href="mailto:hello@boland.co?subject=Boland%20Co.%20Inquiry"
               className="flex flex-row w-max hover:underline cursor-pointer"
            >
               Send email <TbArrowUpRight className="ml-px" />
            </Link>
         </div>
      </section>
   )
}