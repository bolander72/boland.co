import rehypePrettyCode from 'rehype-pretty-code'
import { defineConfig, s } from 'velite'

const slugify = (input: string) =>
  input
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')

const icon = s.enum(['github', 'twitter'])
const count = s
  .object({ total: s.number(), posts: s.number() })
  .default({ total: 0, posts: 0 })

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
    options: {
      name: 'Options',
      pattern: 'options/index.yml',
      single: true,
      schema: s.object({
        name: s.string().max(20),
        title: s.string().max(99),
        description: s.string().max(999).optional(),
        keywords: s.array(s.string()),
        author: s.object({
          name: s.string(),
          //  email: s.string().email(),
          url: s.string().url()
        }),
        links: s.array(
          s.object({
            text: s.string(),
            link: s.string(),
            type: s.enum(['navigation', 'footer', 'copyright'])
          })
        ),
        socials: s.array(
          s.object({
            name: s.string(),
            icon,
            link: s.string().optional(),
            image: s.image().optional()
          })
        )
      })
    },
    categories: {
      name: 'Category',
      pattern: 'categories/*.yml',
      schema: s
        .object({
          name: s.string().max(20),
          slug: s.slug('global', ['admin', 'login']),
          cover: s.image().optional(),
          description: s.string().max(999).optional(),
          count
        })
        .transform(data => ({ ...data, permalink: `/${data.slug}` }))
    },
    tags: {
      name: 'Tag',
      pattern: 'tags/index.yml',
      schema: s
        .object({
          name: s.string().max(20),
          slug: s.slug('global', ['admin', 'login']),
          cover: s.image().optional(),
          description: s.string().max(999).optional(),
          count
        })
        .transform(data => ({ ...data, permalink: `/${data.slug}` }))
    },
    pages: {
      name: 'Page',
      pattern: 'pages/**/*.mdx',
      schema: s
        .object({
          title: s.string().max(99),
          slug: s.slug('global', ['admin', 'login']),
          body: s.mdx()
        })
        .transform(data => ({ ...data, permalink: `/${data.slug}` }))
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
          categories: s.array(s.string()).default(['Blog']),
          tags: s.array(s.string()).default([]),
          meta: meta,
          metadata: s.metadata(),
          excerpt: s.excerpt(),
          content: s.mdx()
        })
        .transform(data => {
          const year = new Date(data.date).getFullYear()
          const month = ('0' + (new Date(data.date).getMonth() + 1)).slice(-2)
          const date = ('0' + new Date(data.date).getDate()).slice(-2)

          return {
            ...data,
            title: data.title.replace(/\\/g, ''), // Remove escaped backslashes
            permalink: `/blog/${year}/${month}/${date}/${data.slug}`
          }
        })
    }
  },
  markdown: {
    // https://rehype-pretty-code.netlify.app/
    rehypePlugins: [rehypePrettyCode]
  },
  prepare: ({ categories, tags, posts }) => {
    const docs = posts.filter(
      i => process.env.NODE_ENV !== 'production' || !i.draft
    )

    // missing categories, tags from posts or courses inlined
    const categoriesFromDoc = Array.from(
      new Set(docs.map(item => item.categories).flat())
    ).filter(i => categories.find(j => j.name === i) == null)
    categories.push(
      ...categoriesFromDoc.map(name => ({
        name,
        slug: slugify(name),
        permalink: '',
        count: { total: 0, posts: 0 }
      }))
    )
    categories.forEach(i => {
      i.count.posts = posts.filter(j => j.categories.includes(i.name)).length
      i.count.total = i.count.posts
      i.permalink = `/${i.slug}`
    })

    const tagsFromDoc = Array.from(
      new Set(docs.map(item => item.tags).flat())
    ).filter(i => tags.find(j => j.name === i) == null)
    tags.push(
      ...tagsFromDoc.map(name => ({
        name,
        slug: slugify(name),
        permalink: '',
        count: { total: 0, posts: 0 }
      }))
    )
    tags.forEach(i => {
      i.count.posts = posts.filter(j => j.tags.includes(i.name)).length
      i.count.total = i.count.posts
      i.permalink = `/tags/${i.slug}`
    })

    // return false to prevent velite from writing data to disk
  }
})
