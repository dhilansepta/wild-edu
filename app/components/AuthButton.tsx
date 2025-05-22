'use client'
import { signIn, signOut } from 'next-auth/react'
import React from 'react'

const AuthButton = ({ params }: { params: "Logout" | "Login" }) => {
    return (
        <>
            {params == "Logout"
                ? (
                    <button onClick={async () => await signOut({callbackUrl: "/"})}>
                        <span>Logout</span>
                    </button>
                )
                : (
                    <button
                        className='bg-white text-black border border-gray-300 hover:bg-gray-200 rounded-md p-2'
                        onClick={async () => await signIn('github', {callbackUrl: "/admin/dashboard"})}
                    >
                        Sign In with GitHub
                    </button>
                )
            }
        </>
    )
}

export default AuthButton