import { Post as PostType, Tag, posts } from '@/.velite'
import { Title } from '@/components/title'
import sharedMetadata from '@/metadata'
import Post from '@/components/post'
import { getTagColorClasses } from '@/lib/tags'
import { cn } from '@/lib/utils'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import Link from 'next/link'

export const metadata = {
  ...sharedMetadata,
  title: `Michael's Page`
}

interface Props {
  params: {
    tag: string
  }
}

export default function Page({ params }: Props) {
  const filteredPosts = posts.filter(post => post.tags.includes(params.tag))

  const filteredPostsWithRearrangedTags = filteredPosts.map(post => {
    return {
      ...post,
      tags: [params.tag, ...post.tags.filter((tag: Tag) => tag !== params.tag)]
    }
  })

  return (
    <article className='space-y-6'>
      <section>
        <Title>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className='text-2xl'>
                <Link
                  href='/tags'
                  className='text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500'
                >
                  Tags
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem className='text-2xl text-primary'>
                <BreadcrumbPage>
                  <span className='text-muted-foreground'>#</span>
                  <span className={cn(getTagColorClasses(params.tag))}>
                    {params.tag}
                  </span>
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Title>
      </section>
      <section className='space-y-4'>
        <ul className='space-y-4'>
          {filteredPostsWithRearrangedTags.map((post: PostType) => (
            <Post key={post.permalink} post={post} />
          ))}
        </ul>
      </section>
    </article>
  )
}
