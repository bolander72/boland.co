'use client'

import { Title } from '@/components/title'

export default function Error() {
  return (
    <section className='w-full space-y-6'>
      <Title>Error</Title>
      <p className='text-primary/85'>Something went wrong.</p>
    </section>
  )
}
