import { posts } from '@/.velite'
import { notFound } from 'next/navigation'
import NotesTitle from '@/components/notes-title'
import Notes from '@/components/notes/notes'

export async function generateStaticParams() {
  return posts.map(post => {
    const [year] = post.date.split('-')
    return {
      year
    }
  })
}

interface Props {
  params: {
    year: string
  }
}

export default function Page({ params }: Props) {
  const filteredPosts = posts.filter(post => post.date.startsWith(params.year))
  const nonDraftPosts = filteredPosts.filter(post => !post.draft)
  const sortedPosts = nonDraftPosts.sort((a, b) => b.date.localeCompare(a.date))

  if (sortedPosts.length === 0) {
    notFound()
  }

  return (
    <section className='w-full space-y-6'>
      <div className='flex items-baseline justify-between space-x-2'>
        <NotesTitle />
        <span className='text-xs text-muted-foreground'>{params.year}</span>
      </div>
      <Notes posts={sortedPosts} />
    </section>
  )
}
