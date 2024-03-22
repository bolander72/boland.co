'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from './ui/button'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { ModeToggle } from './mode-toggle'

const links = [
  { href: '/', name: 'about' },
  { href: '/work', name: 'work' },
  // { href: '/blog', name: 'blog' },
  { href: '/reading', name: 'reading' },
  { href: '/now', name: 'now' },
  { href: '/links', name: 'links' }
]

export function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  if (pathname === '/links') {
    return null
  }

  return (
    <div className='mx-auto max-w-lg px-4 mb-12'>
      <nav className='hidden flex-col space-y-4 sm:flex sm:flex-row sm:space-x-6 sm:space-y-0'>
        <div className='flex w-full justify-between items-center'>
          <div className='space-x-6'>
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className='text-xl text-blue-600 underline dark:text-blue-500'
              >
                {link.name}
              </Link>
            ))}
          </div>
          <ModeToggle />
        </div>
      </nav>
      <Sheet open={open} onOpenChange={setOpen} modal={true}>
        <SheetTrigger asChild className=''>
          <Button
            variant='outline'
            className='flex text-base focus-visible:ring-0 sm:hidden'
            size='sm'
          >
            <svg
              strokeWidth='1.5'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
            >
              <path
                d='M3 5H11'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
              <path
                d='M3 12H16'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
              <path
                d='M3 19H21'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
            </svg>
            <span className='sr-only'>Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side='left'
          className='flex w-40 justify-center py-9 dark:bg-background'
        >
          <ScrollArea className='my-4 h-[calc(100vh-8rem)]'>
            <div className='flex flex-col space-y-6 text-xl text-blue-600 underline dark:text-blue-500'>
              {links.map(link => (
                <MobileLink
                  key={link.href}
                  href={link.href}
                  onOpenChange={setOpen}
                  className='text-xl underline'
                >
                  {link.name}
                </MobileLink>
              ))}
            </div>
            <div className='mt-6'>
              <ModeToggle />
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
  external?: boolean
}

function MobileLink({
  href,
  external,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter()

  return (
    <Link
      href={href}
      onClick={() => {
        if (!external) {
          router.push(href.toString())
          onOpenChange?.(false)
        }
      }}
      target={external ? '_blank' : undefined}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}
