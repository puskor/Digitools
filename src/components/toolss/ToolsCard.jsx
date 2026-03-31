import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ToolsCard = ({ card, cardStor, setCardStor, cardTaka, setCardTaka }) => {
    const tag = card.tag;
    const [able, setAble] = useState(false);

    const handelClickAddded = (card) => {
        setCardStor([...cardStor, card])
        setAble(true)
        toast("Added successfully")
        setCardTaka(cardTaka + card.price)
    }
    return (
        <div className='flex justify-center'>
            <div className="card w-80 h-full bg-base-100 shadow-sm border-t-2 border-gray-100 hover:-translate-y-2 hover:shadow-xl">
                <div className="card-body relative">
                    <h1 className={`absolute top-2 right-4 px-2 py-1 ${tag == "popular" ? "bg-amber-100 text-amber-600" : " bg-red-100 text-red-700"}  rounded-2xl`}>{tag}</h1>
                    <img className='w-12 h-12 border border-gray-300 rounded-full p-2' src={card.img} alt="" />
                    <h1 className='text-[24px] font-bold'>{card.name}</h1>
                    <p>{card.description}</p>
                    <div >
                        <span className="text-xl">${card.price}/{card.period}</span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>High-resolution image generation</span>
                        </li>
                        {
                            card.features.map((item, index) => <li key={index}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>{item}</span>
                            </li>)
                        }

                    </ul>
                    <div className="mt-6">
                        <button onClick={() => handelClickAddded(card)} disabled={able} className="bg-linear-to-bl mt-auto from-[#4F39F6] to-[#9514FA] w-full text-white rounded-3xl py-2 px-4 disabled:opacity-50 disabled:cursor-not-allowed">{able ? "Added successfully" : "Buy Now"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToolsCard;