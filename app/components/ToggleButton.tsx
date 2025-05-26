'use client'

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const ToggleButton = () => {

    function toggleNavbar() {
        const nav = document.getElementById('navbarMobile');
        nav?.classList.toggle('hidden');
    }

    return (
        <>
            <button onClick={toggleNavbar} className="sm:hidden">
                <FontAwesomeIcon icon = {faBars}
                    className='text-2xl'
                />
            </button>
        </>
    )
}

export default ToggleButton