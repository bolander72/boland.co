import { MDXContent } from '@/components/mdx-content'
import { pages } from '@/.velite'
import { Title } from '@/components/title'
import sharedMetadata from '@/metadata'
import Prose from '@/components/prose'
import { Github, Linkedin, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

type Props = {
  params: {
    slug: string
  }
}

export const metadata = {
  ...sharedMetadata,
  title: 'about | Michael Boland'
}

export function generateStaticParams(): Props['params'][] {
  return pages.map(() => ({ slug: '/' }))
}

const socials = [
  {
    icon: Github,
    href: 'https://github.com/bolander72'
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/bolander72'
  },
  {
    icon: Twitter,
    href: 'https://twitter.com/bolander72'
  }
]

export default function PagePage() {
  const page = pages.find(page => page.slug === 'about')

  return (
    <article className='space-y-6'>
      <Title>{page.title}</Title>
      <Prose>
        <MDXContent code={page.body} />
      </Prose>
      <div className='flex'>
        {socials.map(({ icon: Icon, href }) => (
          <Link
            key={href}
            href={href}
            target='_blank'
            referrerPolicy='no-referrer'
          >
            <Button variant='ghost' size='icon'>
              <Icon />
            </Button>
          </Link>
        ))}
      </div>
    </article>
  )
}
