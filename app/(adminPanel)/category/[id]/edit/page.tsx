import EditCategoryForm from '@/app/components/EditCategoryForm'
import EditUserForm from '@/app/components/EditUserForm'
import { getCategoribyId, getUserbyId } from '@/lib/prisma'

export default async function EditUserPage({
    params }: { params: { id: string } }
) {
    const dataKategori = await getCategoribyId({ id: params.id })

    if (!dataKategori) {
        return <div>Kategori not found</div>
    }

    return (
        <div className='w-full h-max p-8 bg-primary/20 rounded-xl border-2'>
            <h1 className="text-2xl font-bold text-light mb-4">Edit Kategori: {dataKategori.category}</h1>
            <EditCategoryForm category={dataKategori} />
        </div >
    )
}