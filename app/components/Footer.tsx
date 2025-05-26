import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-primary flex flex-col max-w-screen border-t-1 border-dark py-5 px-10'>
            <h1 className='text-dark font-bold text-2xl font-geist-mono'>BIOSFERA</h1>
            <div className='flex flex-row items-center !justify-around not-md:flex-col'>
                <div className='footer_row'>
                    <h1>ini row 1</h1>
                    <h1>ini row 1</h1>
                    <h1>ini row 1</h1>
                    <h1>ini row 1</h1>
                </div>
                <div className='footer_row'>
                    <h1>ini row 2</h1>
                    <h1>ini row 2</h1>
                    <h1>ini row 2</h1>
                    <h1>ini row 2</h1>
                </div>
                <div className='footer_row'>
                    <h1>ini row 3</h1>
                    <h1>ini row 3</h1>
                    <h1>ini row 3</h1>
                    <h1>ini row 3</h1>
                </div>
                <div className='footer_row'>
                    <h1>ini row 4</h1>
                    <h1>ini row 4</h1>
                    <h1>ini row 4</h1>
                    <h1>ini row 4</h1>
                </div>
            </div>
            <h1 className='text-dark font-montserrat text-center text-xl p-2'>Copyright &#169; 2025 Biosfera.id All rights reserved.</h1>
        </footer>
    )
}

export default Footer