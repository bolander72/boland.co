import { Title } from '@/components/title'
import { MDXContent } from '@/components/mdx-content'
import { pages } from '@/.velite'

export default function Page() {
  const page = pages.find(page => page.slug === 'home')

  return (
    <section className='space-y-4'>
      <Title
        className='text-nowrap text-left font-brush text-5xl font-medium tracking-wide
          text-[#51819F]'
      >
        {page.title}
      </Title>
      <MDXContent code={page.body} />
    </section>
  )
}
