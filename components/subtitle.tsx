import { cn } from '@/lib/utils'

interface Props {
  className?: string
  children: React.ReactNode
}

export function Subtitle({ className, children }: Props) {
  return <h2 className={cn(className, 'text-2xl font-semibold')}>{children}</h2>
}
