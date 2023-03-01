import React from 'react';

const ReviewCard = ({ data , setRefresh }) => {
    console.log(data?.rating);
    let reviewsratings = []
    for (let i = 0; i < Number(data?.rating); i++) {
        reviewsratings.push(i)
    }
    return (
        <div className='w-full p-2   min-h-[150px] mb-4'>
            <div className='flex gap-6'>
                <img className='w-16 h-16 rounded-full bg-gray-300' src={data?.photo} alt="" />
                <div>
                    <h3 className="text-xl font-bold text-gray-500">{data?.name}</h3>
                    <h3 className="text-sm  text-blue-500">{data?.email}</h3>
                    <div className='text-lg mt-2 font-bold flex items-center gap-1'>
                        {
                            reviewsratings?.map(r => <img key={r} className='w-5 h-5' src="https://freeiconshop.com/wp-content/uploads/edd/star-curved-flat.png" alt="" />)

                        }
                    </div>

                </div>
            </div>
            <div>
                <p className="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis natus nulla veniam reiciendis perspiciatis nobis explicabo consectetur, atque dolor dolorem nesciunt consequatur est maxime deserunt, molestiae eius eos? Fugiat dolorum beatae quaerat, voluptates distinctio delectus. Doloremque, tenetur.</p>
            </div>
        </div>
    );
};

export default ReviewCard;