import { Post, posts } from '@/.velite'

export default async function sitemap() {
  let blogs = posts.map((post: Post) => {
    return {
      url: `https://boland.co${post.permalink}`,
      lastModified: new Date(post.date).toISOString().split('T')[0]
    }
  })

  let routes = ['', '/blog', '/now'].map(route => ({
    url: `https://boland.co${route}`,
    lastModified: new Date().toISOString().split('T')[0]
  }))

  return [...routes, ...blogs]
}
