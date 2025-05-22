import React from 'react'
import ButtonNav from './ButtonNav'
import Link from 'next/link'
import { auth } from '@/auth';
import Button from './Button';
import { signOut } from 'next-auth/react';
import AuthButton from './AuthButton';

const Navbar = async () => {
    const session = await auth();

    return (
        <header className='px-5 py-3 bg-primary'>
            <nav className='flex justify-around items-center'>
                <Link href="/">
                    <h1 className='text-4xl text-dark font-geist-mono'>BIOSFERA</h1>
                </Link>
                <div className='flex flex-direction-row justify-center gap-4 items-center'>
                    <ButtonNav params="Home" href="/" />
                    <ButtonNav params="Article" href="/article" />
                    <ButtonNav params="About" href="/about" />
                    <ButtonNav params="Contact" href="/contact" />
                    {session && session?.user
                        ? (
                            <>
                                <ButtonNav params="Dashboard" href="/admin/dashboard" />

                                <AuthButton params="Logout" />
                            </>
                        )
                        : (
                            <span></span>
                        )
                    }
                </div>
            </nav>
        </header>
    )
}

export default Navbar