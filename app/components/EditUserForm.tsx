"use client"

import { User } from '@prisma/client'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import Input from './Input'
import SelectInput from './SelectInput'
import { useState } from 'react'
import { userSchema } from '@/lib/schemas/user'
import { NextResponse } from 'next/server'

export default function EditUserForm({ user }: { user: User }) {

    const [formData, setFormData] = useState({
        name: user.name,
        username: user.username ? user.username : "",
        password: "",
        role: user.role,
        status: user.status,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try{
            userSchema.parse(formData)
            const response = await fetch(`/api/users/${user.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.message || 'Gagal mengubah data user')
            }

            window.location.href = "/users"
        } catch (error) {
            console.log(error)
            return NextResponse.json({
                error: 'Failed to edit user',
            })
        }
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                htmlFor="name"
                label='Nama'
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                isRequired={true}
            />

            <Input
                htmlFor="username"
                label='Username'
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                isRequired={true}
            />
            <Input
                htmlFor='password'
                label='Password'
                type='password'
                id='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                isRequired={false}
            />
            <SelectInput
                label='Role'
                name="role"
                options={[
                    { value: 'ADMIN', label: 'Admin' },
                    { value: 'USER', label: 'User' }
                ]}
                value={formData.role}
                onChange={handleChange}
            />
            <SelectInput
                label='Status'
                name="status"
                options={[
                    { value: 'AKTIF', label: 'Aktif' },
                    { value: 'NON_AKTIF', label: 'Non Aktif' }
                ]}
                value={formData.status}
                onChange={handleChange}
            />

            <button
                type="submit"
                className="w-full my-2 py-2 px-4 bg-primary text-dark font-semibold rounded-md hover:bg-accent/50 transition-colors"
            >
                Edit
            </button>
        </form>
        
    )
}