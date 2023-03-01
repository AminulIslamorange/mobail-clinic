import React, { useState } from 'react';

import { toast } from 'react-toastify';

const AddService = () => {
    const [title, setTitle] = useState('')
    const [shortdescription, setShortdes] = useState('')
    const [longdescription, setLongdes] = useState('')
    const [price, setPrice] = useState('')
    const [rating, setRating] = useState('')
    const [bannerimage, setBannerImage] = useState('')
    const [mainimage, setMainImage] = useState('')


    const handleSubmit = event => {
        console.log(event);
        event.preventDefault()
        fetch('https://dr-aminul-backend.vercel.app/addservice', {
            method: 'POST',
            body: JSON.stringify({ title, shortdescription, longdescription, price, rating, bannerimage, mainimage }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                if (json) {
                    toast.success('Service Added!')
                    console.log(json);
                    event.target.reset()
                }
                else{
                    console.log(json)
                }
                
            });
    }


    return (
        <div className="min-h-screen ">
             
            <div className="lg:max-w-7xl mx-auto px-4   ">
                {/* Coomon Top */}
                <div className='mb-6'>
                    <img className='-z-10 block' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXXycPdbrOKY3mWden26R5BFOZpjH8BLViP0Vxoyc7UuVZW956LVU6cePF-UYJ0SOeDI&usqp=CAU" alt="" />
                    <h3 className='absulate text-2xl font-bold z-10 ml-24 -mt-24 text-blue-500 '>Add a Service</h3>
                </div>

                <form className='pt-10' onSubmit={handleSubmit} action="">
                    <input
                        onBlur={event => setTitle(event.target.value)}
                        type='text'
                        name='title'
                        placeholder='Service Title'
                        className='w-full px-3 py-2 border rounded-md border-blue-300 focus:outline-blue-400 bg-white text-gray-900 mb-3'
                        required

                    />
                    <textarea onBlur={event => setShortdes(event.target.value)} name="" id="" placeholder='Short Description' className='w-full px-3 py-2 h-[130px] border rounded-md border-blue-300 focus:outline-blue-400 bg-white text-gray-900' required></textarea>

                    <textarea onBlur={event => setLongdes(event.target.value)} name="" id="" placeholder='Long Description' className='w-full px-3 py-2 h-[330px] border rounded-md border-blue-300 focus:outline-blue-400 bg-white text-gray-900' maxLength={5000} required></textarea>

                    <div className="flex gap-4">
                        <input
                            onBlur={event => setPrice(event.target.value)}
                            type='text'
                            name='title'
                            placeholder='Price'
                            required
                            className='w-full px-3 py-2 border rounded-md border-blue-300 focus:outline-blue-400 bg-white text-gray-900 mb-3'

                        />
                        <input
                            onBlur={event => setRating(event.target.value)}
                            type='text'
                            name='title'
                            placeholder='Raing (eg , 0-5)'
                            required
                            className='w-full px-3 py-2 border rounded-md border-blue-300 focus:outline-blue-400 bg-white text-gray-900 mb-3'
                            min={1}
                    max={5}

                        />
                    </div>
                    <div className="flex gap-4">
                        <input
                            onBlur={event => setBannerImage(event.target.value)}
                            type='text'
                            name='title'
                            placeholder='Banner Image URL'
                            required
                            className='w-full px-3 py-2 border rounded-md border-blue-300 focus:outline-blue-400 bg-white text-gray-900 mb-3'

                        />
                        <input
                            onBlur={event => setMainImage(event.target.value)}
                            type='text'
                            name='title'
                            placeholder='Main Image URL'
                            required
                            className='w-full px-3 py-2 border rounded-md border-blue-300 focus:outline-blue-400 bg-white text-gray-900 mb-3'

                        />
                    </div>
                    <div>
                        <button
                            type='submit'
                            className='w-56 mt-3 px-8 py-3 font-semibold rounded-md bg-blue-500 hover:bg-orange-500 hover:text-white text-gray-100'
                        >
                            Add Service
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddService;