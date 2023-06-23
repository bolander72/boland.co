'use client'

import { cn } from "@/lib/utils";
import { useState } from "react";
import { TbMinus, TbPlus } from "react-icons/tb";

const pricingMethods = [
   {
      key: 'hourly',
      name: 'Hourly',
      description: 'You pay for the time spent on your project. This is the most common pricing method for software development services. It is suitable for projects with a high level of uncertainty and for those that require a lot of changes during the development process.',
      pros: [
         'Fixed price',
         'Change the scope of work at any time',
         'Start the project without a detailed specification',
      ],
      cons: [
         'Involved in the project development process',
         'Availability for communication with our team',
      ]
   },
   {
      key: 'project-based',
      name: 'Project-based',
      description: 'You pay a fixed price for the whole project. This is the most suitable pricing method for projects with a clear scope of work and a detailed specification. It is also suitable for projects with a low level of uncertainty.',
      pros: [
         'Fixed price',
         'Plan your budget in advance',
         'Certainty about deadlines / deliverables',
      ],
      cons: [
         'Need to have a clear scope of work',
         'Limited ability to change the scope of work'
      ],
   },
   {
      key: 'value-based',
      name: 'Value-based',
      description: 'You pay a partial fixed price for the whole project as well as a percentage of net sales at launch or per transaction. This is the most suitable pricing method for projects with a high level of uncertainty and a high potential for growth. The total price is more affordable as the risk, and therefore reward, is shared between the client and Boland Co.',
      pros: [
         'Lower upfront price',
         'Risk is shared between parties',
         'Pay a lower upfront price for the project',
      ],
      cons: [
         'Nuanced pricing structure',
         'Reward is shared between parties',
      ],
   },
   {
      key: 'subscription-based',
      name: 'Subscription-based (DAAS)',
      description: 'You pay a monthly fee for dedicated development services. This is the most suitable pricing method for groups with light to moderate needs and unpredictable work inflows. The total price is fixed, predictable, and more affordable than hiring a full-time employee.',
      pros: [
         'Fixed price',
         'Easy, recurring payments',
         'Pay less than you would for a full-time employee',
      ],
      cons: [
         'Needs will be addressed on a per-request basis',
         'Longer turnaround time than using a previous method'
      ],
   },
]

export default function Pricing() {
   const [active, setActive] = useState<string>('')

   return (
      <section className='flex flex-col items-stretch my-12'>
         <div className="px-2 text-lg mb-2">Pricing Methods</div>
         {pricingMethods.map((method, idx) => (
            <button
               type="button"
               key={method.key}
               onClick={() => {
                  if (method.key === active) {
                     setActive('')
                  } else {
                     setActive(method.key)
                  }
               }}
               className={cn("flex flex-col items-start justify-between px-6 py-3 border-b cursor-pointer", idx === 0 && "border-t")}
            >

               <div className={cn("text-md leading-6 text-easyBlack flex hover:opacity-80", method.key === active && "mb-2")}>
                  <strong className="font-medium uppercase hover:underline">{method.name}</strong>
                  <span className="ml-px">
                     <TbPlus />
                  </span>
               </div>

            {method.key === active && (
               <>
                  <div className="text-md leading-6 my-2 text-easyBlack block">
                     <div className="font-medium text-left text-sm max-w-lg">
                        <p className="uppercase">Benefits</p>
                        {method.pros.map((pro) => (
                           <div key={pro} className="flex items-center text-sm">
                              <span className="mr-2 text-green-600">
                                 <TbPlus />
                              </span>
                              {pro}
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="text-md leading-7 my-2 text-easyBlack block">
                        <div className="font-medium text-left text-sm max-w-lg">
                        <p className="uppercase">Considerations</p>
                        {method.cons.map((con) => (
                           <div key={con} className="flex items-center text-sm">
                              <span className="mr-2 text-yellow-600"><TbMinus /></span>
                              {con}
                           </div>
                        ))}
                     </div>
                  </div>
               </>
            )}

            </button>
         ))}
      </section>
   )
}