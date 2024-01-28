import React from 'react';
import LeftPos from "@/components/main/home/uslugi/leftPos";
import RightPos from "@/components/main/home/uslugi/rightPos";

const CardRow = ({el}: any) => {
    return (
        <div className={'grid grid-cols-1 gap-[20px]'}>
            {el.map((el: any) => {
                return (
                    <div key={el.id} className={'grid grid-cols-2 h-[300px] bg-green'}>
                        {el.position === 'left' ? <LeftPos img={el.img} text={el.text} title={el.title}/> :
                            <RightPos img={el.img} text={el.text} title={el.title}/>}
                    </div>
                )
            })}
        </div>
    );
};

export default CardRow;