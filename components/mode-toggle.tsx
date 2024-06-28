'use client'

import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Circle } from 'lucide-react'

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant='ghost'
      size='icon'
      className='h-9 w-9'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Circle className='h-[22px] w-[22px] text-primary' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
