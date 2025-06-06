import { PrismaClient } from "@prisma/client"
import { verifyPassword } from './auth/password'

// Prevent multiple instances in development
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

const prisma = globalForPrisma.prisma ?? new PrismaClient({
  log: ['query', 'error', 'warn'],
})

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}

export default prisma

// User functions
export async function findUserByUsername(username: string) {
  return await prisma.user.findUnique({
    where: { username },
    select: {
      id: true,
      username: true,
      password: true,
    }
  })
}

export async function verifyUserCredentials(
  username: string,
  password: string
) {
  const user = await findUserByUsername(username)
  if (!user || !user.password) return null

  const isValid = await verifyPassword(password, user.password)
  if (!isValid) return null

  // Return user without password
  const { password: _, ...safeUser } = user
  return safeUser
}