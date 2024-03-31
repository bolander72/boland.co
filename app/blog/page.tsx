import { Title } from '@/components/title'
import { Post, posts } from '@/.velite'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Link2 } from 'lucide-react'

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

    console.log(post)

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
              <Link key={permalink} href={permalink} className=''>
                <Card className='border-none shadow-none'>
                  <CardHeader className='mx-0 p-0'>
                    <div>
                      <CardTitle className='text-xl font-normal'>
                        {title}
                        <Link2 className='ml-px inline-block h-[18px] text-blue-600 dark:text-blue-500' />
                      </CardTitle>
                      <CardDescription className='text-lg'>
                        {formattedDate}
                      </CardDescription>
                      {/* <CardDescription className='text-lg'>{excerpt}</CardDescription> */}
                    </div>
                  </CardHeader>
                  {/* <CardContent>
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                      </CardContent> */}
                  {tags.length > 0 && (
                    <CardFooter>
                      <div className='flex text-lg text-muted-foreground'>
                        {tags.join(', ')}
                      </div>
                    </CardFooter>
                  )}
                </Card>
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
