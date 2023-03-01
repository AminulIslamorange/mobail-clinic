import React, { useContext, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/UserContext';


const Myreviews = () => {
    const { user, logout } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    const [refresh, setRefresh] = useState(false);

    let token = localStorage.getItem('token')

  
let email = user?.email
  useEffect(() => {
        fetch(`https://dr-aminul-backend.vercel.app/myreviews/${email}`).then(res => res.json()).then(data => setReviews(data?.data))
    }, [email , refresh])
// console.log(reviews,email,token);

 const handleDelete =(id) =>{
    fetch(`https://dr-aminul-backend.vercel.app/deletereview/${id}` , {method : 'DELETE'}).then(res => res.json()).then(data => {
        if (data) {
            toast.success("Deleted Succesfull")  
            setRefresh(true)
        }
    })
 }

 if (!token) {
    return <h1 className='text-center text-2xl font-bold my-[50vh]'>This Page Is Not For You . <Link className='text-blue-500' to={'/'}>Go Back To Home</Link> </h1>
}

    return (
        <div className="min-h-screen ">
            
            <div className="lg:max-w-7xl mx-auto px-4  py-4 ">
                {/* Coomon Top */}
                <div className='mb-6'>
                    <img className='-z-10 block' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXXycPdbrOKY3mWden26R5BFOZpjH8BLViP0Vxoyc7UuVZW956LVU6cePF-UYJ0SOeDI&usqp=CAU" alt="" />
                    <h3 className='absulate text-2xl font-bold z-10 ml-24 -mt-24 text-blue-500 '>My Reviews</h3>
                </div>
                <div className="container mx-auto px-4 sm:px-8">
                    <div className="py-8">

                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div
                                className="inline-block min-w-full  -md rounded-lg overflow-hidden"
                            >
                                <table className="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                            >
                                                Service
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                            >
                                                Title
                                            </th>

                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                            >
                                                Status
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                            >
                                                Action
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            reviews?.map(data =>  
                                                <tr key={data._id}>
                                                <td class="px-5 py-5  border-b border-gray-200 bg-white text-sm">
                                                    <div class="flex">
                                                        <div class="flex-shrink-0 w-10 h-10">
                                                            <img
                                                                class="w-full h-full rounded-full"
                                                                src={data?.photo}
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div class="ml-3 min-w-max">
                                                            <p class="text-gray-900 whitespace-no-wrap">
                                                                {data?.name}
                                                            </p>
                                                            <p class="text-gray-600 whitespace-no-wrap">{data._id}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm min-w-max">
                                                    <p class="text-gray-900 whitespace-no-wrap">{data.title.slice(0,90)}</p>
    
                                                </td>
    
                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <span
                                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                                                    >
                                                        <span
                                                            aria-hidden
                                                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                                        ></span>
                                                        <span class="relative">Active</span>
                                                    </span>
                                                </td>
                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                                                    <button
                                                        type="button"
                                                        class="inline-block mr-4 text-gray-500 hover:text-gray-700"
                                                    >
                                                        <img className='w-6 h-6 hover:scale-105 duration-500' src="https://www.svgrepo.com/show/39632/pen.svg" alt="" />
                                                    </button>
                                                    <button
                                                        type="button"
                                                        class="inline-block text-gray-500 hover:text-gray-700"
                                                        onClick={()=>handleDelete(data._id)}
                                                    >
                                                        <img className='w-8 h-8 hover:scale-105 duration-500' src="https://www.svgrepo.com/show/348050/bin.svg" alt="" />
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                        }



                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div></div><div className="container mx-auto px-4 sm:px-8">
            </div>

        </div>
    );
};

export default Myreviews;