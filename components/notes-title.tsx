import { Rss } from 'lucide-react'
import CustomLink from './custom-link'
import { Title } from './title'

export default function NotesTitle() {
  return (
    <div className='flex items-baseline space-x-1'>
      <Title>Notes</Title>
      <CustomLink href='/rss'>
        <Rss className='h-5 w-5' />
      </CustomLink>
    </div>
  )
}
