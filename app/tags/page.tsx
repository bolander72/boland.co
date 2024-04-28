import { Tag as TagType, tags } from '@/.velite'
import { Title } from '@/components/title'
import sharedMetadata from '@/metadata'
import Link from 'next/link'
import Tag from '@/components/tag'
import { Button } from '@/components/ui/button'

export const metadata = {
  ...sharedMetadata
}

export default function Page() {
  const alphabeticalTags = tags.sort((a, b) => a.name.localeCompare(b.name))

  return (
    <article className='space-y-6'>
      <section>
        <Title>Tags</Title>
      </section>
      <section className='space-y-4'>
        <div className='flex flex-col space-y-4'>
          {alphabeticalTags.map((tag: TagType) => (
            <Link key={tag.name} href={tag.permalink} className='max-w-0'>
              <Button
                key={tag.name}
                variant='outline'
                size='lg'
                className='text-lg'
              >
                <Tag tag={tag.name} />
              </Button>
            </Link>
          ))}
        </div>
      </section>
    </article>
  )
}
