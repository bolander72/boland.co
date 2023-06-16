import { ArrowPathIcon, UsersIcon, RectangleGroupIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const features = [
   {
      name: 'Intro',
      id: 1,
      description: (
         <ul>
            <li>- Subscribe to a plan</li>
            <li>- Join us at <Link href="https://helloivy.co" target="_blank" className="underline">Hello Ivy</Link></li>
         </ul>
      ),
      icon: UsersIcon,
   },
   {
      name: 'Organize',
      id: 2,
      description: (
         <ul>
            <li>- Request work items</li>
            <li>- Track task progress</li>
         </ul>
      ),
      icon: RectangleGroupIcon,
   },
   {
      name: 'Sync',
      id: 3,
      description: (
         <ul>
            <li>- Share feedback</li>
            <li>- Revise as needed</li>
         </ul>
      ),
      icon: ArrowPathIcon,
   },
]

export default function ProcessSection() {
   return (
      <div id="process" className='space-y-2 px-6 my-24'>
         <div className='flex flex-col items-center'>
            <div className='flex-col'>
               <h1 className='text-4xl sm:text-5xl md:text-6xl text-lightBlack font-bold'>A new twist</h1>
               <h1 className='text-4xl sm:text-5xl md:text-6xl text-lightBlack font-bold'>
                  on an old recipe.
               </h1>
            </div>
         </div>

         <div className='tracking-normal text-center'>
            <div className='pt-10 text-lg sm:text-2xl text-lightBlack'>
               No more misaligned incentives.
            </div>
            <div className='text-lg sm:text-2xl text-lightBlack'>Goodbye wasted time, hello sanity.</div>
         </div>

         <div className="pt-20 sm:mt-20 lg:mt-24">
            <dl className="flex flex-col space-y-16 md:space-y-0 md:flex-row justify-around">
               {features.map((feature) => (
                  <div key={feature.id} className="flex flex-col items-center md:items-baseline">
                     <dt className="flex justify-center text-base font-semibold leading-7 text-lightBlack">
                        <div className="mb-6 mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-300">
                           <feature.icon className="h-6 w-6 text-lightBlack" aria-hidden="true" />
                        </div>
                        {feature.name}
                     </dt>
                     <dd className="mt-1 flex flex-auto flex-col text-lg leading-7 text-lightBlack">
                        <div className="flex-auto">{feature.description}</div>
                     </dd>
                  </div>
               ))}
            </dl>
         </div>
      </div>
   )
}