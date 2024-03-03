'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Nav() {
  const pathname = usePathname()

  if (pathname === '/links') {
    return null
  }

  return (
    <nav className='mb-12 flex max-w-2xl flex-col space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0'>
      <div className='space-x-6 '>
        <Link href='/' className='text-xl text-blue-600 underline'>
          home
        </Link>
        <Link href='/work' className='text-xl text-blue-600 underline'>
          work
        </Link>
        <Link href='/blog' className='text-xl text-blue-600 underline'>
          blog
        </Link>
      </div>
      <div className='space-x-6 '>
        {/* <Link href='/blog' className='text-xl text-blue-600 underline'>
          Blog
        </Link> */}
        <Link href='/reading' className='text-xl text-blue-600 underline'>
          reading
        </Link>
        <Link href='/now' className='text-xl text-blue-600 underline'>
          now
        </Link>
        <Link href='/links' className='text-xl text-blue-600 underline'>
          links
        </Link>
      </div>
      {/* <div className='space-x-6 '>
        <Link href='/links' className='text-xl text-blue-600 underline'>
          links
        </Link>
      </div> */}
    </nav>
  )
}
