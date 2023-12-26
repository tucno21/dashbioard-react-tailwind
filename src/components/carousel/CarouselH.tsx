import { useState, Children, ReactNode } from 'react';

interface CarouselProps {
    children: ReactNode;
}

const CarouselH = ({ children }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? Children.count(children) - 1 : prevIndex - 1));
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === Children.count(children) - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative w-full h-full" data-carousel="slide">
            {/* CONTENMIDO */}
            <div className="w-full h-full overflow-hidden rounded-lg">
                {Children.map(children, (child, index) => (
                    <div
                        key={index}
                        className={`h-56 md:h-96 duration-1000 ease-in-out ${index === currentIndex ? '' : 'hidden'}`}
                        data-carousel-item
                    >
                        {child}
                    </div>
                ))}
            </div>

            {/* INDICADORES */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {Children.map(children, (_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full bg-white ${index === currentIndex ? 'opacity-100' : 'opacity-50'}`}
                        onClick={() => goToSlide(index)}
                    ></button>
                ))}
            </div>

            {/* BOTONES */}
            <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-1 md:px-2  md:cursor-pointer md:hover:bg-slate-800/50"
                onClick={goToPrevSlide}
            >
                {/* Previous button content */}
                <svg className="w-6 h-6 md:w-8 md:h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-blue-800 hover:text-blue-900 hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7">
                    </path>
                </svg>
            </button>

            <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-1 md:px-2  md:cursor-pointer md:hover:bg-slate-800/50"
                onClick={goToNextSlide}
            >
                {/* Next button content */}
                <svg className="w-6 h-6 md:w-8 md:h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-blue-800 hover:text-blue-900 hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
                </svg>
            </button>
        </div>
    );
};

export default CarouselH;
