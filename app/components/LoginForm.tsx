'use client'
import { signIn, signOut } from 'next-auth/react'
import React, { useState } from 'react'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    console.log(username, password)

    try {
      const result = await signIn('credentials', {
        username,
        password,
        redirect: false,
        callbackUrl: '/dashboard'
      })

      if (result?.error) {
        setError(result.error)
      } else if (result?.url) {
        window.location.href = result.url
      }
    } catch (err) {
      setError('An unexpected error occurred')
    }
  }

  return (
    <>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {error && (
          <div className="p-2 text-sm text-red-600 bg-red-100 rounded">
            {error}
          </div>
        )}
        
        <div className="flex flex-col gap-1">
          <label htmlFor="username" className="text-sm font-medium text-dark">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 border rounded focus:ring-2 focus:ring-accent focus:border-accent"
            placeholder="Username"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-sm font-medium text-dark">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border rounded focus:ring-2 focus:ring-accent focus:border-accent"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="p-3 text-light rounded-md bg-secondary hover:bg-accent hover:text-dark"
        >
          Login
        </button>
      </form>

      <div className="relative flex items-center py-4">
        <div className="flex-grow border-t border-dark"></div>
        <span className="flex-shrink mx-4 text-dark">or</span>
        <div className="flex-grow border-t border-dark"></div>
      </div>

      <button
        className='bg-dark text-light rounded-xl w-auto p-4 hover:bg-accent hover:text-dark'
        onClick={() => signIn('github', { callbackUrl: "/dashboard" })}
      >
        Sign In with GitHub
      </button>
    </>
  )
}

export default LoginForm