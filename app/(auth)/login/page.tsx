"use client"
import React from 'react';
import { signIn } from 'next-auth/react';
import AuthButton from '@/app/components/AuthButton';

const Login = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen bg-black'>
            <div className='py-6 px-10 bg-amber-600 rounded-md shadow-md w-80 text-center'>
                <h1 className='text-3xl text-white text-center mb-6'>Login</h1>
                {/* <form className='flex flex-col gap-4'>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        className='p-2 rounded-md border border-white text-white focus:outline-none focus:ring-2 focus:ring-amber-400'
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className='p-2 rounded-md border  border-white text-white focus:outline-none focus:ring-2 focus:ring-amber-400'
                    />

                    <div className='flex flex-col gap-2 mt-4'>
                        <button
                            className='bg-amber-500 hover:bg-amber-200 hover:text-black text-white rounded-md p-2 transition-colors'
                            type='submit' name='action' value='credentials'>
                            Sign In
                        </button>
                    </div>
                </form> */}

                <AuthButton params="Login"/>
            </div>
        </div>
    );
};

export default Login;
