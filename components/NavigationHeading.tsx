import Link from "next/link";

export default function NavigationHeading() {
   return (
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
         <div className='space-y-2 tracking-widest'>
            <h1 className='text-6xl text-white font-bold'>A web studio</h1>
            <h1 className='text-6xl text-white font-bold'>for your next{` `}
               <span className='text-blue-300 animate-pulse'>
                  <u className='w-16'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>
               </span>
               &nbsp;.
            </h1>

            <div className='tracking-normal text-center'>
               <div className='pt-16 text-2xl text-white'>Flexible web development subscriptions</div>
               <div className='pt-0 text-xl text-blue-300 italic'>Perfect for fixed timelines and budgets</div>
            </div>

            <div className='pt-10 text-center'>
               <Link
                  href="#pricing"
                  type="button"
                  className="rounded-lg bg-stone-300 px-20 py-5 text-lg font-semibold text-dark-bg shadow-xl shadow-black/50 hover:shadow-none focus-visible:outline cursor-pointer"
               >
                  See Plans
               </Link>
            </div>
            <div className='text-xs pt-6 text-white text-center'>
               <span>Code you'll enjoy, guaranteed.</span>
            </div>
         </div>
      </div>
   )
}