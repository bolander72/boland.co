import { Link } from 'next-view-transitions'
import { ReactNode } from 'react'

interface Props {
  href: string
  children: ReactNode
  className?: string
  [key: string]: any // For any additional props
}

export default function CustomLink({
  href,
  children,
  className,
  ...props
}: Props) {
  const isInternalLink = href && href.startsWith('/')

  if (isInternalLink) {
    return (
      <Link
        href={href}
        className='text-blue-700 transition-colors hover:text-blue-500'
        {...props}
      >
        {children}
      </Link>
    )
  }

  return (
    <Link
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={`${className} group inline-flex text-blue-700 transition-colors
        hover:text-blue-500`}
      {...props}
    >
      {children}
      <span className='sr-only'>(opens in new tab)</span>
    </Link>
  )
}
