import { cn } from '@/lib/utils'
import Entry from './entry'

const entries = [
  {
    name: 'Carry',
    duration: 'Present',
    role: 'Design Engineer',
    tags: [],
    websiteLink: 'https://carry.com',
    logoLink: '/logos/carry.webp'
  },
  {
    name: 'Mainline',
    duration: 'Present',
    role: 'Lead Product Engineer',
    tags: ['design', 'engineering'],
    websiteLink: 'https://getmainline.io',
    logoLink: '/logos/mainline.webp'
  },
  {
    name: 'AIMG',
    duration: '',
    role: 'Lead Product Engineer',
    tags: [],
    websiteLink: 'https://aimg.io',
    logoLink: '/logos/aimg.webp'
  },
  {
    name: 'AE Studio',
    duration: '',
    role: 'Technical PM',
    tags: [],
    websiteLink: 'https://ae.studio',
    logoLink: '/logos/ae-studio.webp'
  },
  {
    name: 'The.com',
    duration: '',
    role: 'Senior Software Engineer',
    tags: [],
    websiteLink: 'https://the.com',
    logoLink: '/logos/the-com.webp'
  },
  {
    name: 'WorkHound',
    duration: '',
    role: 'Senior Software Engineer',
    tags: [],
    websiteLink: 'https://workhound.com',
    logoLink: '/logos/workhound.webp'
  },
  {
    name: 'BlockEarner',
    duration: '',
    role: 'Senior Software Engineer',
    tags: [],
    websiteLink: 'https://blockearner.com.au',
    logoLink: '/logos/blockearner.webp'
  },
  {
    name: 'Hy-Vee',
    duration: '',
    role: 'Full-Stack Software Engineer',
    tags: [],
    websiteLink: 'https://hy-vee.com',
    logoLink: '/logos/hy-vee.webp'
  },
  {
    name: 'FastPath',
    duration: '',
    role: 'Front-End Software Engineer',
    tags: [],
    websiteLink: 'https://gofastpath.com',
    logoLink: '/logos/fastpath.webp'
  },
  {
    name: 'Corteva',
    duration: '',
    role: 'UX Designer',
    tags: [],
    websiteLink: 'https://corteva.com',
    logoLink: '/logos/corteva.webp'
  },
  {
    name: 'SmartLocker',
    duration: '',
    role: 'Co-Founder',
    tags: [],
    websiteLink: 'https://smartlockerusa.com',
    logoLink: '/logos/smartlocker.webp'
  },
  {
    name: 'SwissContact',
    duration: '',
    role: 'EiR',
    tags: [],
    websiteLink: 'https://swisscontact.org',
    logoLink: '/logos/swisscontact.webp'
  }
]

export default function Resume() {
  return (
    <div className='flex flex-col space-y-4'>
      {/* <div className='flex flex-row items-center justify-between border-b pb-4 text-xl'>
        <div className='flex w-full flex-col'>
          <div className='flex items-center justify-between'>
            <div className='text-lg'>This can be you.</div>
            <div className='animate-pulse text-sm !text-green-600 text-muted-foreground animate-duration-[2000ms] animate-thrice'>
              Available
            </div>
          </div>
          <div className='mt-1 text-sm'>
            Schedule a call{' '}
            <CustomLink href='https://cal.com/bolander72/chat'>here</CustomLink>
            .
          </div>
        </div>
      </div> */}

      {entries.map((entry, index) => (
        <div
          key={entry.name}
          className={cn('pb-4', index !== entries.length - 1 && 'border-b')}
        >
          <Entry entry={entry} />
        </div>
      ))}
    </div>
  )
}
