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
      className='space-y-4 prose-headings:font-montreal prose-headings:font-medium prose-headings:tracking-wide prose-headings:text-rich-black prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-lg prose-p:text-rich-black prose-ul:text-primary'
      dangerouslySetInnerHTML={post ? { __html: post.content } : undefined}
    >
      {children ? children : undefined}
    </div>
  )
}
