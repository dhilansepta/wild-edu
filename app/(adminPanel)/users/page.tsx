import Button from '@/app/components/Button'
import { DataTable } from '@/components/data-table'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { columns,  Users} from "./columns"
import { getAllUsers } from '@/lib/prisma'

 
export default async function Page() {
  const rawData = await getAllUsers()
  
  const data: Users[] = rawData.map((user: any) => ({
    id: user.id,
    role: user.role,
    name: user.name,
    username: user.username,
    status: user.status,
  }))
 
  return (
    <div className='w-full p-4'>
      <div className='flex flex-row items-center justify-between'>
        <h1 className='text-primary text-2xl'>Data Users</h1>
        <Button href="/users/create" icon={faPlus} text="Tambah User" className='text-sm md:text-md'/>
      </div>

      <div className='mt-4'> 
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  )
}