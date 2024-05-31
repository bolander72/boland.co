'use client'

import Prose from '@/components/prose'
import { Title } from '@/components/title'

export default function Error() {
  return (
    <section className='w-full space-y-6'>
      <Title>Error</Title>
      <Prose>
        <p>Something went wrong.</p>
      </Prose>
    </section>
  )
}
