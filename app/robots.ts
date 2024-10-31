export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/'
      }
    ],
    sitemap: 'https://boland.co/sitemap.xml',
    host: 'https://boland.co'
  }
}
