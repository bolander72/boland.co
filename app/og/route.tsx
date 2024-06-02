import { NextRequest } from 'next/server'
import BlogImage from './blog-image'
import DefaultImage from './default-image'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const title = searchParams.get('title')
  const description = searchParams.get('description')

  if (title || description) {
    return BlogImage({ title, description })
  }

  return DefaultImage()
}
