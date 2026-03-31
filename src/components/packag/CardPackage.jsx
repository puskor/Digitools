import React from 'react';
import { FaDollarSign } from 'react-icons/fa';

const CardPackage = () => {
    const linear = "bg-linear-to-bl from-[#4F39F6] to-[#9514FA]";
    return (
        <div className='mt-7 grid grid-cols-1 md:grid-cols-3'>
            {/* 1st */}
            <div className="card w-96 bg-base-100 border border-gray-100 shadow-sm">
                <div className="card-body">
                    <div className="">
                        <h2 className="text-3xl font-bold">Starter</h2>
                        <p>Perfect for getting started</p>
                        <div className=' flex items-end '>
                            <div className='flex items-center text-[40px] font-bold relative'>
                                <FaDollarSign className='p-0' />
                                <h1>29</h1>
                                <h3 className='absolute top-7 left-[90px] text-[16px] font-normal'>/month</h3>
                            </div>

                        </div>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Access to 10 free tools</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Basic templates</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Community support</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>1 project per month</span>
                        </li>

                    </ul>
                    <div className="mt-auto">
                        <button className={`${linear} p-2 w-full rounded-3xl text-white font-bold`}>Subscribe</button>
                    </div>
                </div>
            </div>
            {/* 2nd card */}
            <div className={`${linear} card w-96  border border-gray-100 shadow-sm relative`}>
                <h1 className='absolute -top-4 left-[35%] text-[#BB4D00] border bg-[#FEF3C6] px-2 rounded-3xl'>Most Popular</h1>
                <div className="card-body text-white">
                    <div className="">
                        <h2 className="text-3xl font-bold">Pro</h2>
                        <p>Best for professionals</p>
                        <div className=' flex items-end '>
                            <div className='flex items-center text-[40px] font-bold relative'>
                                <FaDollarSign className='p-0' />
                                <h1>29</h1>
                                <h3 className='absolute top-7 left-[90px] text-[16px] font-normal'>/month</h3>
                            </div>

                        </div>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Access to all premium tools</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Unlimited templates</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Community support</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Priority support</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Unlimited projects</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Cloud sync</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Advanced analytics</span>
                        </li>

                    </ul>
                    <div className="mt-auto w-full rounded-3xl bg-white  text-center">
                        <button className={`${linear} bg-clip-text text-transparent p-2 font-bold`}>Subscribe</button>
                    </div>
                </div>
            </div>
            {/* 3rd card */}
            <div className="card w-96 bg-base-100 border border-gray-100 shadow-sm">
                <div className="card-body">
                    <div className="">
                        <h2 className="text-3xl font-bold">Enterprise</h2>
                        <p>For teams and businesses</p>
                        <div className=' flex items-end '>
                            <div className='flex items-center text-[40px] font-bold relative'>
                                <FaDollarSign className='p-0' />
                                <h1>29</h1>
                                <h3 className='absolute top-7 left-[90px] text-[16px] font-normal'>/month</h3>
                            </div>

                        </div>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Everything in Pro</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Team collaboration</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Custom integrations</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Dedicated support</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>SLA guarantee</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Custom branding</span>
                        </li>

                    </ul>
                    <div className="mt-auto">
                        <button className={`${linear} p-2 w-full rounded-3xl text-white font-bold`}>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardPackage;