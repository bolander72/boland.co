import CustomLink from './custom-link'

export function Nav() {
  return (
    <nav className='mx-auto my-12 max-w-[380px] px-4'>
      <div className='flex w-full items-center justify-between'>
        <div className='flex space-x-4 text-lg'>
          <CustomLink href='/'>home</CustomLink>
          <CustomLink href='/work'>work</CustomLink>
          <CustomLink href='/blog'>blog</CustomLink>
        </div>
      </div>
    </nav>
  )
}
