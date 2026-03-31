import React from 'react';
import userImg from "../../assets/user.png"
import roketImg from "../../assets/rocket.png"
import packegeImg from "../../assets/package.png"
const Step = () => {
    return (
        <div className='mt-20 container mx-auto'>
            <div className='text-center'>
                <h1 className='text-[48px] font-extrabold'>Get Started in 3 Steps</h1>
                <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='flex gap-6 mt-10'>
                <div className="card w-96 bg-base-100 shadow-sm text-center border-t-2 border-gray-100">
                    <div className='flex justify-end'>
                        <h1 className='px-3  py-1 mt-2 mr-3 rounded-full bg-linear-to-bl from-[#4F39F6] to-[#9514FA] text-white'>1</h1>
                    </div>
                    <img className='w-20 h-20 mx-auto rounded-full p-4 bg-[#e8e6fd]' src={userImg} alt="" />
                    <h1 className='text-[24px] font-bold mt-6 mb-6'>Create Account</h1>
                    <p className='text-[16px] text-[#627382] mb-16'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className="card w-96 bg-base-100 shadow-sm text-center border-t-2 border-gray-100">
                    <div className='flex justify-end'>
                        <h1 className='px-3 py-1 mt-2 mr-3 rounded-full bg-linear-to-bl from-[#4F39F6] to-[#9514FA] text-white'>2</h1>
                    </div>
                    <img className='w-20 h-20 mx-auto rounded-full p-4 bg-[#e8e6fd]' src={packegeImg} alt="" />
                    <h1 className='text-[24px] font-bold mt-6 mb-6'>Choose Products</h1>
                    <p className='text-[16px] text-[#627382] mb-16'>Browse our catalog and select the tools that fit your needs. </p>
                </div>
                <div className="card w-96 bg-base-100 shadow-sm text-center border-t-2 border-gray-100">
                    <div className='flex justify-end'>
                        <h1 className='px-3 py-1 mt-2 mr-3 rounded-full bg-linear-to-bl from-[#4F39F6] to-[#9514FA] text-white'>3</h1>
                    </div>
                    <img className='w-20 h-20 mx-auto rounded-full p-4 bg-[#e8e6fd]' src={roketImg} alt="" />
                    <h1 className='text-[24px] font-bold mt-6 mb-6'>Start Creating</h1>
                    <p className='text-[16px] text-[#627382] mb-16'>Download and start using your premium tools immediately.</p>
                </div>
            </div>


        </div>
    );
};

export default Step;