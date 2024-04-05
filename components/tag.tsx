'use client'

import { Tag } from '@/.velite'
import { getTagColorClasses } from '@/lib/tags'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'

interface Props {
  tag: Tag
}

export default function Tag({ tag }: Props) {
  const { push } = useRouter()
  const tagColorClasses = getTagColorClasses(tag)

  return (
    <div
      onClick={e => {
        e.preventDefault()
        push(`/tags/${tag}`)
      }}
    >
      <span className='text-muted-foreground'>#</span>
      <span className={cn(tagColorClasses)}>{tag}</span>
    </div>
  )
}
