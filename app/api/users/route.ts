import { NextResponse } from 'next/server'
import { createUser } from '@/lib/prisma'
import { userSchema } from '@/lib/schemas/user'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const validatedData = userSchema.parse(body)

        const { success, data, error } = await createUser(
            validatedData.name,
            validatedData.username,
            validatedData.password,
            validatedData.role,
            validatedData.status
        )

        if (!success) {
            if (typeof error === 'object' && error !== null && 'message' in error && typeof (error as any).message === 'string' && (error as any).message.includes('Unique constraint')) {
                return NextResponse.json(
                    { success: false, message: 'Username sudah digunakan' },
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