import { posts } from '@/.velite'
import { notFound } from 'next/navigation'
import NotesTitle from '@/components/notes-title'
import Notes from '@/components/notes/notes'

export async function generateStaticParams() {
  return posts.map(post => {
    const [year, month, date] = post.date.split('-')
    return {
      year,
      month,
      date: date.split('T')[0]
    }
  })
}

interface Props {
  params: Promise<{
    year: string
    month: string
    date: string
  }>
}

export default async function Page(props: Props) {
  const params = await props.params
  const filteredPosts = posts.filter(post =>
    post.date.startsWith(`${params.year}-${params.month}-${params.date}`)
  )
  const nonDraftPosts = filteredPosts.filter(post => !post.draft)
  const sortedPosts = nonDraftPosts.sort((a, b) => b.date.localeCompare(a.date))

  if (sortedPosts.length === 0) {
    notFound()
  }

  const date = sortedPosts[0].date

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <section className='w-full space-y-6'>
      <div className='flex items-baseline justify-between space-x-2'>
        <NotesTitle />
        <span className='text-xs text-muted-foreground'>{formattedDate}</span>
      </div>
      <Notes posts={sortedPosts} />
    </section>
  )
}
