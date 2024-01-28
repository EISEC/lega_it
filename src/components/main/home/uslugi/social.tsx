import React from 'react';
import {keys_social} from "@/components/main/data/works";
import Image from "next/image";

const Social = () => {
    return (
        <ul className={'grid grid-cols-2 md:grid-cols-3 gap-5'}>
            {
                keys_social.map((el: any) => {
                    return (
                        <li key={el.id} className={'relative h-[380px]'}>
                            <Image src={el.img} alt={''} fill objectFit={'true'}/>
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default Social;