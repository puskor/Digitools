import React from 'react';
import ToolsBanner from './ToolsBanner';
import ToolsCard from './ToolsCard';

const tools = () => {
    return (
        <div className='container mx-auto'>
            <ToolsBanner></ToolsBanner>
            <ToolsCard></ToolsCard>
        </div>
    );
};

export default tools;