import React from 'react';

const Extra6 = () => {
    return (
        <div className='m-auto text-center my-5 bg-base-100'>

            <h1 className='font-bold text-3xl'>Contact Us</h1>
            <div className='flex justify-evenly my-8'>
              <div className="card w-96 bg-base-100 shadow-xl">
                       <figure>
                           <img className='w-1/2' src="https://cdn.iconscout.com/icon/premium/png-256-thumb/residential-location-612679.png?f=webp&w=256" alt="Shoes" />
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
                             <img src="https://thumbs.dreamstime.com/b/hand-smartphone-unknown-incoming-phone-call-holding-smart-ri nging-tube-165110957.jpg" alt="Shoes" />
                          </figure>
                           <div className="card-body">
                                <h2 className="card-title"><span className='font-semibold'>Call Us</span></h2>
                               <p>(+880)1727 30 24 86</p>
    
                            </div>
                   </div>




                  <div className="card w-96 bg-base-100 shadow-xl">
                         <figure>
                             <img src="https://thumbs.dreamstime.com/b/hand-timer-11932882.jpg" alt="Shoes" />
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