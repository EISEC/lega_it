import React from 'react';

const hexagons = [
    {title: "Дизайн", description: "разработка дизайн-макетов", price: "от 2000₽"},
    {title: "Логотипы", description: "яркие, запоминающиеся", price: "от 8000₽"},
    {title: "Вебсайты", description: "крутые, функциональные", price: "от 40000₽"},
    {title: "Полиграфия", description: "все что можно напечатать", price: "от 2000₽"},
    {title: "Соцсети", description: "оформление, наполнение", price: "от 6000₽"},
    {title: "Репутация", description: "SERM, управление", price: "от 1000₽"},
    {title: "Продвижение", description: "контекстная реклама", price: "от 7000₽"},
    {title: "Предсказания", description: "как карта ляжет", price: "1000₽"}
];

const Hexagon = ({title, description, price, id}: any) => (
    <div
        className={`hexagon relative flex items-center justify-center text-center bg-lime-400 text-black p-4 shadow-md cursor-pointer hover:bg-lime-300 div${id} rotate-90`}>
        <div className="absolute inset-0 clip-hex"></div>
        <div className="relative z-10 rotate-[-90deg]">
            <h3 className="text-[2.3rem] mb-2">{title}</h3>
            <p className="text-[1rem] font-light italic">{description}</p>
            <p className="price text-[1.5rem] mt-2">{price}</p>
        </div>
    </div>
);


const SectionUslugi = () => {
    return (
        <section id="services" className="py-12 text-white text-center">
            <div className={'container mx-auto flex flex-col'}>
                <h2 className="text-[60px] mb-2 text-lime-400 text-left inline-flex flex-col">Наши услуги</h2>
                <hr className={'h-[10px] w-[206px] bg-[url(/diveded.svg)] bg-no-repeat bg-contain border-none'}/>
            </div>
            <div className={'h-[286px] bg-[url(/woow.svg)] bg-cover'} />
            <div className={'container mx-auto'}>
                <div className="hexagon-grid mx-auto">
                    {hexagons.map((hex, index) => (
                        <Hexagon key={index} {...hex} id={index + 1}/>
                    ))}
                </div>
            </div>
            <div className={'mt-[15rem] max-w-[1140px] mx-auto text-left font-light text-[20px] text-green'}>*цена рассчитывается индивидуально в каждом заказе, при расчете учитывается ваш бюджет, цели <br/>
                и желаемый результат</div>
        </section>
    );
};

export default SectionUslugi;