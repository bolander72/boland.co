import { cn } from '@/lib/utils'

const calculateDelay = (index: number): number =>
  index <= 4 ? index * 250 : 5 * 250 + 1750 + (index - 6) * 150

interface Props {
  text: string
  className?: string
  charClassName?: string
}

export default function AnimatedTitle({
  text,
  className,
  charClassName
}: Props) {
  return (
    <h1 className={cn('text-center font-brush text-5xl', className)}>
      <span className='tracking-wide text-[#51819F]'>
        {text.split('').map((char, index) => (
          <span
            key={index}
            className={cn(
              'animate-fade animate-duration-[2000ms] animate-once',
              charClassName
            )}
            style={{ animationDelay: `${calculateDelay(index)}ms` }}
          >
            {char}
          </span>
        ))}
      </span>
    </h1>
  )
}
