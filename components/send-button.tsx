// use client
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'

const SendButton: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false)

  const toggleButton = () => {
    setIsToggled(!isToggled)
  }

  return (
    <Button variant={'ghost'} size="icon" type="submit">
      <motion.div
        className={cn('p-2 bg-orange-500 rounded-full cursor-pointer')}
        onClick={toggleButton}
      >
        <motion.div
          initial={{ rotate: 180 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.4 }}
          whileTap={{
            scale: 0.8,
            y: -20,
            opacity: 0,
            transition: {
              duration: 0.3,
              ease: 'easeOut'
            }
          }}
        >
          <ArrowUp className="size-7 text-white" />
        </motion.div>
      </motion.div>
    </Button>
  )
}

export default SendButton
