import { NextAuthOptions, User } from 'next-auth'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import { connectDB } from '../config/database'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(connectDB()),
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid credentials')
        }

        // Here you would typically:
        // 1. Find the user in your database
        // 2. Verify their password
        // 3. Return the user object or null

        // This is a placeholder implementation
        const user: User = {
          id: '1',
          email: credentials.email,
          name: 'Test User',
        }

        return user
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id
        token.email = user.email
      }
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id
      }
      return session
    }
  }
}
