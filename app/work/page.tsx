import { Title } from '@/components/title'
import Resume from '@/components/work/resume'

export default function Page() {
  return (
    <section className='space-y-4'>
      <Title className='text-5xl font-brush tracking-wide text-[#51819F]'>Work</Title>
      <Resume />
    </section>
  )
}
