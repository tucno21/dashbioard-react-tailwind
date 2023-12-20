import React, { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

interface CarouselProps {
    images: string[];
}

const CarouselC: React.FC<CarouselProps> = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);


    const slideTo = (index: number) => {
        if (index >= 0 && index < images.length) {
            setCurrentSlide(index);
        }
    };

    const nextSlide = () => {
        if (currentSlide < images.length - 1) {
            setCurrentSlide(currentSlide + 1);
        } else {
            setCurrentSlide(0); // Vuelve al primer slide si está en el último.
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        } else {
            setCurrentSlide(images.length - 1); // Vuelve al último slide si está en el primero.
        }
    };

    return (
        <div className=" overflow-hidden relative">
            <div
                className="flex transition-transform duration-1000 transform -translate-x-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        <img src={image} alt={`Slide ${index + 1}`} className="w-full h-96 object-cover" />
                    </div>
                ))}
            </div>
            <button onClick={prevSlide} className="absolute left-1 top-1/2 transform -translate-y-1/2">
                <BsChevronLeft className="w-10 h-10 text-white bg-black/50 rounded-full p-1" />
            </button>
            <button onClick={nextSlide} className="absolute right-1 top-1/2 transform -translate-y-1/2">
                <BsChevronRight className="w-10 h-10 text-white bg-black/50 rounded-full p-1" />
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => slideTo(index)}
                        className={`w-4 h-4 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default CarouselC;
