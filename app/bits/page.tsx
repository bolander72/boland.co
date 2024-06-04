import { Title } from '@/components/title'
import Link from 'next/link'
import Post from '@/components/post'

const bits = [
  {
    title: 'Noisy Cover',
    description: 'Generate a noisy visual',
    link: '/bits/noisy-cover'
  },
  {
    title: 'Noisy Shapes',
    description: 'Generate a noisy shapes visual',
    link: '/bits/noisy-shapes'
  }
]

export default function Page() {
  return (
    <section className='space-y-6'>
      <Title>Bits</Title>
      {bits.map(bit => (
        <div key={bit.title}>
          <Link href={bit.link}>
            <Post post={bit} showDate={false} />
          </Link>
        </div>
      ))}
    </section>
  )
}
