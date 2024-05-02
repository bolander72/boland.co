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
    <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
  </svg>
)

const Nostr = ({ className }: { className?: string }) => (
  <svg viewBox='0 0 256 256' className={className}>
    <path
      className='fill-violet-600 dark:fill-violet-500'
      d='m210.81,116.2v83.23c0,3.13-2.54,5.67-5.67,5.67h-68.04c-3.13,0-5.67-2.54-5.67-5.67v-15.5c.31-19,2.32-37.2,6.54-45.48,2.53-4.98,6.7-7.69,11.49-9.14,9.05-2.72,24.93-.86,31.67-1.18,0,0,20.36.81,20.36-10.72,0-9.28-9.1-8.55-9.1-8.55-10.03.26-17.67-.42-22.62-2.37-8.29-3.26-8.57-9.24-8.6-11.24-.41-23.1-34.47-25.87-64.48-20.14-32.81,6.24.36,53.27.36,116.05v8.38c-.06,3.08-2.55,5.57-5.65,5.57h-33.69c-3.13,0-5.67-2.54-5.67-5.67V55.49c0-3.13,2.54-5.67,5.67-5.67h31.67c3.13,0,5.67,2.54,5.67,5.67,0,4.65,5.23,7.24,9.01,4.53,11.39-8.16,26.01-12.51,42.37-12.51,36.65,0,64.36,21.36,64.36,68.69Zm-60.84-16.89c0-6.7-5.43-12.13-12.13-12.13s-12.13,5.43-12.13,12.13,5.43,12.13,12.13,12.13,12.13-5.43,12.13-12.13Z'
    />
  </svg>
)

const socialLinks = [
  {
    title: 'GitHub',
    href: 'https://github.com/bolander72',
    icon: Github,
    iconClass: 'text-red-600 dark:text-red-500'
  },
  {
    title: 'LinkedIn',
    href: 'https://linkedin.com/in/bolander72',
    icon: Linkedin,
    iconClass: 'text-sky-600 dark:text-sky-500'
  },
  {
    title: 'Twitter',
    href: 'https://twitter.com/bolander72',
    icon: X,
    iconClass: 'fill-primary h-[21px] w-[21px]'
  },
  {
    title: 'Stacker News',
    href: 'https://stacker.news/bolander72',
    icon: Zap,
    iconClass: 'text-yellow-600 dark:text-yellow-500'
  },
  {
    title: 'Nostr',
    href: 'https://njump.me/npub1ge93aqdp0rjewv2tq7f7u5d5mv4p78w2d74539fsjvr042cwcntsqxgusd',
    icon: Nostr,
    iconClass: 'h-[33px] w-[33px]'
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
              <link.icon className={link.iconClass} size={22} />
            </Button>
          </Link>
        ))}
      </div>
    </article>
  )
}
