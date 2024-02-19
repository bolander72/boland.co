import sharedMetadata from '@/metadata'
import { Paragraph } from '@/components/paragraph'
import { Title } from '@/components/title'

export const metadata = {
  ...sharedMetadata
}

// TODO: use /slug-${id} for post titles

export default function Blog() {
  return (
    <main className='w-full'>
      <section className='space-y-6'>
        <Title className='text-3xl'>Latest Writing</Title>
      </section>
    </main>
  )
}
