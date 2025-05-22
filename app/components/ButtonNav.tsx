'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const ButtonNav = ({ params, href }: { params: string, href: string }) => {
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        router.push(href)
    }

    const router = useRouter();
    return (
        <div>
            <button className='text-xl text-dark font-poppins hover:cursor-pointer hover:text-light'
                onClick={handleClick}>
                {params}
            </button>
        </div>
    )
}

export default ButtonNav