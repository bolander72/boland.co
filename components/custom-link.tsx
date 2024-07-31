import Link from 'next/link'

export default function CustomLink(props: any) {
  const href = props.href
  const isInternalLink = href && href.startsWith('/')

  if (isInternalLink) {
    return (
      <Link
        href={href}
        className='text-blue-600 hover:underline dark:text-blue-500'
      >
        {props.children}
      </Link>
    )
  }

  return (
    <Link
      target='_blank'
      className='group inline-flex text-blue-600 hover:underline dark:text-blue-500'
      rel='noopener noreferrer'
      {...props}
    >
      {props.children}
      {/* <ChevronUp className='-mr-1 h-4 w-4 rotate-45 text-blue-600 transition-all duration-500 group-hover:rotate-90 dark:text-blue-500' /> */}
    </Link>
  )
}
