'use client'
import React from 'react'
import { useRouter } from 'next/navigation';

const Button = ({ params }: { params: string }) => {
  // const handleClick = (e: React.MouseEvent) => {
  //   e.preventDefault()
  //   router.push(href)
  // }

  const router = useRouter();
  return (
    <div>
      <button className='!flex-row w-full text-dark accent_container rounded-xl p-2 hover:cursor-pointer hover:text-light'>
        {params}
        <span>→</span>
      </button>
    </div>
  )
}

export default Button