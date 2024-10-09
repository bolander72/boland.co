import { Title } from '@/components/title'
import LinkSection from '@/components/link-section'
import { MDXContent } from '@/components/mdx-content'
import { pages } from '@/.velite'

const currentWorkLinks = [
  { name: 'Carry', href: 'https://carry.com' },
  { name: 'Mainline', href: 'https://getmainline.io' },
  { name: 'Bitcoin Layers', href: 'https://bitcoinlayers.org' }
]

const elsewhereLinks = [
  { name: 'X', href: 'https://x.com/bolander72', displayText: '@bolander72' },
  {
    name: 'Nostr',
    href: 'https://primal.net/p/npub1ge93aqdp0rjewv2tq7f7u5d5mv4p78w2d74539fsjvr042cwcntsqxgusd',
    displayText: 'npub...usd'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/bolander72',
    displayText: '@bolander72'
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/bolander72/',
    displayText: '@bolander72'
  }
]

const blogLinks = [
  { name: 'Ribbonfarm', href: 'https://ribbonfarm.com' },
  { name: 'Jihad Esmail', href: 'https://jihad.house' },
  { name: 'Product Lost', href: 'https://hipcityreg.substack.com' },
  { name: 'Elisabeth Nicula', href: 'https://elisabethnicula.com' }
]

export default function Page() {
  const page = pages.find(page => page.slug === 'home')

  return (
    <section className='space-y-4'>
      <Title
        className='text-nowrap text-left font-brush text-5xl tracking-wide !text-[#51819F]
          sm:text-7xl md:text-8xl lg:text-[6.75rem] xl:text-9xl font-medium'
      >
        {page.title}
      </Title>
      <div className='gap-8 sm:grid sm:grid-cols-2'>
        <MDXContent code={page.body} />
        <div className='mt-12 space-y-8 sm:mt-4'>
          <LinkSection
            title='Currently working with'
            links={currentWorkLinks}
          />
          <LinkSection title='Socials' links={elsewhereLinks} />
          <LinkSection title='Blog wall' links={blogLinks} />
        </div>
      </div>
    </section>
  )
}
