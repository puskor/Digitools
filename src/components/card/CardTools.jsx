import React from 'react';
import ShowCard from './ShowCard';
import ShowEmpty from './ShowEmpty';
import { toast } from 'react-toastify';

const CardTools = ({ cardStor, setCardStor, cardTaka, setCardTaka }) => {
    const handelClickEmpty = () => {
        setCardStor([])
        toast("Proceed to Checkout successfully")
    }
    return (
        <div className='bg-base-100 shadow-sm card border border-gray-100'>
            <div className='mx-6'>
                <h1 className='text-[20px] font-bold mt-5 mb-10'>Your Card</h1>
                {cardStor.length > 0 ?
                    <div>
                        {cardStor.map((item, index) => <ShowCard key={index} item={item} cardStor={cardStor} setCardStor={setCardStor} cardTaka={cardTaka} setCardTaka={setCardTaka} />)}
                        <div className='flex justify-between mx-10 mb-2 mt-20'>
                            <h1>Total</h1>
                            {/* kaj ace */}
                            <h1 className='font-bold'>${cardTaka.toFixed(2)}</h1>
                        </div>
                        <button onClick={() => handelClickEmpty()} className='bg-linear-to-bl from-[#4F39F6] to-[#9514FA] rounded-3xl w-full mb-5 py-2 rounded-2xl text-white '> Proceed to Checkout </button>
                    </div>
                    : <ShowEmpty />
                }
                </ div>
            </div>
            );
};

            export default CardTools;