import React from 'react';
import ShowCard from './ShowCard';
import ShowEmpty from './ShowEmpty';

const CardTools = ({cardStor,setCardStor}) => {
    return (
        <div className='h-[400px] border'>
            {cardStor.length >0 ? <div>{cardStor.map((item,index)=> <ShowCard key={index}  item={item} setCardStor={setCardStor}/>) }</div> : <ShowEmpty/>
            }
        </div>
    );
};

export default CardTools;