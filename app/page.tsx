import { MDXContent } from '@/components/mdx-content'
import { pages } from '@/.velite'
import { Title } from '@/components/title'
import sharedMetadata from '@/metadata'
import Prose from '@/components/prose'
import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata = {
  ...sharedMetadata,
  title: `Michael's Page`
}

const socialLinks = [
  {
    title: 'GitHub',
    href: 'https://github.com/bolander72',
    icon: <Github size={22} />
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/bolander72',
    icon: <Linkedin size={22} />
  },
  {
    title: 'Twitter',
    href: 'https://twitter.com/bolander72',
    icon: <Twitter size={22} />
  }
]

export default function Page() {
  const page = pages.find(page => page.slug === 'home')

  return (
    <article className='space-y-6'>
      <div>
        <Title>Hello, I&apos;m Michael.</Title>
      </div>
      <Prose>
        <MDXContent code={page.body} />
      </Prose>
      <div className='flex space-x-3'>
        {socialLinks.map(link => (
          <Link key={link.href} href={link.href} target='_blank'>
            <Button size='icon' variant='outline'>
              {link.icon}
            </Button>
          </Link>
        ))}
      </div>
    </article>
  )
}
