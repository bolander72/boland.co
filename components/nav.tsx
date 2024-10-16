import CustomLink from './custom-link'

export function Nav() {
  return (
    <header>
      <nav className='mb-12'>
        <div className='flex w-full items-center justify-between'>
          <div className='flex space-x-4 text-lg'>
            <CustomLink href='/'>home</CustomLink>
            <CustomLink href='/notes'>notes</CustomLink>
            <CustomLink href='/colophon'>colophon</CustomLink>
          </div>
        </div>
      </nav>
    </header>
  )
}
