import React from 'react';

const ShowCard = ({item,setCardStor}) => {
    return (
        <div>
            <h1>
                {item.name}
            </h1>
        </div>
    );
};

export default ShowCard;