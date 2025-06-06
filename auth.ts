import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import { signInSchema } from "./lib/zod"
import { ZodError } from "zod"
import { verifyUserCredentials } from "./lib/prisma"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub,
    
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

          if (!user) {
            throw new Error("Invalid credentials")
          }

          // 3. Return user object in the format NextAuth expects
          return {
            id: user.id,
            username: user.username,
          }
        } catch (error) {
          if (error instanceof ZodError) {
            // Return null for invalid credentials format
            return null
          }
          // Return null for any other error
          return null
        }
      },
    })
  ],
})