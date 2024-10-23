import { posts } from '@/.velite'
import { NextResponse } from 'next/server'
import { Feed } from 'feed'

function generateAtomFeed() {
  const feed = new Feed({
    title: "Michael Boland",
    description: "RSS Feed",
    id: "https://boland.co/",
    link: "https://boland.co/",
    language: "en",
    favicon: "https://boland.co/favicon.ico",
    copyright: `© ${new Date().getFullYear()} | Michael Boland`,
    updated: new Date(Math.max(...posts.map(post => new Date(post.date).getTime()))),
    author: {
      name: "Michael Boland",
      link: "https://boland.co"
    }
  });

  posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .forEach(post => {
      feed.addItem({
        title: post.title,
        id: `https://boland.co${post.permalink}`,
        link: `https://boland.co${post.permalink}`,
        description: post.description,
        content: post.html,
        date: new Date(post.date)
      });
    });

  return feed.rss2();
}

export function generateStaticParams() {
  return []
}

export async function GET() {
  const atomFeed = generateAtomFeed()
  return new NextResponse(atomFeed, {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8'
    }
  })
}
