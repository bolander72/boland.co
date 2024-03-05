'use client'

import { Paragraph } from '@/components/paragraph'
import { Title } from '@/components/title'

export default function Error() {
  return (
    <section className='w-full space-y-6'>
      <Title>Error</Title>
      <Paragraph>Something went wrong.</Paragraph>
    </section>
  )
}
