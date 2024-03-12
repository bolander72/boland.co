import { Button } from '@/components/ui/button'
import Link from 'next/link'
import sharedMetadata from '@/metadata'

export const metadata = {
  ...sharedMetadata,
  title: 'links | Michael Boland'
}

export default function Links() {
  return (
    <section className='-my-12 flex h-[100dvh] items-center justify-center'>
      <div className='flex flex-col space-y-4'>
        <Link href='https://x.com/bolander72/'>
          <Button className='w-36'>X</Button>
        </Link>
        <Link href='https://github.com/bolander72/'>
          <Button className='w-36'>GitHub</Button>
        </Link>
        <Link href='https://linkedin.com/in/bolander72/'>
          <Button className='w-36'>LinkedIn</Button>
        </Link>
        <Link href='https://discordapp.com/users/404490892297109514/'>
          <Button className='w-36'>Discord</Button>
        </Link>
        <Link href='https://primal.net/p/npub1ge93aqdp0rjewv2tq7f7u5d5mv4p78w2d74539fsjvr042cwcntsqxgusd/'>
          <Button className='w-36'>Nostr</Button>
        </Link>
        <Link href='https://stacker.news/bolander72/'>
          <Button className='w-36'>Stacker News</Button>
        </Link>
        <Link href='https://cosmos.so/bolander72/'>
          <Button className='w-36'>Cosmos</Button>
        </Link>
        <Link href='/' className='flex justify-center pt-6 text-xl text-blue-600 underline dark:text-blue-500'>
          boland.co
        </Link>
      </div>
    </section>
  )
}
