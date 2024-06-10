'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { Button, type ButtonProps } from '@/components/ui/button'
import { IconArrowDown } from '@/components/ui/icons'
import { TextureButton, UnifiedButtonProps } from './ui/texture-button'
import { ArrowDown } from 'lucide-react'

interface ButtonScrollToBottomProps extends UnifiedButtonProps {
  isAtBottom: boolean
  scrollToBottom: () => void
}

export function ButtonScrollToBottom({
  className,
  isAtBottom,
  scrollToBottom,
  ...props
}: ButtonScrollToBottomProps) {
  return (
    <TextureButton
      variant="icon"
      size="icon"
      className={cn(
        'absolute right-4  top-1 z-10 bg-background transition-opacity duration-300 sm:right-8 md:top-2',
        isAtBottom ? 'opacity-0' : 'opacity-100',
        className
      )}
      onClick={() => scrollToBottom()}
      {...props}
    >
      <ArrowDown className="size-5 text-black dark:text-white" />
      <span className="sr-only">Scroll to bottom</span>
    </TextureButton>
  )
}
