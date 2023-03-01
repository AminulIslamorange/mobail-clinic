import React, { useContext } from 'react';
import { PhotoView } from 'react-photo-view';

import ReviewCard from '../components/child/ReviewCard';
import { AuthContext } from '../contexts/UserContext';
import AddReviewForm from '../components/child/AddReviewForm';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const SingleService = () => {
    let { id } = useParams()
    const [data, setData] = useState({})
    const [reviews, setReviews] = useState([])
    const [refresh, setRefresh] = useState(false);
    let img = data?.mainimage
    useEffect(() => {
        fetch(`https://dr-aminul-backend.vercel.app/service/${id}`).then(res => res.json()).then(data => setData(data?.data))
        img = data?.mainimage
        fetch(`https://dr-aminul-backend.vercel.app/reviews/${id}`).then(res => res.json()).then(data => setReviews(data?.data))
        img = data?.mainimage
    }, [refresh])

    const { user, logout } = useContext(AuthContext)

    let ratings = []
    for (let i = 0; i < Number(data?.rating); i++) {
        ratings.push(i)
    }

    return (
        <div className="min-h-screen ">
           
            <div className="lg:max-w-7xl mx-auto px-4   ">
                {/* Coomon Top */}
                <div className='mb-6'>
                    <img className='-z-10 block' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXXycPdbrOKY3mWden26R5BFOZpjH8BLViP0Vxoyc7UuVZW956LVU6cePF-UYJ0SOeDI&usqp=CAU" alt="" />
                    <h3 className=' text-2xl font-bold z-10 ml-24 -mt-24 text-blue-500 '>{data?.title}</h3>
                </div>

                <div className="md:flex gap-4 pt-10 ">
                    <div className="img md:w-2/4 ">
                        <PhotoView src={img}>
                            <img className='rounded-lg max-w-md shadow w-full h-[300px]  ' src={img} alt="" />
                        </PhotoView>

                    </div>
                    <div className="info p-2 md:w-3/4">
                        <h3 className='text-3xl font-bold text-gray-600 mb-3'>{data?.title}
                        </h3>

                        <div className='flex justify-between w-full mb-3'>
                            <p className='text-lg font-bold'>Price: ${data?.price}</p>
                            <div className='text-lg font-bold flex items-center gap-1'>
                                <h3>Reviews : </h3>
                                {
                                    ratings.map(r => <img key={r} className='w-5 h-5' src="https://freeiconshop.com/wp-content/uploads/edd/star-curved-flat.png" alt="" />)

                                }
                            </div>

                        </div>
                        {/* short des */}
                        <p className='px-2 py-2 bg-green-100 text-lg rounded-lg text-yellow-900 max-w-max'> <span className='font-bold'>Service Id:</span>  {id}</p>
                        <p > {data.shortdescription}</p>
                    </div>
                </div>
                {/* Full Description */}
                <div className='p-2 md:p-0 mt-2'>
                    <p className='text-lg'> {data.longdescription} </p>
                </div>
                {/* reviews */}
                <div className='mt-6'>
                    <div>
                        <h3 className='text-2xl font-bold text-gray-500 my-3'>Reviews</h3>
                        {user?.email ? <AddReviewForm setRefresh={setRefresh} /> : <Link className='flex items-center gap-4  text-blue-500 text-lg  my-4 underline' to={'/login'}><img className='w-6 h-6' src='https://pngimg.com/uploads/plus/plus_PNG95.png' alt='' /> Please login to add a review</Link>}
                    </div>

                    {
                        reviews.map(r => <ReviewCard key={r._id} data={r}   />)
                    }
                </div>

            </div>
        </div>
    );
};

export default SingleService;