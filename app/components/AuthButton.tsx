'use client'
import LoginForm from "./LoginForm"
import { signOut } from "next-auth/react"

const AuthButton = ({ params }: { params: 'Logout' | 'Login' }) => {
  if (params === 'Logout') {
    return (
      <button 
        className='text-xl text-dark font-poppins hover:cursor-pointer hover:text-light'
        onClick={() => signOut({ callbackUrl: '/' })}
      >
        Logout
      </button>
    )
  }

  return <LoginForm />
}

export default AuthButton