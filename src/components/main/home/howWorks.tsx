'use client'
import React, {useState} from 'react';
import {menu_list} from "@/components/main/data/works";
import Sites from "@/components/main/home/uslugi/sites";
import Logo from "@/components/main/home/uslugi/logo";
import Social from "@/components/main/home/uslugi/social";
import Direct from "@/components/main/home/uslugi/direct";
import Image from "next/image";

const HowWorks = () => {
    const [menu, setMenu] = useState('keys_sites')
    const activMenu = (el_id: any) => {
        el_id === menu ? '' : setMenu(el_id)
    }
    return (
        <section className={'container mx-auto px-[60px]'}>
            <div className={'flex flex-col gap-[60px]'}>
                <h2 className={'text-[60px]'}>Наши работы</h2>
                <ul className={'grid grid-cols-2 md:grid-cols-4'}>
                    {menu_list.map((el: any) => {
                        return (
                            <li key={el.id}
                                onClick={() => activMenu(el.id)}
                                className={`text-center text-[24px] py-6 px-4 ${menu === el.id ? 'border-b-[4px] border-green text-green' : 'border-b-[2px] border-grey text-grey'} transition-all hover:text-green hover:border-green cursor-pointer hover:border-b-[4px]`}>
                                {el.text}
                            </li>
                        )
                    })}
                </ul>
                <div>
                    {menu === 'keys_sites' ? <Sites/> : menu === 'keys_logo' ? <Logo/> : menu === 'keys_social' ?
                        <Social/> : menu === 'keys_direct' ? <Direct/> : 'Произошла ошибка'}
                </div>
                <div className={'relative h-[200px]'}>
                    <Image src={'/deviden.webp'} alt={''} fill style={{objectFit: 'contain',}}/>
                </div>
            </div>
        </section>
    );
};

export default HowWorks;