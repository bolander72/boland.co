import { cn } from '@/lib/utils'
import CustomLink from '../custom-link'

interface Props {
  entry: {
    name: string
    duration: string
    role: string
    tags: string[]
    websiteLink: string
    logoLink: string
  }
}

export default function Entry({ entry }: Props) {
  return (
    <div className='flex flex-row items-center justify-between text-xl'>
      <div className='flex w-full flex-col'>
        <div className='text-xs italic text-muted-foreground'>
          {entry.duration}
        </div>
        <div className='flex items-center justify-between'>
          {entry.websiteLink ? (
            <CustomLink href={entry.websiteLink}>
              <div className='flex flex-col text-lg'>
                <p>{entry.name}</p>
              </div>
            </CustomLink>
          ) : (
            <div className='flex text-lg'>
              <p>{entry.name}</p>
            </div>
          )}
        </div>
        <div className='flex items-center justify-between'>
          <div className='text-base'>{entry.role}</div>
          <img
            src={entry.logoLink}
            className={cn(
              'max-h-5 max-w-5',
              entry.name === 'Carry' &&
                'max-w-[1.125rem] animate-fade-left animate-duration-[1500ms] animate-once',
              entry.name === 'Mainline' &&
                'max-h-6 max-w-5 animate-fade-left animate-delay-[250ms] animate-duration-[1500ms] animate-once',
              entry.name === 'AIMG' &&
                'max-w-10 animate-fade-left animate-delay-[500ms] animate-duration-[1500ms] animate-once',
              entry.name === 'AE Studio' &&
                'max-h-[1.125rem] max-w-[1.125rem] animate-fade-left animate-delay-[750ms] animate-duration-[1500ms] animate-once',
              entry.name === 'The.com' &&
                'max-w-6 animate-fade-left animate-delay-[1000ms] animate-duration-[1500ms] animate-once',
              entry.name === 'WorkHound' &&
                'max-h-6 max-w-6 animate-fade-left animate-delay-[1250ms] animate-duration-[1500ms] animate-once',
              entry.name === 'BlockEarner' &&
                'max-w-[1.875rem] animate-fade-left animate-delay-[1500ms] animate-duration-[1500ms] animate-once',
              entry.name === 'Hy-Vee' &&
                'max-w-4 animate-fade-left animate-delay-[1750ms] animate-duration-[1500ms] animate-once',
              entry.name === 'FastPath' &&
                'animate-fade-left animate-delay-[2000ms] animate-duration-[1500ms] animate-once',
              entry.name === 'Corteva' &&
                'animate-fade-left animate-delay-[2250ms] animate-duration-[1500ms] animate-once',
              entry.name === 'SmartLocker' &&
                'max-h-6 max-w-6 animate-fade-left animate-delay-[2500ms] animate-duration-[1500ms] animate-once',
              entry.name === 'SwissContact' &&
                'max-w-5 animate-fade-left animate-delay-[2750ms] animate-duration-[1500ms] animate-once'
            )}
            alt={entry.name}
            width={32}
            height={32}
          />
        </div>
        {/* <div className='line-clamp-2 text-base'>{JSON.stringify(entry.tags)}</div> */}
      </div>
    </div>
  )
}