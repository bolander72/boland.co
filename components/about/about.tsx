import Image from "next/image"
import ReadMore from "./readmore"

const people = [
   {
      name: 'Michael Boland',
      role: 'Owner',
      imageUrl: '/profile/profile.jpg',
      bio: `With a focus on both our craft and our process, we are dedicated to making a positive impact and leaving your project better than we found it. Let's work together to create a meaningful end-product, bringing your ideas to life.`,
   },
]

export default function About() {
   return (
      <section className='flex flex-col items-stretch my-12'>
         <div className="px-2 text-2xl mb-2">About Boland Co.</div>
         <div className=" grid grid-cols-1 gap-x-8 px-6 border-y pb-10">
            <div className="max-w-2xl xl:col-span-2">
               <p className="mt-6 text-xl leading-7 text-easyBlack normal-case">
                  Boland Co. is a small web studio that packs a big punch. We explore the boundaries of what&apos;s possible, finding new ways to help you achieve your goals.
               </p>
            </div>
            <ReadMore people={people} />
         </div>
      </section>
   )
}
