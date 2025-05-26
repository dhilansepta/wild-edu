import React from 'react'
import ButtonNav from './ButtonNav'
import Link from 'next/link'
import { auth } from '@/auth';
import AuthButton from './AuthButton';
import ToggleButton from './ToggleButton';

const Navbar = async () => {
    const session = await auth();

    return (
        <header className='fixed top-0 left-0 right-0 z-50 px-5 py-3 bg-primary'>
            <nav className='flex flex-col justify-around items-center sm:flex-row'>
                <div className='flex flex-row justify-between items-center w-full'>
                    <Link href="/">
                        <h1 className='text-dark font-bold text-4xl font-geist-mono'>BIOSFERA</h1>
                    </Link>
                    <ToggleButton />
                </div>
                <div className='hidden flex-col justify-center items-center sm:flex sm:flex-row sm:gap-4' id='navbarMobile'>
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