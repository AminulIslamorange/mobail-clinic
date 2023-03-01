import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import { toast } from 'react-toastify';
const AddReviewForm = ({setRefresh}) => {
    const { user, logout } = useContext(AuthContext)
    let { id } = useParams()
    const [title, setUserTitle] = useState('')
    const [review, setReview] = useState('')
    const [rating, setRating] = useState('')
    let email = user?.email
    let name = user?.displayName
    let photo = user.photoURL != null ? user.photoURL : 'https://static.thenounproject.com/png/2709857-200.png'
    const handleSubmit = event => {
        event.preventDefault()
        fetch('https://dr-aminul-backend.vercel.app/addreview', {
            method: 'POST',
            body: JSON.stringify({ title, review, email, productid: id, photo, rating, name }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                if (json) {
                    toast.success('Review Added!')
                    event.target.reset()
                    setRefresh(true)
                }
            });
    }
    return (
        <div className='my-10'>
            <form onSubmit={handleSubmit} action="">
                <input
                    onBlur={event => setUserTitle(event.target.value)}
                    type='text'
                    name='title'
                    placeholder='Enter Your Review Title Here'
                    className='w-full px-3 py-2 border rounded-md border-blue-300 focus:outline-blue-400 bg-white text-gray-900 mb-3'
                    required

                />
                <input
                    onBlur={event => setRating(event.target.value)}
                    type='number'
                    name='title'
                    placeholder='Rating (0 - 5)'
                    className='w-full px-3 py-2 border rounded-md border-blue-300 focus:outline-blue-400 bg-white text-gray-900 mb-3'
                    required
                    min={1}
                    max={5}

                />
                <textarea onBlur={event => setReview(event.target.value)} name="" id="" placeholder='Write Your Review' className='w-full px-3 py-2 h-[180px] border rounded-md border-blue-300 focus:outline-blue-400 bg-white text-gray-900' required></textarea>
                <div>
                    <button
                        type='submit'
                        className='w-56 mt-3 px-8 py-3 font-semibold rounded-md bg-blue-500 hover:bg-orange-500 hover:text-white text-gray-100'
                    >
                        Add Review
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddReviewForm;