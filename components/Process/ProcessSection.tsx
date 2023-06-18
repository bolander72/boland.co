import ProcessStep from './ProcessStep'

const steps = [
   {
      name: 'Subscribe',
      description: (
         <div className='ml-3'>
            Select a plan in the pricing section. You&apos;ll then be directed to Stripe to confirm and pay. Once completed, you&apos;ll be dropped back onto an onboarding page here.
         </div>
      ),
      step: 1,
   },
   {
      name: 'Onboard',
      description: (
         <div className='ml-3'>
            Browse the onboarding page. You&apos;ll find a welcome message and helpful links. Simultaneously, you should receive an automated email with a Trello board invite.
         </div>
      ),
      step: 2
   },
   {
      name: 'Manage',
      description: (
         <div className='ml-3'>
            Accept the invite and start adding tasks to your board. Invite your team, add requirements and assets, and track the progress of work items from their respective status columns.
         </div>
      ),
      step: 3,
   },
   {
      name: 'Review',
      description: (
         <div className='ml-3'>
            Once a task is completed, it will move to the review column. You can then review the work and request changes if necessary. Once you&apos;re satisfied, you can mark the task as delivered.
         </div>
      ),
      step: 4,
   },
   {
      name: 'Scale',
      description: (
         <div className='ml-3'>
            Scale up or down as needed, and pause or cancel at anytime. Click the login button to access your Stripe account and manage your subscription. You can also view your invoices there.
         </div>
      ),
      step: 5,
   },
]

export default function ProcessSection() {
   return (
      <div className='space-y-2 px-6 my-24'>

         <div className='flex flex-col items-center'>
            <div className='flex-col'>
               <h1 className='text-5xl md:text-6xl text-easyBlack font-bold'>A new <span className="bg-gradient-to-r bg-clip-text bg-300% text-transparent from-yellow-400 to-neonGreen via-green-600 animate-gradient-x font-extrabold">twist</span></h1>
               <h1 className='text-5xl md:text-6xl text-easyBlack font-bold'>
                  to the process
               </h1>
            </div>
         </div>

         <div className='tracking-normal text-left'>
            <div className='pt-10 px-10 text-xl sm:text-2xl text-easyBlack'>
               The typical process? Bloated with misaligned incentives. We&apos;ve reduced the model to its core, and made it easy to manage.
            </div>
         </div>

         <div className="py-20 ">
            <div className="space-y-12">
               {steps.map((item) => (
                  <ProcessStep key={item.name} {...item} />
               ))}
         </div>

         </div>
      </div>
   )
}