import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { auth } from '@/auth'
import { Button } from '@/components/ui/button'
import {
  IconAI, 
} from '@/components/ui/icons'
import { UserMenu } from '@/components/user-menu'
import { SidebarMobile } from './sidebar-mobile'
import { SidebarToggle } from './sidebar-toggle'
import { ChatHistory } from './chat-history'
import { Session } from '@/lib/types'

async function UserOrLogin() {
  const session = (await auth()) as Session
  
  return (
    <div className="w-full flex items-center justify-between ">
      {session?.user ? (
        <>
          <SidebarMobile>
            <ChatHistory userId={session.user.id} />
          </SidebarMobile>
          <SidebarToggle />
        </>
      ) : (
        <Link href="/new" rel="nofollow">
          <div className="max-w-5">
            <IconAI className=" mr-2 " />
          </div>
        </Link>
      )}
      <div className="flex items-center">
        {session?.user ? (
          <UserMenu user={session.user} />
        ) : (
          <div className='flex items-center gap-2'>
            <Button variant="link" asChild className="-ml-2">
              <Link href="/login">Login</Link>
            </Button>
            <Button variant="link" asChild className="-ml-2">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-12 px-4 border-b border-muted/40 shrink-0 backdrop-blur-xl">
      <div className="w-full flex items-center">
        <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
          <UserOrLogin />
        </React.Suspense>
      </div>
  
    </header>
  )
}
