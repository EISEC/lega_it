import React from 'react';
import Image from "next/image";
import BootonHoverGreen from "@/components/ui/bootonHoverGreen";

const Section1 = () => {
    return (
        <section className={'container mx-auto'}>
            <div className={'h-[85vh] w-6/12 absolute right-0 top-0 -z-10'}>
                <Image src={'/fon_voda.webp'} objectFit={'true'} alt={'kakrtinka'} fill/>
            </div>
            <div className={'flex flex-col gap-4 justify-center h-full relative h-[85vh]'}>
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
                <BootonHoverGreen name={'Задай вопрос'} action={null}/>
                <div className={'absolute bottom-10 left-0 right-0 text-center'}>
                    <button className={'relative h-[42px] w-[50px] mx-auto py-2'}>
                        <Image className={'transition-all animate-bounce'} src={'/palec.svg'} alt={'palec'}
                               objectFit={'true'} fill/>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Section1;