import { MDXContent } from '@/components/mdx-content'
import { pages } from '@/.velite'
import { Title } from '@/components/title'
import sharedMetadata from '@/metadata'
import Prose from '@/components/prose'
import Link from 'next/link'
import { Github, Linkedin, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata = {
  ...sharedMetadata
}

const X = ({ className }: { className?: string }) => (
  <svg viewBox='0 0 24 24' className={className}>
    <g>
      <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'></path>
    </g>
  </svg>
)

const socialLinks = [
  {
    title: 'GitHub',
    href: 'https://github.com/bolander72',
    icon: Github,
    iconColorClass: 'text-violet-600 dark:text-violet-500'
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/bolander72',
    icon: Linkedin,
    iconColorClass: 'text-blue-600 dark:text-blue-500'
  },
  {
    title: 'Twitter',
    href: 'https://twitter.com/bolander72',
    icon: X,
    iconColorClass: 'fill-primary h-[21px] w-[21px]'
  },
  {
    title: 'Stacker News',
    href: 'https://stacker.news/bolander72',
    icon: Zap,
    iconColorClass: 'text-yellow-600 dark:text-yellow-500'
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
            <Button size='icon' variant='outline' className=''>
              <link.icon className={link.iconColorClass} size={22} />
            </Button>
          </Link>
        ))}
      </div>
    </article>
  )
}
