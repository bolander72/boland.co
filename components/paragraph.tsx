import { cn } from '@/lib/utils'

interface Props {
  className?: string
  children: React.ReactNode
}

export function Paragraph({ className, children }: Props) {
  return <p className={cn('text-xl leading-8', className)}>{children}</p>
}
