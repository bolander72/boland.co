import rehypePrettyCode from 'rehype-pretty-code'
import { defineConfig, s } from 'velite'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import rehypeSanitize from 'rehype-sanitize'
import rehypeFormat from 'rehype-format'

const meta = s
  .object({
    title: s.string().optional(),
    description: s.string().optional(),
    keywords: s.array(s.string()).optional()
  })
  .default({})

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true
  },
  collections: {
    pages: {
      name: 'Page',
      pattern: 'pages/**/*.mdx',
      schema: s
        .object({
          title: s.string().max(99),
          slug: s.slug('global', ['admin', 'login']),
          body: s.mdx(),
          date: s.isodate().optional()
        })
        .transform(data => ({
          ...data,
          permalink: `/${data.slug}`
        }))
    },
    posts: {
      name: 'Post',
      pattern: 'posts/**/*.mdx',
      schema: s
        .object({
          title: s.string().max(99),
          slug: s.slug('post'),
          date: s.isodate(),
          updated: s.isodate().optional(),
          cover: s.image().optional(),
          video: s.file().optional(),
          description: s.string().max(999).optional(),
          draft: s.boolean().default(false),
          featured: s.boolean().default(false),
          categories: s.array(s.string()).default(['Notes']),
          tags: s.array(s.string()).default([]),
          meta: meta,
          metadata: s.metadata(),
          excerpt: s.excerpt(),
          content: s.mdx(),
          raw: s.raw()
        })
        .transform(async (data) => {
          const year = new Date(data.date).getFullYear()
          const month = ('0' + (new Date(data.date).getMonth() + 1)).slice(-2)
          const date = ('0' + new Date(data.date).getDate()).slice(-2)

          // Process the content to pure HTML
          const file = await unified()
          .use(remarkParse) // Convert into markdown AST
          .use(remarkRehype) // Transform to HTML AST
          .use(rehypeSanitize) // Sanitize HTML input
          .use(rehypeFormat) // Format HTML with proper spacing and indentation
          .use(rehypeStringify) // Convert AST into serialized HTML
          .process(data.raw)

          return {
            ...data,
            title: data.title.replace(/\\/g, ''), // Remove escaped backslashes
            permalink: `/notes/${year}/${month}/${date}/${data.slug}`,
            html: String(file)
          }
        })
    }
  },
  markdown: {
    // https://rehype-pretty-code.netlify.app/
    rehypePlugins: [rehypePrettyCode, rehypeStringify]
  }
})
