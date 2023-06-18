'use client'

import { TbCheckbox, TbMailOpened, TbLayout, TbLamp2, TbBoxAlignBottomLeft, TbChevronUp, TbChevronDown } from 'react-icons/tb';
import classNames from "classnames";
import { useState } from "react";

interface Props {
   name: string
   description: string | JSX.Element
   step: number
}

const stepIcons = {
   1: <TbCheckbox className="h-6 w-6 text-easyBlack block" aria-hidden="true" />,
   2: <TbMailOpened className="h-6 w-6 text-easyBlack block" aria-hidden="true" />,
   3: <TbLayout className="h-6 w-6 text-easyBlack block" aria-hidden="true" />,
   4: <TbLamp2 className="h-6 w-6 text-easyBlack block" aria-hidden="true" />,
   5: <TbBoxAlignBottomLeft className="h-6 w-6 text-easyBlack block" aria-hidden="true" />,
}

export default function ProcessStep({ name, description, step }: Props) {
   const [open, setOpen] = useState(step === 1)

   return (
      <div key={name}>
         <div className="flex items-center text-sm font-semibold leading-6 text-easyBlack">

            <span className={classNames('pr-3', open && 'animate-slowBounce')}>
               {/* @ts-ignore */}
               {stepIcons[step]}
            </span>
            <span className='text-xl'>{name}</span>

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