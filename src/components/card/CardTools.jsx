import React from 'react';
import ShowCard from './ShowCard';
import ShowEmpty from './ShowEmpty';

const CardTools = ({ cardStor, setCardStor }) => {
    const handelClickEmpty = () => {
        setCardStor([])
    }
    return (
        <div className='h-[400px] border'>
            {cardStor.length > 0 ? 
            <div>
                {cardStor.map((item, index) => <ShowCard key={index} item={item} setCardStor={setCardStor} />)}
                <button onClick={() => handelClickEmpty()} className='btn btn-primary w-full mt-20 py-8'> All Clear</button>
            </div>
                : <ShowEmpty />
            }
        </div>
    );
};

export default CardTools;