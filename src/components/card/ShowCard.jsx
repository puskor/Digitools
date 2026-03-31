import React from 'react';

const ShowCard = ({item,setCardStor}) => {
    console.log(item);

    // const handelFilter = ()=>{
    //     setCardStor()
    // }
 
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 justify-between border border-gray-300 items-center'>
            <div className='flex items-center text-center justify-center'>
                <h1 className='py-4 w-full bg-red-400'>{item.name}</h1>
                <h1 className='py-4 bg-green-200 w-full'>{item.price}</h1>
            </div>
            <button className='btn px-7 btn-primary h-full'>DELETE</button>
        </div>
    );
};

export default ShowCard;