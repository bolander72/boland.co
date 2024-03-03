/* eslint-disable react/no-unescaped-entities */
import sharedMetadata from '@/metadata'
import { Paragraph } from '@/components/paragraph'
import { Title } from '@/components/title'
import { Separator } from '@/components/ui/separator'
import { Subtitle } from '@/components/subtitle'
import Link from 'next/link'

export const metadata = {
  ...sharedMetadata
}

export default function Now() {
  return (
    <section className='w-full space-y-6'>
      <Title>Now</Title>
      <Paragraph>
        What I'm focused on at this point in my life - an exercise to share with
        you a little bit more about me and my endeavors, inspired by Derek
        Sivers' "now". You can view my official page{' '}
        <Link
          href='https://nownownow.com/p/Ggbn'
          className='text-blue-600 underline'
        >
          here
        </Link>
        .
      </Paragraph>
      <Paragraph>
        Updated February 19th, 2024 on a brisk, sunny day in the Ozarks.
      </Paragraph>
      <Separator />
      <>
        <Subtitle>New Clients in a New Year</Subtitle>
        <Paragraph>
          After ending a gig with a generative AI startup at the end of 2023, I
          began 2024 feeling the weight of work (and therefore financial)
          precarity. However, as of now, I am working as a founding product
          engineer with Mainline Alpha, a new startup in the crypto space. It
          feels good.
        </Paragraph>
        <Paragraph>
          When it rains, it pours. I've also been approached by a couple other
          potential clients - one in the travel and luxury rewards space and
          another in the world of astrology and wellness. I'm excited to see
          where these conversations lead.
        </Paragraph>
      </>
      <>
        <Subtitle>Writing More, Writing Often</Subtitle>
        <Paragraph>
          I used to blog in college when I traveled, but it fell by the wayside
          as life happened and domesticated monotony ran its course. Because of
          that, it has taken a while to feel comfortable writing again when I'm
          not trying to LARP as a Bourdain-inspired digital nomad.
        </Paragraph>
        <Paragraph>
          A goal for 2024 is to write more and write often. I've been working on
          a few pieces that I'm excited to share with you soon. I'm also
          considering starting a newsletter to share my thoughts and ideas on a
          more regular basis.
        </Paragraph>
        <Paragraph>
          I might have found some valuable nuggets from my time in the tech
          industry and startups, and I'd like to explore them with you.
        </Paragraph>
      </>
      <>
        <Subtitle>Traveling Less, Traveling Local</Subtitle>
        <Paragraph>
          An intention I have for 2024 is to travel less and travel local. I've
          been fortunate to have traveled a lot in my life, and I've been
          fortunate to have met many wonderful people during those travels.
        </Paragraph>
        <Paragraph>
          I've lived in places like Tirana, Albania and Quepos, Costa Rica, yet
          I haven't traveled to quaint towns, state parks or other interesting
          areas in my own county or state. This makes me sad and I want to fix
          it.
        </Paragraph>
      </>
      <>
        <Subtitle>Uncertain Future Planning</Subtitle>
        <Paragraph>
          I am starting to loosely plan and prepare for moving to a new state in
          2025. My wife will have finished her medical residency and will
          hopefully have a job lined up. I'm excited to see where we end up.
        </Paragraph>
        <Paragraph>
          The gloom of rent versus buy and the unaffordability of homes is real
          right now. Also, moving sucks.
        </Paragraph>
      </>
    </section>
  )
}
