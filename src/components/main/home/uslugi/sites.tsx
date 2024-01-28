import React from 'react';
import {keys_sites} from "@/components/main/data/works";
import CardRow from "@/components/main/home/uslugi/cardRow";
import LeftPos from "@/components/main/home/uslugi/leftPos";
import RightPos from "@/components/main/home/uslugi/rightPos";
import BigCard from "@/components/main/home/uslugi/bigCard";

const Sites = () => {
    return (
        <div className={'grid grid-cols-2 gap-[20px]'}>
            {
                keys_sites.map((el: any) => {
                    return el[0] ? <CardRow el={el}/> : el.big ? <BigCard el={el}/> : el.position === 'left' ?
                        <div className={`grid grid-cols-2 h-[300px] bg-green`}><LeftPos img={el.img} text={el.text}
                                                                                        title={el.title}/></div> :
                        <div className={'grid grid-cols-2 h-[300px] bg-green'}><RightPos img={el.img} text={el.text}
                                                                                         title={el.title}/></div>
                })
            }
        </div>
    );
};

export default Sites;