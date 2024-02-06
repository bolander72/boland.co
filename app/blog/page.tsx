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
        <Title className='text-3xl'>Blog</Title>
      </section>
    </main>
  )
}
