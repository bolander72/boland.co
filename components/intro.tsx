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

         <div className='flex flex-col text-3xl mt-36'>
            <div className="md:hidden">
               <div className="px-2">Indie web studio</div>
               <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
            </div>
         </div>

         <div className='flex flex-col text-2xl my-4 px-2'>
            <Link
               target="_blank"
               href="https://calendly.com/bolandco/intro"
               className="flex flex-row w-max underline cursor-pointer"
            >
               Book intro call <TbArrowUpRight className="ml-px" />
            </Link>
            <Link
               href="mailto:hello@boland.co?subject=Boland%20Co.%20Inquiry"
               className="flex flex-row w-max underline cursor-pointer"
            >
               Send email <TbArrowUpRight className="ml-px" />
            </Link>
         </div>
      </section>
   )
}