import { Post } from '@/.velite'
import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
  post?: Post
}

export default function Prose({ children, post }: Props) {
  return (
    <div
      className='prose prose-neutral space-y-6 dark:prose-invert prose-headings:font-normal prose-headings:text-primary prose-h1:text-2xl prose-h2:text-[1.375rem] prose-h3:text-xl prose-p:text-xl prose-p:leading-8 prose-p:text-primary prose-a:font-normal prose-a:text-blue-600 prose-a:underline prose-blockquote:border-l-[1px] prose-blockquote:border-neutral-200 prose-blockquote:text-xl prose-blockquote:font-normal prose-ul:text-primary prose-a:dark:text-blue-500 prose-blockquote:dark:border-neutral-800'
      dangerouslySetInnerHTML={post ? { __html: post.content } : undefined}
    >
      {children ? children : undefined}
    </div>
  )
}