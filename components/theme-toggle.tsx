'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [_, startTransition] = React.useTransition()

  return (
    <Button
      variant="ghost"
      size="icon"
      className={theme==="light"?'hover:bg-neutral-200':""}
      onClick={() => {
        startTransition(() => {
          setTheme(theme === 'light' ? 'dark' : 'light')
        })
      }}
    >
      {!theme ? null : theme === 'dark' ? (
        <Sun className="transition-all size-5" strokeWidth={1.5} />
      ) : (
        <Moon className="transition-all size-5" strokeWidth={1.5} />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
