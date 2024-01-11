/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export function Splash() {
   return (
      <section className='space-y-6'>
         <h1 className='text-3xl'>Hi, I'm Michael.</h1>
         <p className='text-xl'>I'm a writer and consultant based in Chicago. My writing can be found on my <Link href='/blog' className='underline text-blue-600'>blog</Link>, which has existed in scribbles, physical notes, and journals for years and digitally since 2023.</p>
         <div>
            <p className='text-xl'>My work consists of a few different practices:</p>
            <ul className='list-disc list-inside indent-6'>
               <li className='text-xl'>coaching for culture and sustainable organizations</li>
               <li className='text-xl'>1:1 executive sparring, conversations, and ideation</li>
               <li className='text-xl'>teaching and facilitating (tech, product, design)</li>
            </ul>
         </div>
         <p className='text-xl'>Professionally, I call myself a freelance consultant given the word salad that each of the above bullet points can produce. That's where the blog and longish-form writing come in.</p>
         <p className='text-xl'>I'm also a software engineer and tech entrepreneur, having learned UX research and design followed by web development while in pursuit of a graduate degree in psychology.</p>
         <p className='text-xl'>I enjoy meeting new people </p>
      </section>
   )
}