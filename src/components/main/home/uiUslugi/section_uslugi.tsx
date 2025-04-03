import React from 'react';

const hexagons = [
    { title: "Дизайн", description: "разработка дизайн-макетов", price: "от 2000₽" },
    { title: "Логотипы", description: "яркие, запоминающиеся", price: "от 8000₽" },
    { title: "Вебсайты", description: "крутые, функциональные", price: "от 40000₽" },
    { title: "Полиграфия", description: "все что можно напечатать", price: "от 2000₽" },
    { title: "Соцсети", description: "оформление, наполнение", price: "от 6000₽" },
    { title: "Репутация", description: "SERM, управление", price: "от 1000₽" },
    { title: "Продвижение", description: "контекстная реклама", price: "от 7000₽" },
    { title: "Предсказания", description: "как карта ляжет", price: "1000₽" }
];

const Hexagon = ({ title, description, price, id }:any) => (
    <div className={`hexagon relative flex items-center justify-center text-center bg-lime-400 text-black p-4 shadow-md cursor-pointer hover:bg-lime-300 div${id} rotate-90`}>
        <div className="absolute inset-0 clip-hex"></div>
        <div className="relative z-10 rotate-[-90deg]">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm">{description}</p>
            <p className="font-semibold">{price}</p>
        </div>
    </div>
);


const SectionUslugi = () => {
    return (
        <section id="services" className="py-12 bg-black text-white text-center container mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-lime-400">Наши услуги</h2>
            <div className="hexagon-grid mx-auto">
                {hexagons.map((hex, index) => (
                    <Hexagon key={index} {...hex} id={index+1}/>
                ))}
            </div>
        </section>
    );
};

export default SectionUslugi;