import NextAuth, { User } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { signInSchema } from "./lib/zod"
import { ZodError } from "zod"
import { verifyUserCredentials } from "./lib/prisma"
import { DefaultSession } from "next-auth"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },

      authorize: async (credentials) => {
        try {
          // 1. Validate credentials with Zod
          const { username, password } = await signInSchema.parseAsync(credentials)

          // 2. Verify credentials against database
          const user = await verifyUserCredentials(username, password)

          // 3. If user not found, throw error
          if (!user) {
            throw new Error("Invalid Username or Password")
          }

          // 3. Return user object in the format NextAuth expects
          return {
            id: user.id,
            username: user.username, // Now properly typed
            name: user.name,
            role: user.role,
          } as User; // Cast to User type
        } catch (error) {
          if (error instanceof ZodError) {
            return null
          }
          return null
        }
      },
    })
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
  session({ session, token }) {
    if (session.user) {
      session.user.role = token.role;
      session.user.name = token.name;
    }
    return session;
  },
  jwt({ token, user }) {
    if (user) {
      token.role = user.role;
      token.name = user.name;
    }
    return token;
  }
}
})