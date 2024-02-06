/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import sharedMetadata from '@/metadata'
import { Paragraph } from '@/components/paragraph'
import { Title } from '@/components/title'

export const metadata = {
   ...sharedMetadata
}

export default function Blog() {
   return (
      <main>
         <section className='space-y-6'>
            <Title className='text-3xl'>Hello, I'm Michael.</Title>
            <Paragraph>I'm a frontend developer, product strategist, and independent consultant. I also write a <Link href='/blog' className='underline text-blue-600'>blog</Link>, which has existed in scribbles, physical notes, and journals for years (and digitally since 2023).</Paragraph>
            <Paragraph>As a developer, I build applications across web and mobile, do contract work for various clients, and build startups and side projects. To read more, please head to my <Link href='/work' className='underline text-blue-600'>work</Link> page covering more of the details.</Paragraph>
            <Paragraph>As a product strategist, I work with founders and companies to turn ideas into products. This includes things like research and analysis, product discovery and design, defining engingeering processes, brand strategy, and more.</Paragraph>
            <Paragraph>In my consulting practice, I partner with companies to empower leaders, cultivate more efficient and effective practices, and increase autonomy and freedom for teams. A more holistic explanation can be found <Link href='/work' className='underline text-blue-600'>here</Link>.</Paragraph>
         </section>
         <section className='mt-6 space-y-6'>
            <div>
               <Paragraph>Want to chat?</Paragraph>
               <Paragraph>Book a time <Link href='https://cal.com/boland/chat' className='underline text-blue-600'>here</Link>.</Paragraph>
            </div>
            <div>
               <Paragraph>Send an email:</Paragraph>
               <Paragraph>hello [at] boland [dot] co.</Paragraph>
            </div>
         </section>
      </main>
   )
}
