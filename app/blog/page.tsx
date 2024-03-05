import { Title } from '@/components/title'
import { posts } from '@/.velite'

// TODO: use /slug-${id} for post titles

export default function Blog() {
  return (
    <section className='w-full space-y-6'>
      <Title className='text-3xl'>Blog</Title>
    </section>
  )
}
