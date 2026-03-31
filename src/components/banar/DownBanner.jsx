import React from 'react';

const DownBanner = () => {
    return (
        <div className='h-[200px] bg-linear-to-bl from-[#4F39F6] to-[#9514FA]  flex items-center'>
            <div className='container mx-auto text-white  flex justify-between '>
                <div>
                    <h1 className='text-[60px] font-extrabold '>50K+</h1>
                    <h2 className="text-[24px]">Active Users</h2>
                </div>
                <div className='w-[1px]  bg-white/50'></div>
                <div>
                    <h1 className='text-[60px] font-extrabold '>200K+</h1>
                    <h2 className="text-[24px]">Premium Tools</h2>
                </div>
                <div className='w-[1px]  bg-white/50'></div>
                <div>
                    <h1 className='text-[60px] font-extrabold '>4.9</h1>
                    <h2 className="text-[24px]">Rating</h2>
                </div>

            </div>
        </div>
    );
};

export default DownBanner;