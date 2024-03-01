import sharedMetadata from '@/metadata'
import { Paragraph } from '@/components/paragraph'
import { Title } from '@/components/title'
import { Separator } from '@/components/ui/separator'

export const metadata = {
  ...sharedMetadata
}

export default function Consulting() {
  return (
    <main className='w-full'>
      <section className='space-y-6'>
        <Title className='text-3xl'>Consulting</Title>
        <Paragraph>
          Here is an intro about who I am, who I help, and what I do best in my consulting practice. If you&apos;re interested in learning more, please reach out.
        </Paragraph>
        <Separator />
      </section>
    </main>
  )
}
