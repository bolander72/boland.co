import Link from 'next/link'
import { Button } from './ui/button'

interface Props {
  title: string
  href: string
}

export default function SocialLink({ title, href }: Props) {
  return (
    <Link href={href} target='_blank'>
      <Button variant='outline' className='w-32'>
        {title}
      </Button>
    </Link>
  )
}
