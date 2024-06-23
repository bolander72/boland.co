import { ChevronUp } from 'lucide-react'
import Link from 'next/link'

export default function CustomLink(props: any) {
  const href = props.href
  const isInternalLink = href && href.startsWith('/')

  if (isInternalLink) {
    return (
      <Link href={href} className='text-blue-600 dark:text-blue-500'>
        {props.children}
      </Link>
    )
  }

  return (
    <div className='inline-flex flex-row -space-x-px'>
      <Link
        target='_blank'
        className='text-blue-600 dark:text-blue-500'
        rel='noopener noreferrer'
        {...props}
      />
      <ChevronUp className='h-4 w-4 rotate-45 text-blue-600 dark:text-blue-500' />
    </div>
  )
}
