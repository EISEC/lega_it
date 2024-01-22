'use client'
import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function HeaderTop() {
    return (
        <header>
            <div
                className={'container mx-auto py-6 border-b-[1px] border-green flex flex-row justify-between items-center'}>
                <Link href={'/'} className="logo">
                    <Image src={'/logo.svg'} alt={'logotip'} width={369} height={53}/>
                </Link>
                <nav>
                    <ul className={'flex flex-row gap-[60px] text-stone'}>
                        <li>
                            <Link href={''}>
                                Наши работы
                            </Link>
                        </li>
                        <li>
                            <Link href={''}>
                                Услуги
                            </Link>
                        </li>
                        <li>
                            <Link href={''}>
                                Отзывы
                            </Link>
                        </li>
                        <li>
                            <Link href={''}>
                                Контакты
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};