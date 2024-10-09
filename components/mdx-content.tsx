#import * as runtime from 'react/jsx-runtime'
import CustomLink from './custom-link'
import NoteImage from './note-image'
import { Post } from '@/.velite'
import { ReactNode } from 'react'

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

interface Props {
  code: string
  components?: Record<string, React.ComponentType>
  children?: ReactNode
  post?: Post
}

export function MDXContent({ code, components, children, post }: Props) {
  const Component = useMDXComponent(code)

  return (
    <div
      className='space-y-4 prose-headings:font-medium prose-headings:tracking-wide
        prose-headings:text-black prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
        prose-p:text-base prose-p:text-black prose-ol:ml-8 prose-ol:list-decimal
        prose-ol:space-y-1.5 prose-ul:ml-4 prose-ul:space-y-1.5 prose-ul:text-primary'
      dangerouslySetInnerHTML={post ? { __html: post.content } : undefined}
    >
      {post ? undefined : (
        <Component
          components={{
            ...components,
            a: CustomLink,
            NoteImage
          }}
        />
      )}
      {children}
    </div>
  )
}
