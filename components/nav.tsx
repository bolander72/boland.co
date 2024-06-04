import Link from 'next/link'
import { ModeToggle } from './mode-toggle'

export function Nav() {
  return (
    <div className='mx-auto mb-12 max-w-lg px-4'>
      <nav className='flex flex-row space-x-6 space-y-0'>
        <div className='flex w-full items-center justify-between'>
          <div className='flex space-x-4'>
            <Link
              href='/'
              className='text-blue-600 underline dark:text-blue-500'
            >
              about
            </Link>
            <Link
              href='/blog'
              className='text-blue-600 underline dark:text-blue-500'
            >
              blog
            </Link>
            <Link
              href='/bits'
              className='text-blue-600 underline dark:text-blue-500'
            >
              bits
            </Link>
          </div>
          <ModeToggle />
        </div>
      </nav>
    </div>
  )
}
