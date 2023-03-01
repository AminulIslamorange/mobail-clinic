import React from 'react';

const Extra2 = () => {
    return (
        <div className="bg-gray-50">
            <div className="lg:max-w-7xl text-white mx-auto px-4  py-20 lg:flex gap-6">
                <div className="lg:w-2/4 mb-3 w-full h-[250px] p-6 rounded-md bg-[url('https://media.istockphoto.com/id/1419506935/photo/smart-phone-charging-with-usb-power-adaptor-charger-with-device-on-wooden-desk.jpg?b=1&s=170667a&w=0&k=20&c=FE0aPQxXgBS_KyQMTRNHFgulDN38ANGF4esNMIWo9LI=')] bg-cover   ">
                    <h2 className='my-1'>Get Upto 50% Flate</h2>
                    <h2 className='my-2 text-3xl font-bold'>Phone Charger</h2>
                    <h2 className='my-1'>Free Shipping on Order Over $49</h2>
                    <button className=' my-2 rounded-lg bg-white py-2 px-4 text-black font-bold'>Read More</button>
                </div>
                <div className="lg:w-2/4 mb-3 w-full h-[250px] p-6 rounded-md bg-[url('https://cdn.pixabay.com/photo/2022/06/21/21/15/audio-7276511__340.jpg')] bg-cover  text-white ">
                    <h2 className='my-1'>Get Upto 50% Flate</h2>
                    <h2 className='my-2 text-3xl font-bold'>Wireless Headphone</h2>
                    <h2 className='my-1'>Free Shipping on Order Over $49</h2>
                    <button className=' my-2 rounded-lg bg-black py-2 px-4 text-white font-bold'>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Extra2;