/* eslint-disable react/no-unescaped-entities */
import sharedMetadata from '@/metadata'
import { Paragraph } from '@/components/paragraph'
import { Title } from '@/components/title'
import { Separator } from '@/components/ui/separator'

export const metadata = {
  ...sharedMetadata
}

export default function Now() {
  return (
    <main className='w-full'>
      <section className='space-y-6'>
        <Title className='text-3xl'>/now</Title>
        <div className='flex items-center justify-between text-xl leading-8'>
          What I'm focused on at this point in my life - an exercise to share
          with you a little bit more about me and my endeavors, inspired by Derek
          Sivers' "now".
        </div>
        <Separator />
      </section>
    </main>
  )
}
