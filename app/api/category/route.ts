import { NextResponse } from 'next/server'
import { createCategory} from '@/lib/prisma'
import { categorySchema } from '@/lib/schemas/category'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const validatedData = categorySchema.parse(body)

        const { success, data, error } = await createCategory(
            validatedData.category
        )

        if (!success) {
            if (typeof error === 'object' && error !== null && 'message' in error && typeof (error as any).message === 'string' && (error as any).message.includes('Unique constraint')) {
                return NextResponse.json(
                    { success: false, message: 'Kategori sudah ada dalam database' },
                    { status: 400 }
                )
            }
            throw error
        }

        return NextResponse.json(
            { success: true, data },
            { status: 201 }
        )
    } catch (error) {
        console.error('Error:', error)
        return NextResponse.json(
            { success: false, message: 'Terjadi kesalahan server' },
            { status: 500 }
        )
    }
}