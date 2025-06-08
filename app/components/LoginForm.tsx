'use client'
import { signIn } from 'next-auth/react'
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
        // Handle different error cases
        if (result.error === "CredentialsSignin") {
          setError("Invalid Username or Password");
        } else {
          setError("Login failed. Please try again.");
        }
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
      
    </>
  )
}

export default LoginForm