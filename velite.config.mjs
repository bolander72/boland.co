import rehypePrettyCode from 'rehype-pretty-code'
import { defineConfig, s } from 'velite'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

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

          // Convert MDX to HTML
          const processedContent = await unified()
            .use(remarkParse)
            .use(remarkRehype)
            .use(rehypePrettyCode)
            .use(rehypeStringify)
            .process(data.content)

            console.log('content', processedContent)

          return {
            ...data,
            title: data.title.replace(/\\/g, ''), // Remove escaped backslashes
            permalink: `/notes/${year}/${month}/${date}/${data.slug}`,
            html: String(processedContent.value)
          }
        })
    }
  },
  markdown: {
    // https://rehype-pretty-code.netlify.app/
    rehypePlugins: [rehypePrettyCode, rehypeStringify]
  }
})
