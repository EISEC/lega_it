import React from 'react';
import {keys_logo} from "@/components/main/data/works";
import Image from "next/image";

const Logo = () => {
    return (
        <ul className={'grid grid-cols-2 md:grid-cols-3 gap-20'}>
            {
                keys_logo.map((el: any) => {
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

export default Logo;