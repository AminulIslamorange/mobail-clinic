import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section className='flex items-center h-screen p-16  text-gray-900'>
       
        <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8 relative'>
            <img src="https://cdn.mos.cms.futurecdn.net/PuXipAW3AXUzUJ4uYyxPKC-1200-80.jpg" alt="" />
            <div className='max-w-md text-center absolute mt-2'>
                <h2 className='mb-8 font-extrabold text-9xl text-gray-600'>
                    <span className='sr-only'>Error</span>404
                </h2>
                
                <Link
                    to='/'
                    className='px-8 py-3 font-semibold rounded bg-blue-500 hover:bg-orange-500 text-gray-100'
                >
                    Back to homepage
                </Link>
            </div>
        </div>
    </section>
    );
};

export default ErrorPage;