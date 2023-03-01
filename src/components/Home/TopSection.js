import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoView } from 'react-photo-view';
import banner from '../../assets/banner.png'

const TopSection = () => {
    return (
        <div className="bg-white">
        <div className=" mx-auto px-4 min-h-[50vh] pt-10 rounded-lg bg-gray-100  bg-cover bg-no-repeat ">
            <div className="lg:flex flex-row-reverce">
                <div className='w-full flex justify-end lg:order-2 order-1'>

                    <PhotoView src={banner}>
                        <img className='hover:translate-x-2  duration-300 rounded-2xl' src={banner} alt="" />
                    </PhotoView>
                </div>
                <div className='flex flex-col  justify-center w-full mt-10 '>
                    <h3 className='text-4xl font-bold text-2xl  mb-7 '><span className='text-green-500'>RepairPlus</span> Bangladesh</h3>
                    <h3 className='text-lg mb-3'>RepairPlus Bangladesh is a very famous servicing center.Here you can get mobile repair at low cost and buy any mobile device.We regularly provides servicing in our shop Dhaka at 9am to 10pm.</h3>
                    <div className="flex gap-6 mb-6">
                        <button className="py-2 w-44 list-none px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300 text-lg font-bold">
                            <Link to={'/blog'}>Read More</Link></button>
                        <button className="py-2 w-44 list-none px-3 bg-[#C3FFFC] hover:bg-green-300 text-yellow-900 hover:text-blue-500 rounded transition duration-300 text-lg font-bold"><Link to={'/services'}>Services</Link></button>
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
};

export default TopSection;