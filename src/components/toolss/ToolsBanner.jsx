import React from 'react';

const ToolsBanner = ({setIsOn,isOn,cardStor}) => {
    const changes=(data)=>{
        setIsOn(data)
    }
    const color= "bg-linear-to-bl from-[#4F39F6] to-[#9514FA] rounded-3xl py-2 text-white";
    return (
        <div className='text-center mt-20 mb-16'>
            <h1 className='text-[48px] font-extrabold'>Premium Digital Tools</h1>
            <p>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            <div className='mx-auto border border-gray-300 w-[260px] rounded-3xl flex justify-between mt-5 font-semibold'>
                <button onClick={()=>changes("product")} className={`${isOn==="product" ? color : " "} px-7`}>Products</button>
                <button onClick={()=>changes("card")} className={`${isOn==="card" ? color : " "} px-7`}>Card ({cardStor.length})</button>
            </div>
        </div>
    );
};

export default ToolsBanner;