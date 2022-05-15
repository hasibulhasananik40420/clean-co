import React from 'react';
import image from '../Assets/Image/bucketgirl.png'
const Landing = () => {
    return (
        <div>
            <div class="hero md:h-[70vh] bg-accent mt-16 relative ">
                <div class="hero-content flex-col lg:flex-row ">
                    <div >
                         <p  data-aos-duration='1000'
                         data-aos-delay='200' data-aos='fade-right' class='text-xl font-serif'>Best Quality</p>
                        <h1  data-aos-delay='400'
                       data-aos-duration='900' data-aos='fade-right' class="md:text-3xl font-bold">Professional Cleaning Service</h1>
                        <p  data-aos-delay='600'
                        data-aos-duration='800' data-aos='fade-right' class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button  data-aos='zoom-in'
                       data-aos-delay='1300'  class="btn btn-primary">Get Started</button>
                      </div>
                      <div class='h-[70vh]'>
                      <img src={image} class="h-full" alt=''/>

                      </div>
                </div>
            </div>

             <div class='rounded-2xl mx-auto mt-[-40px] relative z-20 bg-[#98A8DD] shadow-lg p-10 w-5/6'>
             <h1 className='text-2xl mb-5 text-primary'>Get Free Estimate</h1>
               <div class='grid grid-cols-1 md:grid-cols-4 gap-4'>
               <input
            type='text'
            placeholder='Type here'
            class='input input-bordered w-full'
          />
          <input
            type='text'
            placeholder='Type here'
            class='input input-bordered w-full'
          />
          <input
            type='text'
            placeholder='Type here'
            class='input input-bordered w-full'
          />
          <input
            type='text'
            placeholder='Type here'
            class='input input-bordered w-full'
          />
          <input
            type='text'
            placeholder='Type here'
            class='input input-bordered w-full'
          />
          <input
            type='text'
            placeholder='Type here'
            class='input input-bordered w-full'
          />
          <input
            type='text'
            placeholder='Type here'
            class='input input-bordered w-full'
          />
          <input
            type='text'
            placeholder='Type here'
            class='input input-bordered w-full'
          />
        </div>
        <button className='btn btn-primary mt-5'>Request a Quote</button>
             </div>
        </div>
    );
};

export default Landing;