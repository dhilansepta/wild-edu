'use client'
import Input from '@/app/components/Input'
import SelectInput from '@/app/components/SelectInput'
import { userSchema } from '@/lib/schemas/user'
import React, { useState } from 'react'

const CreateUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    role: 'ADMIN',
    status: 'AKTIF'
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
      userSchema.parse(formData)

      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Gagal membuat user')
      }

      setSuccess(true)
      setFormData({
        name: '',
        username: '',
        password: '',
        role: 'USER',
        status: 'AKTIF'
      })
      window.location.href = '/users'
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan')
    }
  }

  return (
    <div className='w-full h-max p-8 bg-primary/20 rounded-xl border-2'>
      <h1 className='text-primary font-bold text-2xl'>Tambah User</h1>
      <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
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
          isRequired={true}
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
          className="w-full py-2 px-4 bg-primary text-dark font-semibold rounded-md hover:bg-accent/50 transition-colors"
        >
          Create
        </button>
      </form>
    </div>
  )
}

export default CreateUser