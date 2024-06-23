import Link from 'next/link'
import { ModeToggle } from './mode-toggle'

export function Nav() {
  return (
    <nav className='mx-auto my-12 max-w-[430px] px-4'>
      <div className='flex w-full items-center justify-between'>
        <div className='space-x-4 text-[17px]'>
          <Link href='/' className='text-blue-600 underline dark:text-blue-500'>
            about
          </Link>
          <Link
            href='/blog'
            className='text-blue-600 underline dark:text-blue-500'
          >
            blog
          </Link>
        </div>
        <ModeToggle />
      </div>
    </nav>
  )
}
