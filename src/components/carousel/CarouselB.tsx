import React, { useState } from 'react';

interface CarouselProps {
    images: string[];
}

const CarouselB: React.FC<CarouselProps> = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
    };

    const handlePrev = () => {
        setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
    };

    return (
        <div className="relative">
            <img src={images[activeIndex]} alt="carousel" className={`w-full h-96 object-cover}`} />

            <button onClick={handlePrev} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white px-4 py-2 rounded-full">Anterior</button>
            <button onClick={handleNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white px-4 py-2 rounded-full">Siguiente</button>

            <div className="indicators absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-4">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`h-3 w-3 rounded-full ${index === activeIndex ? 'bg-blue-600' : 'bg-blue-300'}`}
                        onClick={() => setActiveIndex(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default CarouselB;