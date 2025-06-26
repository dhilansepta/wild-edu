import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { userSchema } from '@/lib/schemas/user'
import { editUser } from '@/lib/prisma'

const prisma = new PrismaClient()

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: params.id
      },
      select: {
        id: true,
        name: true,
        username: true,
        password: true,
        role: true,
        status: true,
      }
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    return NextResponse.json(user)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch user data' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
)
{
 try {
  const body = await request.json()
  const validatedData = userSchema.parse(body)

  const {data} = await editUser(
    params.id, 
    validatedData.name, 
    validatedData.username, 
    validatedData.password, 
    validatedData.role, 
    validatedData.status
  )
  return NextResponse.json(data, { status: 200 })
 } catch (error) {
  if (error instanceof Error) {
  return NextResponse.json({ error: error.message }, { status: 400 })
 }
 } 
}