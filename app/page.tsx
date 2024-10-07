import CustomLink from '@/components/custom-link'
import { Title } from '@/components/title'
import LinkSection from '@/components/link-section'

export default function Page() {
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

  return (
    <section className='space-y-4'>
      <Title
        className='text-nowrap text-left font-brush text-5xl tracking-wide !text-[#51819F]
          sm:text-7xl md:text-8xl lg:text-[7rem]'
      >
        Hello, I&apos;m Michael.
      </Title>
      <div className='gap-8 sm:grid sm:grid-cols-2'>
        <div
          className='col-span-1 space-y-4 prose-headings:font-medium prose-headings:tracking-wide
            prose-headings:text-rich-black prose-h1:text-3xl prose-h2:text-2xl
            prose-h3:text-xl prose-p:text-lg prose-p:text-rich-black prose-ul:text-lg
            prose-ul:text-primary prose-li:text-lg md:col-span-1'
        >
          <p>As a kid, I loved making things with Legos.</p>
          <p>
            Now as an adult, I enjoy making things with code. This usually
            involves designing and developing digital products. Occasionally, it
            is making art, writing, or photography.
          </p>
          <p>
            Want to team up?{' '}
            <CustomLink href='https://cal.com/bolander72' target='_blank'>
              Book a call
            </CustomLink>
            .
          </p>
          <p>
            <span className='italic'>WAIT.</span> Before you do that, read{' '}
            <CustomLink href='/credo'>this</CustomLink> to make sure we&apos;re a
            good fit. If all that looks good, let&apos;s talk.
          </p>
        </div>
        <div className='mt-8 space-y-8 sm:mt-4'>
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
