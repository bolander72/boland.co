import Link from 'next/link'

export function Nav() {
  return (
    <nav className='mb-12 flex max-w-2xl flex-col space-y-1 sm:flex-row sm:space-x-6 sm:space-y-0'>
      <div className='space-x-6 '>
        <Link href='/' className='text-xl text-blue-600 underline'>
          Home
        </Link>
        <Link href='/work' className='text-xl text-blue-600 underline'>
          Work
        </Link>
        <Link href='/consulting' className='text-xl text-blue-600 underline'>
          Consulting
        </Link>
      </div>
      <div className='space-x-6 '>
        <Link href='/blog' className='text-xl text-blue-600 underline'>
          Blog
        </Link>
        <Link href='/reading' className='text-xl text-blue-600 underline'>
          Reading
        </Link>
        <Link href='/now' className='text-xl text-blue-600 underline'>
          /now
        </Link>
      </div>
    </nav>
  )
}
