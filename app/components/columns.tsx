"use client"

import { Button } from "@/components/ui/button"
import { Role, UserStatus } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import Link from "next/link"

export type Users = {
  id: string
  role: Role
  name: string
  username: string
  status: UserStatus
}

export type Kategori = {
  id: string
  category: string
}

export const userColumns: ColumnDef<Users>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const user = row.original

      return (
        <Button asChild variant="secondary" size="sm">
          <Link href={`/users/${user.id}/edit`}>
            <p className="text-white">Edit</p>
          </Link>
        </Button>
      )
    },
  },
]

export const categoryColumns: ColumnDef<Kategori>[] = [
  {
    accessorKey: "category",
    header: "Kategori",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const category = row.original

      return (
        <Button asChild variant="secondary" size="sm">
          <Link href={`/category/${category.id}/edit`}>
            <p className="text-white">Edit</p>
          </Link>
        </Button>
      )
    },
  },
]