'use client'

import { Title } from '@/components/title'
import { posts } from '@/.velite'
import Link from 'next/link'
import Post from '@/components/post'
import sharedMetadata from '@/metadata'
import useNoisyCover from '@/hooks/use-noisy-cover'

export default function Page() {
   const { id } = useNoisyCover()

   return (
      <section className='w-full space-y-6'>
         <Title>Bits</Title>
         <div className='relative'>
            <Link href='/bits/noisy-cover'>
               <canvas className='aspect-video w-full rounded-2xl border' id={id} />
               <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary text-2xl font-semibold bg-secondary p-3 rounded-lg'>
                  Noisy Cover
               </div>
            </Link>
         </div>
      </section>
   )
}
