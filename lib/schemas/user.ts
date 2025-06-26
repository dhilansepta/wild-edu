import { z } from 'zod'

export const RoleEnum = z.enum(['ADMIN', 'USER'])
export type Role = z.infer<typeof RoleEnum>

export const StatusEnum = z.enum(['AKTIF', 'NON_AKTIF'])
export type UserStatus = z.infer<typeof StatusEnum>

export const userSchema = z.object({
    name: z.string()
        .min(3, 'Nama minimal 3 karakter'),
    username: z.string()
        .min(3, 'Username minimal 3 karakter')
        .max(20, 'Username maksimal 20 karakter'),
    password: z.string()
        .min(6, 'Password minimal 6 karakter')
        .or(z.literal('')),
    role: RoleEnum,
    status: StatusEnum
})