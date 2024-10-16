import CustomLink from './custom-link'

export default function Footer() {
  return (
    <footer className='mt-12 flex min-h-[50px] items-center justify-center space-x-4'>
      <CustomLink href='https://x.com/bolander72'>@bolander72</CustomLink>
      <CustomLink href='https://linkedin.com/in/bolander72/'>
        LinkedIn
      </CustomLink>
      <CustomLink href='https://github.com/bolander72'>GitHub</CustomLink>
    </footer>
  )
}
