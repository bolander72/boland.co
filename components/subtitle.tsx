import { cn } from '@/lib/utils'

interface Props {
  className?: string
  children: React.ReactNode
}

export function Subtitle({ className, children }: Props) {
  return (
    <h2 className={cn('text-[21px] font-semibold', className)}>{children}</h2>
  )
}
