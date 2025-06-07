'use client'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const ToggleButton = ({className}: {className: string}) => {

    function toggleNavbar() {
        const nav = document.getElementById('navbarMobile');
        nav?.classList.toggle('hidden');
    }

    return (
        <>
            <button onClick={toggleNavbar} className={className}>
                <FontAwesomeIcon icon = {faBars}
                    className='text-2xl'
                />
            </button>
        </>
    )
}

export default ToggleButton