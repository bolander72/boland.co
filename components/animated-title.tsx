import { cn } from '@/lib/utils'

interface Props {
  text: string
  className?: string
  charClassName?: string
}

const AnimatedTitle = ({ text, className, charClassName }: Props) => {
  return (
    <h1 className={cn('text-center font-brush text-5xl', className)}>
      <span className='tracking-wide text-[#51819F]'>
        {text.split('').map((char, index) => {
          let delay = 0

          if (index <= 4) {
            delay = index * 250
          } else {
            delay = 5 * 250 + 1750 + (index - 6) * 150
          }

          return (
            <span
              key={index}
              className={cn(
                'animate-fade animate-duration-[2000ms] animate-once',
                charClassName
              )}
              style={{ animationDelay: `${delay}ms` }}
            >
              {char}
            </span>
          )
        })}
      </span>
    </h1>
  )
}

export default AnimatedTitle
