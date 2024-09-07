import * as runtime from 'react/jsx-runtime'
import CustomLink from './custom-link'
import BlogImage from './blog-image'
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
      className='space-y-4 prose-headings:font-montreal prose-headings:font-medium
        prose-headings:tracking-wide prose-headings:text-rich-black prose-h1:text-3xl
        prose-h2:text-2xl prose-h3:text-xl prose-p:text-lg prose-p:text-rich-black
        prose-ul:text-primary'
      dangerouslySetInnerHTML={post ? { __html: post.content } : undefined}
    >
      {post ? undefined : (
        <Component
          components={{
            ...components,
            a: CustomLink,
            BlogImage
          }}
        />
      )}
      {children}
    </div>
  )
}
