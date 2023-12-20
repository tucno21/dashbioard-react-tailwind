import { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

interface CarouselItem {
    id: number;
    image: string;
    title: string;
    description: string;
}

interface CarouselProps {
    items: CarouselItem[];
}

const CarouselA = ({ items }: CarouselProps) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const prevSlide = () => {
        setActiveIndex((index) => index - 1 < 0 ? items.length - 1 : index - 1);
    };

    const nextSlide = () => {
        setActiveIndex((index) => index + 1 >= items.length ? 0 : index + 1);
    };

    return (
        <div className="relative">
            <div className="overflow-hidden">
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className={index === activeIndex ? 'block' : 'hidden'}
                    >
                        <img src={item.image} alt={item.title} className='w-full h-96 object-cover' />
                        <div className="absolute inset-0 flex justify-center items-center p-5 text-white bg-black/50">
                            <h2 className="text-2xl font-bold">{item.title}</h2>
                            <p className="max-w-xs">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute top-1/2 left-0 flex justify-between w-full p-2">
                <button onClick={prevSlide}>
                    <BsChevronLeft className="w-10 h-10 text-white bg-black/50 rounded-full p-1" />
                </button>
                <button onClick={nextSlide}>
                    <BsChevronRight className="w-10 h-10 text-white bg-black/50 rounded-full p-1" />
                </button>
            </div>

            <div className="flex absolute bottom-5 left-1/2 justify-center -translate-x-1/2 space-x-3">
                {items.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-white' : 'bg-white/20'
                            }`}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default CarouselA;