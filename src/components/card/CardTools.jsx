import React from 'react';
import ShowCard from './ShowCard';
import ShowEmpty from './ShowEmpty';

const CardTools = ({ cardStor, setCardStor,cardTaka,setCardTaka }) => {
    const handelClickEmpty = () => {
        setCardStor([])
    }
    return (
        <div className='bg-base-100 shadow-sm card border border-gray-100'>
            {cardStor.length > 0 ?
                <div className='mx-6'>
                    <h1 className='text-[20px] font-bold mt-5 mb-10'>Your Card</h1>
                    {cardStor.map((item, index) => <ShowCard key={index} item={item} cardStor={cardStor} setCardStor={setCardStor} cardTaka={cardTaka} setCardTaka={setCardTaka}/>)}
                    <div className='flex justify-between mx-10 mb-2 mt-20'>
                        <h1>Total</h1>
                        {/* kaj ace */}
                        <h1>${cardTaka.toFixed(2)}</h1>
                    </div>
                    <button onClick={() => handelClickEmpty()} className='bg-linear-to-bl from-[#4F39F6] to-[#9514FA] rounded-3xl w-full py-2 rounded-2xl text-white '> Proceed to Checkout </button>
                </div>
                : <ShowEmpty />
            }
        </div>
    );
};

export default CardTools;