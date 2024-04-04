import { Title } from '@/components/title'
import { Post, posts } from '@/.velite'
import Link from 'next/link'
import { Link2 } from 'lucide-react'
import sharedMetadata from '@/metadata'

export const metadata = {
  ...sharedMetadata,
  title: 'blog | Michael Boland'
}

interface MappedPosts {
  years: {
    [year: string]: {
      [month: string]: Post[]
    }
  }
}

const mappedPosts = (): MappedPosts => {
  const postsByYearAndMonth = {} as MappedPosts['years']

  posts.forEach(post => {
    const year = new Date(post.date).getFullYear()
    const readableMonth = new Date(post.date).toLocaleString('default', {
      month: 'long'
    })

    if (!postsByYearAndMonth[year]) {
      postsByYearAndMonth[year] = {}
    }

    if (!postsByYearAndMonth[year][readableMonth]) {
      postsByYearAndMonth[year][readableMonth] = []
    }

    postsByYearAndMonth[year][readableMonth].push({
      ...post
    })
  })

  return {
    years: postsByYearAndMonth
  }
}

export default function Blog() {
  const data = mappedPosts()

  return (
    <section className='w-full space-y-6'>
      <Title>Blog</Title>
      {/* {Object.entries(data.years).map(([year, months], index) => (
        <Fragment key={index}>
          <Subtitle>{year}</Subtitle>
          {Object.entries(months).map(([month, items], index) => (
            <Fragment key={index}>
              <Subtitle className='pb-6 text-xl font-normal italic'>{month}</Subtitle> */}
      <div className='space-y-6'>
        {posts.map(
          ({ title, excerpt, content, tags, permalink, date }: Post) => {
            const formattedDate = new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })

            return (
              <Link key={permalink} href={permalink}>
                <div className='text-xl' key={title}>
                  {title}
                  <Link2 className='ml-px inline-block h-[18px] text-blue-600 dark:text-blue-500' />
                  <div className='text-lg text-muted-foreground'>
                    {formattedDate}
                  </div>
                  <div className='flex text-lg text-muted-foreground'>
                    {tags.join(', ')}
                  </div>
                </div>
              </Link>
            )
          }
        )}
      </div>
      {/* </Fragment>
          ))}
        </Fragment>
      ))} */}
    </section>
  )
}
