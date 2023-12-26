import { useState, useRef } from 'react';

interface CarouselProps {
    children: React.ReactElement[];
}

const CarouselK = ({ children }: CarouselProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [startX, setStartX] = useState(0);
    const [moved, setMoved] = useState(false);

    const handlePrev = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }
    };

    const handleNext = () => {
        if (activeIndex < children.length - 1) {
            setActiveIndex(activeIndex + 1);
        }
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {

        const currentX = e.touches[0].clientX;
        const diffX = startX - currentX;

        if (diffX > 100 && !moved) {
            handleNext();
            setMoved(true);
        }

        if (diffX < -100 && !moved) {
            handlePrev();
            setMoved(true);
        }
    };


    return (
        <div
            ref={carouselRef}
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => setMoved(false)}
        >
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {children}
            </div>

            <div className="flex w-full h-full">
                <button
                    className="absolute top-1/2 -translate-y-1/2 left-0  z-10 p-4 text-white bg-black opacity-50 hover:opacity-100"
                    onClick={handlePrev}
                >
                    ←
                </button>
                <button
                    className="absolute top-1/2 -translate-y-1/2 right-0 z-10 p-4 text-white bg-black opacity-50 hover:opacity-100"
                    onClick={handleNext}
                >
                    →
                </button>
            </div>
        </div>
    );
};

export default CarouselK;