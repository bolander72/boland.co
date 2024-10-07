import React from 'react'
import CustomLink from '@/components/custom-link'

interface LinkItem {
  name: string
  href: string
  displayText?: string
}

interface LinkSectionProps {
  title: string
  links: LinkItem[]
}

const LinkSection: React.FC<LinkSectionProps> = ({ title, links }) => {
  return (
    <div className='relative rounded-lg border border-primary p-4 text-lg'>
      <span className='absolute -top-4 left-4 bg-white px-2 text-lg text-primary'>
        {title}
      </span>
      <ul className='m-0 list-none p-0'>
        {links.map(link => (
          <li key={link.href}>
            <span className='text-sm'>{link.name}</span>
            <span className='px-1'>-</span>
            <CustomLink href={link.href} target='_blank' className='text-sm'>
              {link.displayText || new URL(link.href).hostname}
            </CustomLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LinkSection
