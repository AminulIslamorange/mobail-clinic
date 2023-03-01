import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../components/child/ServiceCard';



const HomeServices = () => {
    const [datas, setDatas] = useState()
    console.log(datas);
    useEffect(() => {
        fetch('https://dr-aminul-backend.vercel.app/services/home')
        .then(res => res.json())
        .then(data => setDatas(data?.data))
    }, [])
    return (
        <div className="  ">
            <div className="lg:max-w-7xl mx-auto px-4  py-10 ">
                {/* Coomon Top */}
                <div className='mb-6'>
                    <img className='-z-10 block' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXXycPdbrOKY3mWden26R5BFOZpjH8BLViP0Vxoyc7UuVZW956LVU6cePF-UYJ0SOeDI&usqp=CAU" alt="" />
                    <h3 className='absulate text-2xl font-bold z-10 ml-24 -mt-24 text-blue-500 '>Services</h3>
                </div>

                <div className='grid  lg:grid-cols-3 gap-6 justify-center mb-4'>
                    {
                        datas?.map(data => <ServiceCard key={data?._id} data={data} />)
                    }

                   
                </div>
                <div className='mt-10 flex justify-center'>
                    <Link to={'/services'}><button className='mt-4 px-8 py-2 bg-green-500 rounded-lg text-lg font-bold text-white hover:bg-gray-800 duration-500'>See All</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HomeServices;