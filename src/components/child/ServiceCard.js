import React from 'react';
import { PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
const ServiceCard = ({ data }) => {
    let ratings = []

    for (let i = 0; i < Number(data?.rating); i++) {
        ratings.push(i)
    }

    return (

        <div className="max-w-sm">
            <article className="max-w-2xl mx-auto bg-gradient-to-r from-blue-300 via-blue-400 to-[#86EFAC] relative mb-12 rounded-3xl transform -rotate-6 translate-y-14 lg:p-4 font-body">
                <div className="bg-white h-full transform rotate-6 lg:p-8 px-6 py-4  -lg lg:rounded-3xl">

                    <PhotoView src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPCY_-RRCKz3WCP_-8KlJQI_cGqwNQ_Ytxng&usqp=CAU">
                        <img className='w-full h-32' src={data?.bannerimage} alt="" />
                    </PhotoView>

                    <h2 className="text-4xl font-extrabold my-4">{data?.title}</h2>
                    <h2 className="text-sx  b-2">{data?.shortdescription.slice(0, 100)}</h2>
                    <div className='flex justify-between'>
                        <p className='text-lg font-bold'>$ {data?.price}</p>
                        <div className='text-lg font-bold flex items-center gap-1'>
                            {
                                ratings.map(r => <img key={r} className='w-5 h-5' src="https://freeiconshop.com/wp-content/uploads/edd/star-curved-flat.png" alt="" />)

                            }


                        </div>

                    </div>
                    <Link to={`/service/${data?._id}`}><button className="py-2 mt-4 w-full list-none px-3 bg-[#C3FFFC] hover:bg-green-300  hover:text-blue-500 rounded transition duration-300 text-lg font-bold">View Details...</button></Link>


                </div>
            </article>
        </div>

    );
};

export default ServiceCard;