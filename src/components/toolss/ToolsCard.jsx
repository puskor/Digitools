import React from 'react';
import pic1 from "../../assets/products/operation.png"

const ToolsCard = () => {
    return (
        <div className='mt-7'>
            <div className="card w-80 bg-base-100 shadow-sm">
                <div className="card-body relative">
                    <h1 className='absolute top-2 right-4 px-2 py-1 bg-amber-200 rounded-2xl'>Best Seller</h1>
                    <img className='w-15 h-15 border border-gray-300 rounded-full p-2' src={pic1} alt="" />
                    <h1 className='text-[24px] font-bold'>AI Writing Pro</h1>
                    <p>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
                    <div >
                        <h2 className="text-3xl font-bold">Premium</h2>
                        <span className="text-xl">$29/mo</span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>High-resolution image generation</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Customizable style templates</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Batch processing capabilities</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>AI-driven image enhancements</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <button className="bg-linear-to-bl from-[#4F39F6] to-[#9514FA] w-full text-white rounded-3xl py-2 px-4">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToolsCard;