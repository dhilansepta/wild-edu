import EditUserForm from '@/app/components/EditUserForm'
import { getUserbyId } from '@/lib/prisma'

export default async function EditUserPage({
    params }: { params: { id: string } }
) {
    const user = await getUserbyId({ id: params.id })

    if (!user) {
        return <div>User not found</div>
    }

    return (
        <div className='w-full h-max p-8 bg-primary/20 rounded-xl border-2'>
            <h1 className="text-2xl font-bold text-light mb-4">Edit User: {user.name}</h1>
            <EditUserForm user={user} />
        </div >
    )
}