import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  pages: {
    signIn: '/login',
    newUser: '/signup'
  },
  callbacks: {
    async authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isOnLoginPage = nextUrl.pathname.startsWith('/login')
      const isOnSignupPage = nextUrl.pathname.startsWith('/signup')
      const isOnSharePage = nextUrl.pathname.startsWith("/share")

      if (isLoggedIn) {
        if (isOnLoginPage || isOnSignupPage) {
          return Response.redirect(new URL('/', nextUrl))
        }
      }

      if(!isLoggedIn && !isOnLoginPage && !isOnSignupPage && !isOnSharePage) {
        return Response.redirect(new URL('/login', nextUrl))
      }

      return true
    },
    async jwt({ token, user }) {
      if (user) {
        token = { ...token, id: user.id }
      }

      return token
    },
    async session({ session, token }) {
      if (token) {
        const { id } = token as { id: string }
        const { user } = session

        session = { ...session, user: { ...user, id } }
      }

      return session
    }
  },
  providers: []
} satisfies NextAuthConfig
