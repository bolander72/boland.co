import Prose from '@/components/prose'
import { Title } from '@/components/title'

export default function NotFound() {
  return (
    <section className='w-full space-y-6'>
      <Title>Not Found</Title>
      <Prose>
        <p>This page doesn&apos;t exist.</p>
      </Prose>
    </section>
  )
}
