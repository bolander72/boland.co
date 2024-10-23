import { posts } from '@/.velite'
import { NextResponse } from 'next/server'

function generateRSSFeed() {
  const itemsXml = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(
      post =>
        `<item>
          <title><![CDATA[${post.title}]]></title>
          <link>https://boland.co${post.permalink}</link>
          <description><![CDATA[${post.description}]]></description>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          <content:encoded><![CDATA[${post.html}]]></content:encoded>
        </item>`
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
    <channel>
        <title>Michael Boland</title>
        <link>https://boland.co</link>
        <description>RSS Feed</description>
        ${itemsXml}
    </channel>
  </rss>`
}

export function generateStaticParams() {
  return []
}

export async function GET() {
  const rssFeed = generateRSSFeed()
  return new NextResponse(rssFeed, {
    headers: {
      'Content-Type': 'text/xml'
    }
  })
}
