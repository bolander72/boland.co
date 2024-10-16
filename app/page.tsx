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
        className='text-nowrap text-left font-brush text-5xl font-medium tracking-wide
          text-[#51819F]'
      >
        {page.title}
      </Title>
      <MDXContent code={page.body} />
    </section>
  )
}
