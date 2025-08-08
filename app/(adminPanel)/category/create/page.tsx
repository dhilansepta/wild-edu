'use client'
import Input from '@/app/components/Input'
import { categorySchema } from '@/lib/schemas/category'
import React, { useState } from 'react'

const CreateCategory = () => {
  const [formData, setFormData] = useState({
    category: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess(false)

    try {
      // Validasi client-side
      categorySchema.parse(formData)

      const response = await fetch('/api/category', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Gagal membuat Kategori')
      }

      setSuccess(true)
      setFormData({
        category: '',
      })
      window.location.href = '/category'
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan')
    }
  }

  return (
    <div className='w-full h-max p-8 bg-primary/20 rounded-xl border-2'>
      <h1 className='text-primary font-bold text-2xl'>Tambah Kategori</h1>
      <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
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
          className="w-full py-2 px-4 bg-primary text-dark font-semibold rounded-md hover:bg-accent/50 transition-colors"
        >
          Create
        </button>
      </form>
    </div>
  )
}

export default CreateCategory