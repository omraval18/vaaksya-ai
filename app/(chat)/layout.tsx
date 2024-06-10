import { SidebarDesktop } from '@/components/sidebar/sidebar-desktop'

interface ChatLayoutProps {
  children: React.ReactNode
}

export default async function ChatLayout({ children }: ChatLayoutProps) {
  return (
    <div className="relative flex h-[calc(100vh_-_theme(spacing.12))] overflow-hidden">
      <SidebarDesktop />
      {children}
    </div>
  )
}
