import Method from "./method";

const pricingMethods = [
   {
      key: 'hourly',
      name: 'Hourly',
      price: '$205/hr',
      description: (
         <div className="space-y-2 mt-2 mb-4">
            <p>Pay for the time spent on your project.</p>
            <p>The most common pricing method for software development services.</p>
            <p>Suitable for projects with a high level of uncertainty or requiring scope changes during the development process.</p>
         </div>
      ),
      pros: [
         'Change project scope at any time',
         'Start without a detailed specification',
      ],
      cons: [
         'Active in the project development process',
         'Availability for communication with our team',
      ]
   },
   {
      key: 'project-based',
      name: 'Project-based',
      price: '$7,995+',
      description: (
         <div className="space-y-2 mt-2 mb-4">
            <p>Pay a fixed price for the whole project.</p>
            <p>Suitable for projects with a low level of uncertainty and defined deadlines.</p>
         </div>
      ),
      pros: [
         'Plan your budget in advance',
         'Certainty about deadlines / deliverables',
      ],
      cons: [
         'Need to have a clear work scope',
         'Limited ability to change work scope'
      ],
   },
   {
      key: 'value-based',
      name: 'Value-based',
      price: '$4,995+',
      description: (
         <div className="space-y-2 mt-2 mb-4">
            <p>Pay a lower fixed price for the whole project as well as a mutually-agreed fee per transaction, sale, or other metric.</p>
            <p>The total price is more affordable as the risk, and therefore reward, is shared between parties.</p>
            <p>Suitable pricing method for projects with a high level of uncertainty and a high potential for growth.</p>
         </div>
      ),
      pros: [
         'Lower upfront price',
         'Risk is shared between parties',
      ],
      cons: [
         'Nuanced pricing structure',
         'Reward is shared between parties',
      ],
   },
   {
      key: 'subscription-based',
      name: 'Subscription-based (DAAS)',
      price: '$6,995/mo',
      description: (
         <div className="space-y-2 mt-2 mb-4">
            <p>Pay a monthly fee for dedicated development services.</p>
            <p>The monthly price is fixed, predictable, and more affordable than hiring a full-time developer.</p>
            <p>Suitable pricing method for those with light to moderate needs and unpredictable work inflows.</p>
         </div>
      ),
      pros: [
         'Easy, recurring payments',
         'Costs less than a full-time developer',
      ],
      cons: [
         'Longer turnaround than other methods',
         'Needs addressed on a per-request basis',
      ],
   },
]

export default function Pricing() {
   return (
      <section className='flex flex-col items-stretch my-12'>
         <div className="px-2 text-2xl mb-2">Pricing Methods</div>
         {pricingMethods.map((method, idx) => (
            <Method key={method.key} method={method} idx={idx} />
         ))}
      </section>
   )
}