import React from 'react';
import { Link } from 'react-router-dom';

const Extra1 = () => {
    return (
        <div className=" bg-[url('https://s.yimg.com/ny/api/res/1.2/et7_AiSx_QA7oIWOBN_zjw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_technology_68/3847eeb1449e56113a3dc81a3e164851')] bg-no-repeat m-16">
            <div className="lg:max-w-7xl mx-auto px-4  py-20  ">
                <div className="lg:flex">
                    <h3 className='lg:w-2/4 text-center lg:text-4xl text-2xl mb-3 font-extrabold text-white'>We’re welcoming new customer and can’t wait to meet you!</h3>
                    <div className="flex lg:w-2/4 items-center justify-center gap-6 ">
                        <Link to='/register'><button className='px-8 py-3 rounded-lg border-white border text-lg text-white font-bold hover:bg-white hover:text-gray-900 duration-300'>Register</button></Link>
                        <Link to='/services'><button className='px-8 py-3 rounded-lg border-orange-500 border text-lg text-white font-bold hover:bg-orange-500 hover:text-gray-900 duration-300'>Services</button></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Extra1;