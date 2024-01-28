import React from 'react';
import Image from "next/image";

const BigCard = ({el}: any) => {
    return (
        <div className={'flex flex-col h-full'}>
            <div className={'relative h-full'}>
                <Image src={el.img} alt={''} fill style={{objectFit: 'cover'}}/>
            </div>
            <div className={'h-[300px] bg-green inline-flex flex-col gap-5 justify-center items-start px-4 text-black'}>
                <h3 className={'text-[24px] leading-[1]'}>{el.title}</h3>
                <p className={'text-[16px]'}>{el.text}</p>
                <button
                    className={'inline px-6 py-2 bg-black text-green rounded-md border-[1px] hover:border-black hover:text-black hover:bg-green transition-all'}>
                    Смотреть
                </button>
            </div>
        </div>
    );
};

export default BigCard;