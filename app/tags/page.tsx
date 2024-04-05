import { Tag as TagType, tags } from '@/.velite'
import { Title } from '@/components/title'
import sharedMetadata from '@/metadata'
import Link from 'next/link'
import Tag from '@/components/tag'

export const metadata = {
  ...sharedMetadata,
  title: `Michael's Page`
}

export default function Page() {
  const alphabeticalTags = tags.sort((a, b) => a.name.localeCompare(b.name))

  return (
    <article className='space-y-6'>
      <section>
        <Title>Tags</Title>
      </section>
      <section className='space-y-4'>
        <ul className='flex flex-col space-y-4'>
          {alphabeticalTags.map((tag: TagType) => (
            <Link key={tag.name} href={tag.permalink}>
              <Tag tag={tag.name} />
            </Link>
          ))}
        </ul>
      </section>
    </article>
  )
}
