'use client'

import { Title } from '@/components/title'

export default function Error() {
  return (
    <section>
      <Title className='text-xl'>Site Error</Title>
      <p className='text-base'>Something went wrong.</p>
    </section>
  )
}
