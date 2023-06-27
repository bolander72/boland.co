'use client'

import { useState } from "react"

import { cn } from "@/lib/utils";
import { TbPlus, TbMinus } from "react-icons/tb";

interface Props {
   method: {
      key: string,
      name: string,
      price: string,
      description: string | JSX.Element,
      pros: string[],
      cons: string[],
   },
   idx: number,
}

export default function Method({ method, idx }: Props) {
   const [active, setActive] = useState<boolean>(false)

   return (
      <>
         <button
            type="button"
            onClick={() => {
               if (active) {
                  setActive(false)
               } else {
                  setActive(true)
               }
            }}
            className={cn("flex flex-col items-start justify-between px-6 py-4 cursor-pointer", idx === 0 && "border-t", !active && "border-b", active && "border-b-0")}
         >

            <div className={cn("text-lg leading-6 text-easyBlack flex", active && "")}>
               <strong className="font-normal uppercase underline">{method.name}</strong>
               <span className="ml-px">
                  {active ? <TbMinus /> : <TbPlus />}
               </span>
            </div>
         </button>

         {active && (
            <div className="border-b px-6 pb-4">
               {/* <div className="text-lg leading-6 text-easyBlack flex">
                  <strong className="font-medium normal-case">{method.price}</strong>
               </div> */}

               <div className="text-lg leading-6 text-easyBlack text-left mt-2">
                  <div className="font-normal normal-case">{method.description}</div>
               </div>

               <div className="text-md leading-6 my-2 text-easyBlack block">
                  <div className="font-normal text-left text-lg max-w-lg">
                     <p className="uppercase">Benefits</p>
                     {method.pros.map((pro) => (
                        <div key={pro} className="flex items-center text-lg">
                           <span className="mr-2 text-green-600">
                              <TbPlus />
                           </span>
                           <span className="font-normal normal-case">{pro}</span>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="text-md leading-7 my-2 text-easyBlack block">
                  <div className="font-normal text-left text-lg max-w-lg">
                     <p className="uppercase">Considerations</p>
                     {method.cons.map((con) => (
                        <div key={con} className="flex items-center text-lg">
                           <span className="mr-2 text-yellow-600"><TbMinus /></span>
                           <span className="font-normal normal-case">{con}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         )}
      </>
   )
}