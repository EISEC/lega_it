import React from 'react';
import Image from "next/image";

const Section1 = () => {
    return (
        <section className={'container mx-auto'}>
            <div className={'h-[640px] w-7/12 absolute right-0 top-0 -z-10'}>
                <Image src={'/fon_voda.webp'} objectFit={'true'} alt={'kakrtinka'} fill/>
            </div>
            <div className={'flex flex-col gap-4 justify-center h-full relative min-h-[680px]'}>
                <h1 className={'text-7xl'}>
                    Современная упаковка <br/>
                    твоего бизнеса
                </h1>
                <div>
                    <Image src={'/path.webp'} width={300} height={8} alt={'kakrtinka'}/>
                </div>
                <p className={'w-3/5 text-stone text-[20px]'}>
                    Комплексная прокачка бизнеса: от дизайна и разработки сайта до продвижения в поисковых системах и
                    соцсетях. Мы точно знаем, как привлечь новых клиентов
                    и увеличить продажи.
                </p>
                <button
                    className={'max-w-[230px] text-xl border-[1px] border-green py-4 text-green rounded-lg mt-8 transition-all ease-in hover:bg-green hover:text-black'}>
                    Задай вопрос
                </button>
                <button className={'relative h-[42px] w-[50px] mx-auto py-2 mt-5'}>
                    <Image className={'transition-all animate-bounce'} src={'/palec.svg'} alt={'palec'}
                           objectFit={'true'} fill/>
                </button>
            </div>
        </section>
    );
};

export default Section1;