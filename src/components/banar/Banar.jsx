import React from 'react';
import img1 from "../../assets/Group 5.png"
import banarImg from "../../assets/banner.png"
import { CiPlay1 } from 'react-icons/ci';
const Banar = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 container mx-auto items-center my-[30px] gap-5'>
            <div>
                <div className='flex bg-[#E1E7FF] w-[300px] gap-1 py-1 px-2 rounded-xl'>
                    <img src={img1} alt="" />
                    <h1 className='text-[#4F39F6]'>New: AI-Powered Tools Available</h1>
                </div>
                <h1 className='text-[72px] font-extrabold'>Supercharge Your <br></br><span className='bg-gradient-to-bl from-[#4F39F6] to-[#9514FA]  bg-clip-text text-transparent'>Digital Workflow</span></h1>
                <p>Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today.
                    Explore Products
                </p>
                <div className='flex gap-4 mt-6'>
                    <button className='border rounded-3xl px-4 py-2 text-[16px] font-bold bg-linear-to-bl from-[#4F39F6] to-[#9514FA] text-white'>Explore Products</button>
                    <button className='flex items-center border rounded-3xl px-4 py-2 text-[16px] font-bold gap-1   '><CiPlay1 /> <h1 className='bg-linear-to-bl from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'> Watch Demo </h1></button>
                </div>
            </div>
            <div>
                <img src={banarImg} alt="" />
            </div>
        </div>
        
    );
};

export default Banar;