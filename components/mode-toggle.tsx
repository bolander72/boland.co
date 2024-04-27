'use client'

import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Circle } from 'lucide-react'

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant='outline'
      size='icon'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Circle className='h-[1.2rem] w-[1.2rem] text-primary' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
