'use client'

import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3, TbCircleNumber4, TbCircleNumber5, TbChevronUp, TbChevronDown, TbArrowForwardUp, TbArrowForward, TbArrowUp, TbArrowRotaryRight, TbArrowMoveUp, TbArrowRotaryStraight } from 'react-icons/tb';
import classNames from "classnames";
import { useState } from "react";

interface Props {
   name: string
   description: string | JSX.Element
   step: number
}

const stepIcons = {
   1: <TbCircleNumber1 className="h-6 w-6 text-easyBlack block" aria-hidden="true" />,
   2: <TbCircleNumber2 className="h-6 w-6 text-blue-600 block" aria-hidden="true" />,
   3: <TbCircleNumber3 className="h-6 w-6 text-yellow-400 block" aria-hidden="true" />,
   4: <TbCircleNumber4 className="h-6 w-6 text-green-500 block" aria-hidden="true" />,
   5: <TbCircleNumber5 className="h-6 w-6 text-orange-500 block" aria-hidden="true" />,
}

export default function ProcessStep({ name, description, step }: Props) {
   const [open, setOpen] = useState(false)

   return (
      <div key={name}>
         <div className="flex items-center text-sm font-semibold leading-6 text-easyBlack">

            <div className='inline-flex'>
               {/* {step === 3 && (
                  <TbArrowRotaryRight className="h-6 w-6 text-green-500 inline-flex transform mr-5" aria-hidden="true" />
               )}
               {step === 4 && (
                  <span className="h-6 w-6 text-easyBlack inline-flex transform mr-5" aria-hidden="true" />
               )}
               {step === 5 && (
                  <TbArrowRotaryRight className="h-6 w-6 text-green-500 inline-flex transform -rotate-90 mr-5" aria-hidden="true" />
               )} */}
               <span className={classNames('pr-3', open && '')}>
                  {/* @ts-ignore */}
                  {stepIcons[step]}
               </span>
               <span className='text-xl'>{name}</span>
               {/* {step === 3 && (
                  <TbArrowRotaryRight className="h-6 w-6 text-green-500 inline-flex transform mr-1 rotate-90 ml-3" aria-hidden="true" />
               )}
               {step === 4 && (
                  <span className="h-6 w-6 text-easyBlack inline-flex transform ml-6" aria-hidden="true" />
               )}
               {step === 5 && (
                  <TbArrowRotaryRight className="h-6 w-6 text-green-500 inline-flex transform rotate-180 ml-10" aria-hidden="true" />
               )} */}
            </div>

            <div
               className="h-px bg-easyBlack/10 mx-8 w-full translate-x-0"
               aria-hidden="true"
            />

            <div>
               {!open ? (
                  <TbChevronUp
                     className="h-6 w-6 text-easyBlack transform rotate-180 duration-200 animate-in cursor-pointer" aria-hidden="true"
                     onClick={() => setOpen(true)}
                  />
               ) : (
                  <TbChevronDown
                     className="h-6 w-6 text-easyBlack transform rotate-180 duration-200 animate-in cursor-pointer" aria-hidden="true"
                     onClick={() => setOpen(false)}
                  />
               )}
            </div>
         </div>

         <div className={classNames('ml-6 lg:ml-0', open ? 'block' : 'hidden')}>
            <div className="mt-6 text-lg leading-6 text-easyBlack">
               {description}
            </div>
         </div>

      </div>
   )
}