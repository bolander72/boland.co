import Link from 'next/link'

export function Nav() {
  return (
    <nav className='mb-12 mt-4 max-w-2xl space-x-6'>
      <Link href='/' className='text-xl text-blue-600 underline'>
        Home
      </Link>
      <Link href='/work' className='text-xl text-blue-600 underline'>
        Work
      </Link>
      <Link href='/blog' className='text-xl text-blue-600 underline'>
        Blog
      </Link>
    </nav>
  )
}
