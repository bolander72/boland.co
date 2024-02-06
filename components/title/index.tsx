import { cn } from '@/lib/utils'

interface Props {
  className?: string
  children: React.ReactNode
}

export function Title({ className, children }: Props) {
  return <h1 className={cn(className, 'text-3xl')}>{children}</h1>
}
