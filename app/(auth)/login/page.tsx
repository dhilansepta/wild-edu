import React from 'react';
import AuthButton from '@/app/components/AuthButton';

export const metadata = {
    title: "Login"
}

const Login = () => {
    return (
        <main className='w-screen h-screen flex flex-col items-center justify-center text-center font-poppins'>
            <div className='w-[calc(100% - 2rem)] bg-primary p-8 rounded-xl sm:w-1/2 lg:w-1/3'>
                <h1 className='font-bold font-dark text-xl sm:text-2xl mb-4'>Login</h1>
                <AuthButton params="Login"/>
            </div>
        </main>
    );
};

export default Login;
