import { Tag, tags } from '@/.velite'
import { Title } from '@/components/title'
import sharedMetadata from '@/metadata'
import { getTagColorClasses } from '@/lib/tags'
import { cn } from '@/lib/utils'
import Link from 'next/link'

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
          {alphabeticalTags.map((tag: Tag) => (
            <Link key={tag.name} href={tag.permalink}>
              <span className='text-muted-foreground'>#</span>
              <span className={cn(getTagColorClasses(tag.name))}>
                {tag.name}
              </span>
            </Link>
          ))}
        </ul>
      </section>
    </article>
  )
}
