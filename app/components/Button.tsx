'use client'
import React from 'react'
import { useRouter } from 'next/navigation';

const Button = ({ params, href }: { params: string, href: string }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push(href)
  }

  const router = useRouter();
  return (
    <div>
      <button className='text-xl text-dark font-poppins'
        onClick={handleClick}>
        {params}
      </button>
    </div>
  )
}

export default Button