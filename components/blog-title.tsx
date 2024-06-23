import { Rss } from 'lucide-react'
import CustomLink from './custom-link'
import { Title } from './title'

export default function BlogTitle() {
  return (
    <div className='flex items-center space-x-1'>
      <Title>Blog</Title>
      <CustomLink href='/rss'>
        <Rss className='h-5 w-5' />
      </CustomLink>
    </div>
  )
}
