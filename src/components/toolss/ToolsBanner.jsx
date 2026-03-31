import React from 'react';

const ToolsBanner = () => {
    return (
        <div className='text-center mt-20 '>
            <h1 className='text-[48px] font-extrabold'>Premium Digital Tools</h1>
            <p>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            <div className='mx-auto border border-gray-300 w-[200px] rounded-3xl flex justify-between mt-5'>
                <button className='bg-linear-to-bl from-[#4F39F6] to-[#9514FA] rounded-3xl py-2 px-4'>Products</button>
                <button className='bg-linear-to-bl from-[#4F39F6] to-[#9514FA] rounded-3xl py-2 px-7'>Carts</button>
            </div>
        </div>
    );
};

export default ToolsBanner;