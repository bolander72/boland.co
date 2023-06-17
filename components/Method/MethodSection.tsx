import Testimonial from '../Testimonial'

const methods = [
   {
      name: 'Completely Async',
      description:
         'Too many meetings? We agree. We operate asynchronously to keep you in the loop without wasting your time.',
   },
   {
      name: 'Tidy & Managed',
      description: 'Manage your project board with Trello. View active, queued, and completed tasks with ease.',
   },
   {
      name: 'Open & Inclusive',
      description: 'The whole team is welcome. Anyone can submit requests and track their progress.',
   },
]

export default function MethodSection() {
   return (
      <div id="process" className='space-y-2 px-6 mt-24'>
         <div className='flex flex-col items-center'>
            <div className='flex-col'>
               <h1 className='text-4xl sm:text-5xl md:text-6xl text-easyBlack font-bold'>All the time </h1>
               <h1 className='text-4xl sm:text-5xl md:text-6xl text-easyBlack font-bold'>
                  it&apos;s getting better.
               </h1>
            </div>
         </div>

         <div className='tracking-normal text-center'>
            <div className='pt-10 text-lg sm:text-2xl text-easyBlack'>
               Replace unreliable and pricey -
            </div>
            <div className='text-lg sm:text-2xl text-easyBlack'>leveraging some flexible methods.</div>
         </div>
         <div className="overflow-hidden py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
               <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                  <div className="lg:ml-auto lg:pl-4">
                     <div className="lg:max-w-lg">
                        <dl className="max-w-xl space-y-12 text-base leading-7 text-easyBlack lg:max-w-none">
                           {methods.map((item) => (
                              <div key={item.name} className="relative pl-9">
                                 <dt className="font-semibold text-xl block mb-3">
                                    {/* <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" /> */}
                                    {item.name}
                                 </dt>{' '}
                                 <dd className="inline">{item.description}</dd>
                              </div>
                           ))}
                        </dl>
                     </div>
                  </div>
                  <div className="flex items-start justify-end lg:order-first">
                     <ul>
                        <Testimonial
                           quote="Mira’s teaching style is second to none. Everything was easy to follow every step of the way."
                           name="John Doe"
                           title="CEO, Acme"
                        />
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}