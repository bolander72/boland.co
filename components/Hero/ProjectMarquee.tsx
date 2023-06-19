import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectMarquee() {
   const rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

   return (
      <div className="relative w-screen py-6 sm:py-8 cursor-pointer" id='method'>
         <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-5">
            {[
               "/mockups/mainline.svg",
               "/mockups/mainline.svg",
               "/mockups/mainline.svg",
               "/mockups/mainline.svg",
               "/mockups/mainline.svg"
            ].map((image, imageIndex) => (
               <div
                  key={imageIndex}
                  className={classNames(
                     'relative aspect-[10/10] w-72 flex-none overflow-hidden sm:w-[22rem] rounded-2xl shadow-xl hover:shadow-2xl scale-100 transition-all hover:scale-105',
                     // rotations[imageIndex % rotations.length]
                  )}
               >
                  <Link href="https://getmainline.io" target="_blank">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                     <Image
                        src={image}
                        alt=""
                        sizes="(min-width: 640px) 18rem, 11rem"
                        className="absolute inset-0 h-full w-full object-cover"
                        fill
                     />
                  </Link>
               </div>
            ))}
         </div>
      </div>
   );
};