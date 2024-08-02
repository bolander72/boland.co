import { Rss } from 'lucide-react'
import CustomLink from './custom-link'
import AnimatedTitle from './animated-title'

export default function BlogTitle() {
  return (
    <div className='flex items-baseline space-x-1'>
      <AnimatedTitle text='Blog' className='text-left' />
      <CustomLink href='/rss' prefetch={false}>
        <Rss className='h-5 w-5 animate-fade animate-delay-[1500ms] animate-duration-[2000ms]' />
      </CustomLink>
    </div>
  )
}
