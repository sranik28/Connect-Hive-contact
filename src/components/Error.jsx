import React from 'react';
import error from '../assets/error/error.png'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className='flex items-center justify-center'>
                <img className='w-[50%] ' src={error} alt="" />
            </div>
            <h1 className='my-5 text-3xl font-bold text-center'>Server is not found</h1>
            <Link className='block mx-auto text-2xl font-semibold text-center underline text-[#4c5696]' to='/'>Go To Home</Link>
        </div>
    );
};

export default Error;