import { cn } from '@/lib/utils'
import { ReactNode } from 'react'
import { Separator } from './ui/separator'
import { Paragraph } from './paragraph'

interface Props {
  children: ReactNode
  className?: string
}

export default function Quote({ children, className }: Props) {
  return (
    <blockquote className={cn(className, 'flex text-xl leading-8')}>
      <Separator orientation='vertical' className='mr-6 h-auto' />
      <Paragraph>&quot;{children}&quot;</Paragraph>
    </blockquote>
  )
}
