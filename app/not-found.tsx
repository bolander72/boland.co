import { Paragraph } from '@/components/paragraph'
import { Title } from '@/components/title'

export default function NotFound() {
  return (
    <section className='w-full space-y-6'>
      <Title>Not Found</Title>
      <Paragraph>This page doesn&apos;t exist.</Paragraph>
    </section>
  )
}
