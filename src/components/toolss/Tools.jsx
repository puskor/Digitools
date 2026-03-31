import React, { use, useState } from 'react';
import ToolsBanner from './ToolsBanner';
import ToolsCard from './ToolsCard';
import CardTools from '../card/CardTools';


const Tools = ({data,cardStor,setCardStor}) => {
    const item = use(data);
    const [isOn, setIsOn] = useState("product");
    return (
        <div className='container mx-auto'>
            <ToolsBanner setIsOn={setIsOn} isOn={isOn}></ToolsBanner>
            {
                isOn === "product" ?
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        {item.map(card=>{return <ToolsCard key={card.id} card={card} cardStor={cardStor} setCardStor={setCardStor}></ToolsCard>})}
                    </div>
                    :
                    <CardTools cardStor={cardStor} setCardStor={setCardStor} />
            }
        </div>
    );
};

export default Tools;