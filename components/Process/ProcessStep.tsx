'use client'

import { CheckCircleIcon, ChevronDownIcon, ChevronUpIcon, EnvelopeOpenIcon, RectangleGroupIcon, RectangleStackIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { useState } from "react";

interface Props {
   name: string
   description: string | JSX.Element
   step: number
}

const stepIcons = {
   1: <CheckCircleIcon className="h-6 w-6 text-easyBlack block" aria-hidden="true" />,
   2: <EnvelopeOpenIcon className="h-5 w-5 text-easyBlack block" aria-hidden="true" />,
   3: <RectangleGroupIcon className="h-6 w-6 text-easyBlack block" aria-hidden="true" />,
   4: <UserGroupIcon className="h-6 w-6 text-easyBlack block" aria-hidden="true" />,
   5: <RectangleStackIcon className="h-6 w-6 text-easyBlack block" aria-hidden="true" />,
}

export default function ProcessStep({ name, description, step }: Props) {
   const [open, setOpen] = useState(step === 1 ? true : false)

   return (
      <div key={name}>
         <div className="flex items-center text-sm font-semibold leading-6 text-easyBlack">
            {/* @ts-ignore */}
            <span className={classNames('pr-3', open && 'animate-slowBounce')}>{stepIcons[step]}</span>
            <span className='text-2xl'>{name}</span>

            <div
               className="h-px bg-easyBlack/10 static mr-8 ml-8 w-screen translate-x-0"
               aria-hidden="true"
            />
            {!open ? (
               <ChevronUpIcon className="h-14 w-14 text-easyBlack block transform rotate-180 duration-200 animate-in cursor-pointer" aria-hidden="true" onClick={() => setOpen(true)} />
            ) : (
                  <ChevronDownIcon className="h-14 w-14 text-easyBlack block transform rotate-180 duration-200 animate-in cursor-pointer" aria-hidden="true" onClick={() => setOpen(false)} />
            )}
         </div>
         <div className={classNames('ml-6 lg:ml-0', open ? 'block' : 'hidden')}>
            <div className="mt-6 text-lg leading-7 text-easyBlack">
               {description}
            </div>
         </div>
      </div>
   )
}