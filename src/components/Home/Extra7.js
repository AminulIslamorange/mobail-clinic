import React from 'react';

const Extra7 = () => {
    return (
        <div className='text-center my-28'>
           <div className='flex p-2 my-3 ml-24 text-center mx-auto'>
               <input type="text" placeholder="Full Name" className="input input-bordered input-success w-full max-w-xs m-2" />

                <input type="text" placeholder="Email" className="input input-bordered input-success w-full max-w-xs m-2" />

               <input type="text" placeholder="Mobile Number" className="input input-bordered input-success w-full max-w-xs m-2" />
           </div>
           
            <div> <input type="text" placeholder="Message" className="input input-bordered input-success w-full " /></div>
            <button className='mt-4 px-8 py-2 bg-green-500 rounded-lg text-lg font-bold text-white hover:bg-gray-800 duration-500'>Submit Now</button>
        </div>
    );
};

export default Extra7;