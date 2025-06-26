import { PrismaClient, Role, UserStatus } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting user seed...')

  // Clear existing users
  console.log('🧹 Clearing existing users...')
  await prisma.user.deleteMany()
  console.log('✅ Existing users cleared')

  const usersData = [
    {
      username: 'adminbiosfera',
      name: 'Admin',
      role: Role.ADMIN,
      password: await hash('adminbiosfera123', 12),
      status: UserStatus.AKTIF
    },
    {
      username: 'dhilansepta',
      name: 'Dhilan Septa Yudha',
      role: Role.USER,
      password: await hash('dhilan123', 12),
      status: UserStatus.AKTIF
    },
    {
      username: 'khairulanw',
      name: 'Khairul Anwar',
      role: Role.USER,
      password: await hash('khairulanw123', 12),
      status: UserStatus.NON_AKTIF
    },
  ]

  console.log(`📝 Creating ${usersData.length} users...`)
  const createUsers = usersData.map(user =>
    prisma.user.create({
      data: {
        username: user.username,
        name: user.name,
        role: user.role,
        password: user.password,
        status: user.status
      }
    })
  )

  await Promise.all(createUsers)
  console.log('✅ Users created successfully!')
}

main()
  .catch(e => {
    console.error('❌ Seed failed', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })