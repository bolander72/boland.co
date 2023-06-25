import Link from "next/link"
import { TbBrandGithub, TbRss, TbBrandLinkedin, TbBrandVercel, TbCalendar } from "react-icons/tb"
import Image from "next/image"

const navigation = {
   main: [
      // {
      //    name: 'Boland Co.',
      //    href: '#',
      // },
   ],
   social: [
      {
         name: 'LinkedIn',
         href: 'https://www.linkedin.com/in/bolandco/',
         icon: TbBrandLinkedin
      },
      {
         name: 'Vercel',
         href: 'https://vercel.com/bolandco',
         icon: TbBrandVercel
      },
      {
         name: 'GitHub',
         href: 'https://github.com/bolandco',
         icon: TbBrandGithub
      },
      {
         name: 'Calendly',
         href: 'https://calendly.com/bolandco/intro',
         icon: TbCalendar
      },
      {
         name: 'Dead Cereal',
         href: 'https://deadcereal.co',
         icon: TbRss
      }
   ],
}

export default function Footer() {
   return (
      <footer className="mt-36">
         <div className="mx-auto overflow-hidden px-6 py-6">
            {/* <nav className="-mb-6 columns-1 flex flex-col justify-center items-center text-center" aria-label="Footer">
               {navigation.main.map((item) => (
                  <div key={item.name} className="pb-6">
                     <Link href={item.href} className="text-sm leading-6 text-easyBlack">
                        {item.name}
                     </Link>
                  </div>
               ))}
            </nav> */}
            <Link href="/" className="flex justify-center">
               <Image src="/logos/rounded.png" alt="Boland Co." width={48} height={48} />
            </Link>
            <div className="mt-8 flex justify-center space-x-10">
               {navigation.social.map((item) => (
                  <Link key={item.name} href={item.href} className="text-easyBlack">
                     <span className="sr-only">{item.name}</span>
                     <item.icon className="h-6 w-6" aria-hidden="true" />
                  </Link>
               ))}
            </div>
            <p className="mt-6 text-center text-md flex justify-center items-center leading-5 text-easyBlack normal-case">
               &copy; {new Date().getFullYear()} Boland Group, LLC
               <Image src="/icons/illinois.svg" alt="IL" width={30} height={30} />
               All rights reserved.
            </p>
         </div>
      </footer>
   )
}