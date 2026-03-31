import React from 'react';
import { toast } from 'react-toastify';

const ShowCard = ({ item, cardStor, setCardStor,cardTaka,setCardTaka }) => {

    const handelClickItem = (name,item) => {
        setCardTaka(cardTaka-item.price)
        const updateData = cardStor.filter(cart => cart.name !== name)
        setCardStor(updateData);
        toast("Delete successfully...")
    }


    return (
        <div className='grid grid-cols-2 bg-gray-200 rounded-xl px-2 py-1 mt-5 justify-between items-center'>
            <div className='flex items-center gap-6 '>
                <img className='h-10 w-10 ' src={item.img} alt="" />
                <div className='font-bold '>
                    <h1 >{item.name}</h1>
                    <h1 >{item.price}</h1>
                </div>
            </div>
            <div className='flex justify-around md:justify-end'>
                <button onClick={() => handelClickItem(item.name,item)} className='btn px-7 text-red-700 w-[30%] '>DELETE</button>
            </div>
        </div>

    );
};

export default ShowCard;