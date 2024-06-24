import Link from 'next/link'
import CustomLink from './custom-link'

export function Nav() {
  return (
    <nav className='mx-auto my-12 max-w-[430px] px-4'>
      <div className='flex w-full items-center justify-between'>
        <div className='space-x-4 text-lg'>
          <CustomLink href='/'>about</CustomLink>
          <CustomLink href='/blog'>blog</CustomLink>
        </div>
      </div>
    </nav>
  )
}
