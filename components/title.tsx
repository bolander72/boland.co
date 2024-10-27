import { cn } from '@/lib/utils'

interface Props {
  className?: string
  children: React.ReactNode
}

export function Title({ className, children }: Props) {
  return (
    <h1 className={cn('font-primary text-4xl font-semibold', className)}>
      {children}
    </h1>
  )
}
