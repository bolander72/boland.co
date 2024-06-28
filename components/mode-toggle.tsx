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
      className='h-7 w-7'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Circle className='h-4 w-4 text-primary' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
