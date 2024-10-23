import CustomLink from './custom-link'
import { Title } from './title'

export function Nav() {
  return (
    <header>
      <nav className='mb-8'>
        <div
          className='flex w-full flex-col items-start justify-between space-y-2 sm:flex-row
            sm:items-center sm:space-y-0'
        >
          <CustomLink href='/'>
            <Title className='bg-clip-text text-left text-5xl font-medium'>
              Michael Boland
            </Title>
          </CustomLink>
          <div className='flex space-x-4 text-lg'>
            <CustomLink href='/projects'>projects</CustomLink>
            <CustomLink href='/notes'>notes</CustomLink>
            {/* <CustomLink href='/colophon'>colophon</CustomLink> */}
          </div>
        </div>
      </nav>
    </header>
  )
}
