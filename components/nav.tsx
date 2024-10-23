import CustomLink from './custom-link'
import { Title } from './title'

export function Nav() {
  return (
    <header>
      <nav className='mb-8'>
        <div className='flex space-y-2 sm:space-y-0 flex-col sm:flex-row w-full items-start sm:items-center justify-between'>
          <CustomLink href='/'>
            <Title
              className="text-left text-5xl font-medium bg-clip-text"
            >
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
