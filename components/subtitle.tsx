import { cn } from '@/lib/utils'

interface Props {
  className?: string
  children: React.ReactNode
}

export function Subtitle({ className, children }: Props) {
  return (
    <h2 className={cn('font-montreal text-2xl font-medium', className)}>
      {children}
    </h2>
  )
}
