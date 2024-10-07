import { cn } from '@/lib/utils'

interface Props {
  className?: string
  children: React.ReactNode
}

export function Title({ className, children }: Props) {
  return <h1 className={cn('text-3xl font-medium', className)}>{children}</h1>
}
