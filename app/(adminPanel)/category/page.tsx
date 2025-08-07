import Button from '@/app/components/Button'
import { categoryColumns, Kategori } from '@/app/components/columns'
import { DataTable } from '@/components/data-table'
import { getAllKategori, getAllUsers } from '@/lib/prisma'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const CategoryPage = async () => {
    const rawData = await getAllKategori()

    const data: Kategori[] = rawData.map((kategori: any) => ({
        id: kategori.id,
        category: kategori.category,
    }))

    return (
        <div className='w-full p-4'>
            <div className='flex flex-row items-center justify-between'>
                <h1 className='text-primary text-2xl'>Data Kategori</h1>
                <Button href="/category/create" icon={faPlus} text="Tambah Kategori" className='text-sm md:text-md' />
            </div>

            <div className='mt-4'>
                <DataTable columns={categoryColumns} data={data} />
            </div>
        </div>
    )
}

export default CategoryPage