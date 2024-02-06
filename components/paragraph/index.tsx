import { cn } from '@/lib/utils'

interface Props {
  className?: string
  children: React.ReactNode
}

export function Paragraph({ className, children }: Props) {
  return <p className={cn(className, 'text-xl leading-8')}>{children}</p>
}
