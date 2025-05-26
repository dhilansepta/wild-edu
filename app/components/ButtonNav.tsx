'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const ButtonNav = ({ params, href }: { params: string, href: string }) => {
    const router = useRouter();
    return (
        <div>
            <Link className='text-xl text-dark font-poppins hover:cursor-pointer hover:text-light'
                href={href}>
                {params}
            </Link>
        </div>
    )
}

export default ButtonNav