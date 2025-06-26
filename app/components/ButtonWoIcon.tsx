'use client'
import React from 'react'
import Link from 'next/link'

interface ButtonWoIconProps {
  href: string
  text: string
  className?: string
}

const ButtonWoIcon = ({text, className = '' }: ButtonWoIconProps) => {
  // Gabungkan class default dengan class tambahan dari props
  const baseClasses = "flex items-center justify-center gap-2 bg-accent text-dark font-semibold rounded-md py-2 px-4"
  const combinedClasses = `${baseClasses} ${className}`

  return (
    <Link className={combinedClasses}>
      <span className="text-md">{text}</span>
    </Link>
  )
}

export default ButtonWoIcon