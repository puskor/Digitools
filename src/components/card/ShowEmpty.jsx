import React from 'react';

const ShowEmpty = () => {
    return (
        <div className="flex h-[400px] border flex-col items-center justify-center h-[70vh] text-center px-4">

            <div className="text-6xl mb-4">EMPTY</div>

            <h1 className="text-2xl font-bold text-gray-700">
                No Items Found
            </h1>

            <p className="text-gray-500 mt-2 max-w-md">
                Your container is empty. Start adding items to see them here.
            </p>


        </div>
    );
};

export default ShowEmpty;