import { MDXContent } from '@/components/mdx-content'
import { pages } from '@/.velite'
import { Title } from '@/components/title'
import Prose from '@/components/prose'
import CustomLink from '@/components/custom-link'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/bolander72'
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/bolander72/'
  },
  {
    name: 'Twitter',
    href: 'https://x.com/bolander72'
  }
]

export default function Page() {
  const page = pages.find(page => page.slug === 'home')

  return (
    <section className='space-y-4'>
      <Title>Hello, I&apos;m Michael.</Title>
      <Prose>
        <MDXContent code={page.body} />
      </Prose>
      <div className='flex space-x-4 text-[17px]'>
        {socialLinks.map(link => (
          <CustomLink key={link.href} href={link.href}>
            {link.name}
          </CustomLink>
        ))}
      </div>
    </section>
  )
}
