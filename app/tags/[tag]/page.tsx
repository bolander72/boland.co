import { Post as PostType, Tag as TagType, posts } from '@/.velite'
import { Title } from '@/components/title'
import sharedMetadata from '@/metadata'
import Post from '@/components/post'
import { cn } from '@/lib/utils'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import Link from 'next/link'
import Tag from '@/components/tag'

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
      tags: [
        params.tag,
        ...post.tags.filter((tag: TagType) => tag !== params.tag)
      ]
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
                  className='text-blue-600 underline hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500'
                >
                  Tags
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem className='text-2xl text-primary'>
                <BreadcrumbPage>
                  <Tag tag={params.tag} />
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Title>
      </section>
      <section className='space-y-4'>
        <ul className='space-y-4'>
          {filteredPostsWithRearrangedTags.filter((post) => !post.draft).map((post: PostType) => (
            <Link key={post.permalink} href={post.permalink}>
              <Post post={post} />
            </Link>
          ))}
        </ul>
      </section>
    </article>
  )
}
