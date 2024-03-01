import sharedMetadata from '@/metadata'
import { Paragraph } from '@/components/paragraph'
import { Title } from '@/components/title'
import { Separator } from '@/components/ui/separator'
import { Subtitle } from '@/components/subtitle'
import Quote from '@/components/quote'

export const metadata = {
  ...sharedMetadata
}

export default function Consulting() {
  return (
    <section className='w-full space-y-6'>
      <Title className='text-3xl'>Consulting</Title>
      <Paragraph>
        Here is an intro about who I help and what I do best in my consulting
        practice - split into different foci and areas of activity in
        chronological-ish order.
      </Paragraph>
      <Separator />
      <Subtitle>Product Strategy</Subtitle>
      <Paragraph>
        Alluded to on the home page, I like to work with teams that are ideating
        and often iterating through early stages of product development. The
        goal at this point is to help teams articulate their idea, understand
        the market, and build a product that is clear, feasible, and viable.
        Depending on where they are in their journey, I may join in at one or
        more of the following stages:
      </Paragraph>
      <>
        <Subtitle>Narrative Strategy</Subtitle>
        <Paragraph>
          This is a fancy term for the process of helping teams understand and
          articulate their story. This is important for a number of reasons, but
          primarily because it helps teams understand their own product, and it
          helps them communicate it to others.
        </Paragraph>
        <Paragraph>Copied from Tom Critchlow,</Paragraph>
        <Quote>
          For early stage startups and early stage products the first thing you
          need is some articulation. Something that starts to create clarity
          around the problem, opportunity, or solution. Articulation is the
          first product.
        </Quote>
        <Paragraph>
          Upon completion this is often referred to as a manifesto, vision, or
          thesis. I tend to like the publication Working Theorys&apos; take on
          this, which presents the idea of giving your product a premise. The
          takeaway - this stuff is important.
        </Paragraph>
      </>
      <>
        <Subtitle>Discovery & Design</Subtitle>
        <Paragraph>
          Once you have your premise, it is time to discover more about your
          market. This is the process of understanding the unique problems it
          presents, the current solutions being implemented, and how your
          product fits into the mix.
        </Paragraph>
        <Paragraph>
          This often involves considerable market research, product and
          competitive analyses, and prototyping the core of your product. This
          is a critical, and sometimes difficult stage. Why?
        </Paragraph>
        <Paragraph>
          1) because it requires patience and study of your general industry.
        </Paragraph>
        <Paragraph>
          2) because it allows you to learn the hard lessons of your market and
          the past mistakes of your competitors.
        </Paragraph>
        <Paragraph>
          3) because it sets you up to build a differentiated product, free from
          the baggage of its peers.
        </Paragraph>
        <Paragraph>
          If you find similar products out there, this is also the stage that
          allows you to find a unique angle that can make your product stand out
          - one that is unique to you and your team.
        </Paragraph>
      </>
      <>
        <Subtitle>Engineering Processes</Subtitle>
        <Paragraph>Coming soon</Paragraph>
      </>
    </section>
  )
}
