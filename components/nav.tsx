import CustomLink from './custom-link'
import { ModeToggle } from './mode-toggle'

export function Nav() {
  return (
    <nav className='mx-auto my-12 max-w-[380px] px-4'>
      <div className='flex w-full items-center justify-between'>
        <div className='flex space-x-4 text-lg font-medium'>
          {/* <Link href='/'>
            <img src='favicon/favicon-white.png' className='invert h-7 w-7 mr-3' alt='boland.co' />
          </Link> */}
          <CustomLink href='/'>home</CustomLink>
          {/* <CustomLink href='/work'>work</CustomLink> */}
          <CustomLink href='/blog'>blog</CustomLink>
        </div>
        {/* <ModeToggle /> */}
      </div>
    </nav>
  )
}
