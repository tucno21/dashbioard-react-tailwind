import { useState, ReactNode, Children } from 'react';

interface SliderProps {
    children: ReactNode;
}

const CarouselG = ({ children }: SliderProps) => {
    const [currentIndex, setCurrentIndex] = useState<number>(1);

    const back = () => {
        if (currentIndex > 1) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const next = () => {
        if (currentIndex < Children.count(children)) {
            setCurrentIndex(currentIndex + 1);
        } else if (currentIndex <= Children.count(children)) {
            setCurrentIndex(Children.count(children) - currentIndex + 1);
        }
    };

    return (
        <div className="relative w-full flex flex-shrink-0 overflow-hidden shadow-2xl">
            {/* INDICADORES */}
            <div className="rounded-full bg-gray-700/50 text-white absolute top-4 right-4 text-sm px-2 text-center z-20">
                <span>{currentIndex}</span>/
                <span>{Children.count(children)}</span>
            </div>

            {Children.map(children, (child, index) => (
                <div
                    key={index}
                    className="h-full w-full"
                    style={{
                        display: currentIndex === index + 1 ? 'block' : 'none',
                        transition: 'opacity 1000ms',
                        opacity: currentIndex === index + 1 ? 1 : 0,
                    }}
                >
                    {child}
                </div>
            ))}

            {/* BOTONES */}
            <div className="absolute left-0 flex items-center justify-between w-full h-full">
                <button
                    onClick={back}
                    className="w-6 h-6 md:w-9 md:h-9 ml-2 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100/75 hover:bg-gray-200"
                >
                    {/* Your SVG code for the "back" button */}
                    <svg className=" w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7">
                        </path>
                    </svg>
                </button>

                <button
                    onClick={next}
                    className="w-6 h-6 md:w-9 md:h-9 mr-2 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100/75 hover:bg-gray-200"
                >
                    {/* Your SVG code for the "next" button */}
                    <svg className=" w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default CarouselG;
