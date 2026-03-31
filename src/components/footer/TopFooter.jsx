import React from 'react';

const TopFooter = () => {
    return (
        <div className='py-7 md:py-16 mt-20 bg-linear-to-bl from-[#4F39F6] to-[#9514FA] grid items-center'>
            <div className=' space-y-8'>
                <div className='container mx-auto text-center text-white'>
                    <h1 className='text-[40px] font-extrabold '>Ready to Transform Your Workflow?</h1>
                    <p>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
                </div>
                <div className='flex items-center justify-center gap-5'>
                    <button className=' bg-white px-4 py-2 rounded-3xl '>Explore Products</button>
                    <button className=' text-white border border-white px-4 py-2 rounded-3xl'>View Pricing</button>
                </div>
                <div className='text-white text-center'>
                    <h2 >14-day free trial • No credit card required • Cancel anytime</h2>
                </div>
            </div>
        </div>
    );
};

export default TopFooter;