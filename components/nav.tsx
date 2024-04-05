import Link from 'next/link'
import { ModeToggle } from './mode-toggle'

export function Nav() {
  return (
    <div className='mx-auto mb-12 max-w-lg px-4'>
      <nav className='flex flex-row space-x-6 space-y-0'>
        <div className='flex w-full items-center justify-between'>
          <Link href='/' className='text-lg'>
            boland.co
          </Link>
          <ModeToggle />
        </div>
      </nav>
    </div>
  )
}
