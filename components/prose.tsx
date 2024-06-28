import { Post } from '@/.velite'
import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
  post?: Post
}

export default function Prose({ children, post }: Props) {
  return (
    // prose prose-neutral dark:prose-invert
    <div
      className='space-y-4 prose-headings:text-primary prose-h1:text-2xl prose-h1:font-semibold prose-h2:text-[21px] prose-h2:font-semibold prose-h3:text-[18px] prose-h3:font-semibold prose-p:text-[17px] prose-a:font-normal prose-a:text-blue-600 prose-ul:text-primary prose-a:dark:text-blue-500 prose-blockquote:dark:border-neutral-800'
      dangerouslySetInnerHTML={post ? { __html: post.content } : undefined}
    >
      {children ? children : undefined}
    </div>
  )
}
