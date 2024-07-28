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
      className='space-y-4 prose-h1:text-3xl prose-h1:font-medium prose-h2:text-2xl prose-h2:font-medium prose-h3:text-xl prose-h3:font-medium prose-p:text-[21px] prose-p:font-serif prose-a:text-blue-600 prose-ul:text-primary prose-a:dark:text-blue-500'
      dangerouslySetInnerHTML={post ? { __html: post.content } : undefined}
    >
      {children ? children : undefined}
    </div>
  )
}
