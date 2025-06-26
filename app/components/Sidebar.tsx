'use client'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX, faChartLine, faPencil, faUser, faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { signOut } from 'next-auth/react';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    const handleLogout = () => {
        signOut({ callbackUrl: '/' });
    };

    return (
        <>
            {isMobile && (
                <button
                    className={`fixed top-4 left-4 z-50 bg-primary p-2 rounded-md text-black transition-all duration-300 
                        ${isOpen ? 'left-64' : 'left-4'}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle sidebar"
                >
                    {isOpen ? (
                        <FontAwesomeIcon icon={faX} className='text-xl' />
                    ) : (
                        <FontAwesomeIcon icon={faBars} className='text-xl' />
                    )}
                </button>
            )}

            <aside className={`
                ${isMobile ? 'fixed' : 'sticky'} 
                top-0 left-0 h-screen z-40 w-78 text-center bg-primary text-black p-4 
                transform transition-transform duration-300 ease-in-out drop-shadow-xl drop-shadow-primary
                ${isMobile && !isOpen ? '-translate-x-full' : 'translate-x-0'}
            `}>
                <div className="flex flex-col items-center h-20 mb-8 p-3 border-b-2 border-secondary">
                    <h1 className="text-xl lg:text-2xl font-bold">CMS BIOSFERA</h1>
                    <p className='md:hidden'>Username - Role</p>
                </div>

                <nav>
                    <ul className="space-y-2">
                        <SidebarItem href="/dashboard" icon={faChartLine} text="Dashboard" />
                        <SidebarItem href="/managearticle" icon={faPencil} text="Article" />
                        <SidebarItem href="/users" icon={faUser} text="Users" />
                        <li>
                            <Link href="/" onClick={handleLogout} className="flex items-center p-3 rounded-lg hover:bg-secondary hover:text-white transition-colors">
                                <FontAwesomeIcon icon={faDoorOpen} className='mr-3 text-xl' />
                                <span className="text-lg">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>

            {isMobile && isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    )
}

function SidebarItem({ href, icon, text }: { href: string; icon: IconProp; text: string }) {
    return (
        <li>
            <Link href={href} className="flex items-center p-3 rounded-lg hover:bg-secondary hover:text-white transition-colors">
                <FontAwesomeIcon icon={icon} className='mr-3 text-xl' />
                <span className="text-lg">{text}</span>
            </Link>
        </li>
    )
}