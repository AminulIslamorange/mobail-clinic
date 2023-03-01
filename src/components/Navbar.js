import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/UserContext';

const Navbar = () => {
    const [active, setActive] = useState(false)
    const { user, logout } = useContext(AuthContext)
    console.log(active);
    const handleLogout = () => {
        logout()
            .then(toast.success('Log Out Successfully'))
            .catch(error => console.log(error))
    }


    return (

        <nav className="bg-gray-100 py-3 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center">

                    <div className="flex items-center space-x-4">

                        <div>

                            <Link to='/'>
                                <span className="font-bold text-2xl "><span className='text-green-500'> Repair</span><span className='font-bold text-2xl'>Plus</span></span></Link>

                        </div>


                        <div className=" md:flex items-center space-x-1  ">
                            <Link to='/services' className="py-5 px-3 text-gray-700 hover:text-gray-900 font-bold">Services</Link>
                            <Link to='/blog' className="py-5 px-3 text-gray-700 hover:text-gray-900 font-bold">Blogs</Link>

                        </div>

                    </div>


                    <div className="hidden md:flex items-center space-x-1">

                        {user?.email ? (
                            <>
                                <div className="hidden md:flex items-center space-x-1  ">
                                    <Link to='/add-services' className="py-5 px-3 text-gray-700 hover:text-gray-900 font-bold">Add Service</Link>
                                    <Link to='/my-reviews' className="py-5 px-3 text-gray-700 hover:text-gray-900 font-bold">My Reviews</Link>
                                    <button
                                        onClick={handleLogout}
                                        className='inline-flex items-center bg-gray-700 my-4 hover:bg-blue-50-0 py-2 px-4 focus:outline-none hover:text-black hover:bg-gray-200 rounded font-bold text-white mt-4 md:mt-0'
                                    >
                                        Logout

                                    </button>
                                </div>
                            </>
                        ) : (
                            <ul className='flex items-center font-bold'>
                                <li href="" className="py-5 block px-3 list-none"> <Link to={'/login'}>Login</Link></li>

                                <li href="" className="py-2 block list-none px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"><Link to={'/register'}>Register</Link></li>
                               
                            </ul>
                        )}

                    </div>


                    <div className="lg:hidden flex items-center">
                        <button onClick={() => setActive(!active)} className="mobile-menu-button">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>




            <div>
                {
                    active && <div onClick={() => setActive(!active)} className='w-full min-h-screen bg-gray-50 absolute z-50 lg:hidden top-0'>
                        <li className='block w-full my-4 hover:bg-blue-50'>  <Link to='/add-service' className="py-5 px-3 text-gray-700 hover:text-gray-900 font-bold">Add Service</Link></li>
                        <li className='block w-full my-4 hover:bg-blue-50'>    <Link to='/my-reviews' className="py-5 px-3 text-gray-700 hover:text-gray-900 font-bold">My Reviews</Link></li>
                        {user?.email ? (

                            <ul className="  ">
                                <li className='block w-full my-4 hover:bg-blue-50'> <Link to='/add-service' className="py-5 px-3 text-gray-700 hover:text-gray-900 font-bold">Add Service</Link></li>
                                <li className='block w-full my-4 hover:bg-blue-50'> <Link to='/my-reviews' className="py-5 px-3 text-gray-700 hover:text-gray-900 font-bold">My Reviews</Link></li>
                                <li className='block w-full my-4 hover:bg-blue-50 ml-4'> <button
                                    onClick={handleLogout}
                                    className='inline-flex items-center bg-gray-700 my-4 hover:bg-blue-50-0 py-2 px-4 focus:outline-none hover:text-black hover:bg-gray-200 rounded font-bold text-white mt-4 md:mt-0'
                                >
                                    Logout

                                </button>  </li>
                            </ul>

                        ) : (
                            <ul className='flex items-center font-bold'>
                                <li href="" className="py-5 block px-3 list-none"> <Link to={'/login'}>Login</Link></li>

                                <li href="" className="py-2 block list-none px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"><Link to={'/register'}>Register</Link></li>
                            </ul>
                        )}
                    </div>
                }
            </div>


        </nav>



    );
};

export default Navbar;