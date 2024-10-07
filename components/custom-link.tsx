import { Link } from 'next-view-transitions'

export default function CustomLink(props: any) {
  const href = props.href
  const isInternalLink = href && href.startsWith('/')

  if (isInternalLink) {
    return (
      <Link
        href={href}
        prefetch={href !== '/rss'}
        className='text-blue-500 hover:text-blue-700 dark:text-blue-500'
      >
        {props.children}
      </Link>
    )
  }

  return (
    <Link
      target='_blank'
      rel='noopener noreferrer'
      {...props}
      className={`${props.className} group inline-flex text-blue-500 hover:text-blue-700 dark:text-blue-500`}
    >
      {props.children}
      {/* <ChevronUp className='-mr-1 h-4 w-4 rotate-45 text-blue-600 transition-all duration-500 group-hover:rotate-90 dark:text-blue-500' /> */}
    </Link>
  )
}
