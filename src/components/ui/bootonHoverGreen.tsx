import React from 'react';

const BootonHoverGreen = ({name, action}: any) => {
    return (
        <button
            onClick={action}
            className={'max-w-[230px] text-xl border-[1px] border-green py-4 text-green rounded-lg mt-8 transition-all ease-in hover:bg-green hover:text-black'}>
            {name}
        </button>
    );
};

export default BootonHoverGreen;