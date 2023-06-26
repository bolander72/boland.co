'use client'

import { useState } from "react"
import { TbMinus, TbPlus } from "react-icons/tb";

import { cn } from "@/lib/utils";
import { IPerson } from "@/types";
import Image from "next/image";

interface Props {
   people: IPerson[]
}

export default function ReadMore({ people }: Props) {
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
            className="flex flex-col items-start pt-4 cursor-pointer"
         >

            <div className={cn("text-lg leading-6 text-easyBlack flex", active && "mb-2")}>
               <strong className="font-medium uppercase underline">{active ? 'Read Less' : 'Read More'}</strong>
               <span className="ml-px">
                  {active ? <TbMinus /> : <TbPlus />}
               </span>
            </div>
         </button>
         {active && (
            <ul role="list" className="mt-4 space-y-12 divide-y divide-gray-200 xl:col-span-3">
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
         )}
      </>
   )
}