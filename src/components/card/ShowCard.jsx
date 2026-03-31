import React from 'react';

const ShowCard = ({ item, cardStor, setCardStor }) => {

    const handelClickItem = (name) => {
        const updateData = cardStor.filter(cart => cart.name !== name)
        setCardStor(updateData);
    }


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 justify-between border border-gray-300 items-center'>
            <div className='flex items-center text-center justify-center font-bold text-white'>
                <h1 className='py-4 w-full bg-red-500 '>{item.name}</h1>
                <h1 className='py-4 bg-green-500 w-full'>{item.price}</h1>
            </div>
            <div className='flex justify-around md:justify-end'>
                <button onClick={() => handelClickItem(item.name)} className='btn px-7 btn-primary w-[30%] '>DELETE</button>
            </div>
        </div>
    );
};

export default ShowCard;