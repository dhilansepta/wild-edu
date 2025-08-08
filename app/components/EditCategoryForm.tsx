"use client"

import { Category, User } from '@prisma/client'
import Input from './Input'
import SelectInput from './SelectInput'
import { useState } from 'react'
import { NextResponse } from 'next/server'
import { categorySchema } from '@/lib/schemas/category'

export default function EditCategoryForm({ category }: { category: Category }) {

    const [formData, setFormData] = useState({
        category: category.category
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
            categorySchema.parse(formData)
            const response = await fetch(`/api/category/${category.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.message || 'Gagal mengubah data category')
            }

            window.location.href = "/category"
        } catch (error) {
            console.log(error)
            return NextResponse.json({
                error: 'Failed to edit category',
            })
        }
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                htmlFor="category"
                label='Kategori'
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                isRequired={true}
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