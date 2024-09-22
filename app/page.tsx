import { MDXContent } from '@/components/mdx-content'
import { pages } from '@/.velite'
import CustomLink from '@/components/custom-link'
import { Title } from '@/components/title'

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
      <div className='font-brush text-5xl tracking-wide text-[#51819F]'>
        <Title className='text-left font-brush text-5xl'>Hello, I&apos;m Michael.</Title>
      </div>
      <MDXContent code={page.body} />
      <div className='flex space-x-4 text-lg'>
        {socialLinks.map(link => (
          <CustomLink key={link.href} href={link.href}>
            {link.name}
          </CustomLink>
        ))}
      </div>
    </section>
  )
}
