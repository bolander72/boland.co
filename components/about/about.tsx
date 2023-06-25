import Image from "next/image"

const people = [
   {
      name: 'Michael Boland',
      role: 'Owner',
      imageUrl: '/profile/profile.jpg',
      bio: `With a focus on both our craft and our processes, we are dedicated to making a positive impact and leaving your project better than we found it. Let's work together to create a meaningful end-product, bringing your ideas to life.`,
   },
]

export default function About() {
   return (
      <section className='flex flex-col items-stretch my-12'>
         <div className="px-2 text-2xl mb-2">About Boland Co.</div>
         <div className=" grid grid-cols-1 gap-x-8 gap-y-20 px-6 border-y pb-10">
            <div className="max-w-2xl xl:col-span-2">
               <p className="mt-6 text-xl leading-7 text-easyBlack normal-case">
                  Boland Co. is a small, creative web studio that packs a big punch. We explore the boundaries of what&apos;s possible, finding new ways to help you achieve your goals.
               </p>
            </div>
            <ul role="list" className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3">
               {people.map((person) => (
                  <li key={person.name} className="flex flex-col gap-10 pt-4 sm:flex-row">
                     <Image className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={person.imageUrl} alt="Michael Boland" width={208} height={208} />
                     <div className="max-w-xl flex-auto">
                        <h3 className="text-lg font-semibold leading-8 text-easyBlack">{person.name}</h3>
                        <p className="text-base leading-7 text-easyBlack">{person.role}</p>
                        <p className="mt-6 text-lg leading-7 text-easyBlack normal-case">{person.bio}</p>
                     </div>
                  </li>
               ))}
            </ul>
         </div>
      </section>
   )
}
