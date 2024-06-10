import { auth } from '@/auth'
import LoginForm from '@/components/login'
import { Session } from '@/lib/types'
import { redirect } from 'next/navigation'

export default async function LoginPage() {
  const session = (await auth()) as Session

  if (session) {
    redirect('/')
  }

  return (
    <main className="flex flex-col p-4 md:mt-10 mt-10">
      <LoginForm />
    </main>
  )
}
