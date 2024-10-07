import { posts } from '@/.velite'
import { notFound } from 'next/navigation'
import NotesTitle from '@/components/notes-title'
import Notes from '@/components/notes/notes'

export async function generateStaticParams() {
  return posts.map(post => {
    const [year, month] = post.date.split('-')
    return {
      year,
      month
    }
  })
}

interface Props {
  params: {
    year: string
    month: string
  }
}

export default function Page({ params }: Props) {
  const filteredPosts = posts.filter(post =>
    post.date.startsWith(`${params.year}-${params.month}`)
  )
  const nonDraftPosts = filteredPosts.filter(post => !post.draft)
  const sortedPosts = nonDraftPosts.sort((a, b) => b.date.localeCompare(a.date))

  if (sortedPosts.length === 0) {
    notFound()
  }

  const date = sortedPosts[0].date

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  })

  const formattedDateWords = formattedDate.split(' ').join(', ')

  return (
    <section className='w-full space-y-6'>
      <div className='flex items-baseline justify-between space-x-2'>
        <NotesTitle />
        <span className='text-xs text-muted-foreground'>
          {formattedDateWords}
        </span>
      </div>
      <Notes posts={sortedPosts} />
    </section>
  )
}
