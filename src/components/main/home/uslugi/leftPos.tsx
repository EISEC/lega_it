import React from 'react';
import Image from "next/image";

const LeftPos = ({img, text, title}: any) => {
    return (
        <>
            <div className={'relative'}>
                <Image src={img} alt={''} fill style={{objectFit: 'cover'}}/>
            </div>
            <div className={'inline-flex flex-col gap-5 justify-center items-start px-4 text-black'}>
                <h3 className={'text-[24px] leading-[1]'}>{title}</h3>
                <p className={'text-[16px]'}>{text}</p>
                <button
                    className={'inline px-6 py-2 bg-black text-green rounded-md border-[1px] hover:border-black hover:text-black hover:bg-green transition-all'}>
                    Смотреть
                </button>
            </div>
        </>
    );
};

export default LeftPos;