'use client'
import React from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const Button = ({ href, icon, text, className = ''}: { href: string; icon: IconProp; text: string, className?: string }) => {
  return (
    <>
      <Link href={href} className="flex flex-row p-2 items-center bg-accent rounded-xl hover:bg-accent/50 transition-colors">
        <span className={`${className} text-md`}>{text}</span>
        <FontAwesomeIcon icon={icon} className={`${className} mx-2`}/>
      </Link>
    </>
  )
}

export default Button