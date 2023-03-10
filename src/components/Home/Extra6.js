import React from 'react';

const Extra6 = () => {
    return (
        <div className='m-auto text-center my-5 bg-base-100'>

            <h1 className='font-bold text-3xl'>Contact Us</h1>
            <div className='flex justify-evenly my-8'>
              <div className="card w-96 bg-base-100 shadow-xl">
                       <figure>
                           <img className='w-1/2' src="https://cdn.iconscout.com/icon/premium/png-256-thumb/residential-location-612679.png?f=webp&w=256" alt="Location" />
                      </figure>
                         <div className="card-body">
                          <h2 className="card-title">
                            <span className='py-2 font-semibold'>Our Office Address</span></h2>
                          <p>Palm Court Bldg M,410/B,5th Floor,</p>
                          <p>New Link Road,Beside Goregaon Sports</p>
                          <p className='font-bold'>Complex,Gulsan,Dhaka</p>
              
                         </div>
                </div>




                  <div className="card w-96 bg-base-100 shadow-xl">
                        <figure>
                             <img src="https://img.freepik.com/free-photo/young-male-curly-hair-isolated-colorful-shirt-call-gesture-holding-sign-item_141793-30483.jpg?w=740&t=st=1677691786~exp=1677692386~hmac=0cdd2806176d102d23366cd4fe4f8c071ef36f28b2f0e4fcb39576e74886974c" alt="Call" />
                          </figure>
                           <div className="card-body">
                                <h2 className="card-title"><span className='font-semibold'>Call Us</span></h2>
                               <p>(+880)1727 30 24 86</p>
    
                            </div>
                   </div>




                  <div className="card w-96 bg-base-100 shadow-xl">
                         <figure>
                             <img src="https://img.freepik.com/free-photo/alarm-clock-bottle-desktop_1112-1330.jpg?w=740&t=st=1677691845~exp=1677692445~hmac=c67d2f850370d8215ae8a40680ab812faa409bb82722450cf89629ac5df5b853" alt="Watch" />
                        </figure>
                         <div className="card-body">
                           <h2 className="card-title"><span className='font-semibold'>Our Timings</span></h2>
                            <p>Mon-Sun:10:00 AM -09:00 PM</p>
    
                        </div>
                    </div>
                  </div>

     </div>       
       
    );
};

export default Extra6;