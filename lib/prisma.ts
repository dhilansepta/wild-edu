import { PrismaClient, Role, UserStatus } from "@prisma/client"
import { hashPassword, verifyPassword } from './auth/password'

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

  const { password: _, ...safeUser } = user
  return safeUser
}

export async function getAllUsers() {
  const users = await prisma.user.findMany()
  return users
}

export async function getUserbyId(
  params: { id: string }
) {
  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  })

  return user
}
export async function createUser(
  name: string,
  username: string,
  password: string,
  role: Role,
  status: UserStatus
) {
  try {
    const hashedPassword = await hashPassword(password)

    const user = await prisma.user.create({
      data: {
        name,
        username,
        password: hashedPassword,
        role,
        status
      }
    })

    return { success: true, data: user, error: null }
  } catch (error) {
    console.error('Error creating user:', error)
    return { success: false, data: null, error }
  }
}

export async function editUser(
  id: string,
  name: string,
  username: string,
  password: string,
  role: Role,
  status: UserStatus
) {
  try {
    if (password != "") {
      const hashedPassword = await hashPassword(password)

      const user = await prisma.user.update({
        where: {
          id
        },
        data: {
          name,
          username,
          password: hashedPassword,
          role,
          status
        }
      })
      return { success: true, data: user, error: null }
    } else {
      const user = await prisma.user.update({
        where: {
          id
        },
        data: {
          name,
          username,
          role,
          status
        }
      })
      return { success: true, data: user, error: null }
    }
  } catch (error) {
    console.error('Error creating user:', error)
    return { success: false, data: null, error }
  }
}