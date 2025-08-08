import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { categorySchema } from '@/lib/schemas/category'
import { editCategory } from '@/lib/prisma'

const prisma = new PrismaClient()

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const kategori = await prisma.category.findUnique({
      where: {
        id: params.id
      },
      select: {
        id: true,
        category: true,
      }
    })

    if (!kategori) {
      return NextResponse.json({ error: 'Category not found' }, { status: 404 })
    }

    return NextResponse.json(kategori)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch category data' },
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
  const validatedData = categorySchema.parse(body)

  const {data} = await editCategory(
    params.id, 
    validatedData.category
  )
  return NextResponse.json(data, { status: 200 })
 } catch (error) {
  if (error instanceof Error) {
  return NextResponse.json({ error: error.message }, { status: 400 })
 }
 } 
}