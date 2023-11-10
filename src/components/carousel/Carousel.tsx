import React, { useRef, useState } from 'react';
// import './Carousel.css';

interface Props {
    children: React.ReactNode;
    height?: string;
}

const Carousel = ({ children, height = 'h-40' }: Props) => {

    const [position, setPosition] = useState(0);

    const [isDragging, setIsDragging] = useState(false);
    const [startPos, setStartPos] = useState(0);
    const [startTranslate, setStartTranslate] = useState(0);

    const carouselRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);


    const handlePrevClick = () => {
        if (sliderRef.current) {
            const itemWidth = sliderRef.current?.firstElementChild?.clientWidth!
            setPosition(Math.max(position - itemWidth - 8, 0));
        }
    };

    const handleNextClick = () => {
        if (sliderRef.current && carouselRef.current) {
            const itemWidth = sliderRef.current?.firstElementChild?.clientWidth!
            const maxPosition = sliderRef.current.scrollWidth - carouselRef.current.clientWidth;
            setPosition(Math.min(position + itemWidth + 8, maxPosition));
        }
    };


    const dragStart = (event: React.MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        sliderRef.current?.classList.add("dragging");
        setStartPos(event.clientX);
        setStartTranslate(position);
    };

    const dragging = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        const newX = event.clientX;
        const diffX = newX - startPos;
        const maxPosition = sliderRef.current?.scrollWidth! - carouselRef.current?.clientWidth!;
        const newPosition = Math.max(0, Math.min(startTranslate - diffX, maxPosition || 0));
        setPosition(newPosition);
    };

    const dragStop = () => {
        setIsDragging(false);
        sliderRef.current?.classList.remove("dragging");
    };

    return (
        <div className={`carruselContainer ${height}`} onMouseLeave={dragStop}>
            <div className="contentBTN prev" onClick={handlePrevClick}>
                <span className="btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-chevron-compact-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z" />
                    </svg>
                </span>
            </div>
            <div className="carrusel" ref={carouselRef}>
                <div
                    className="slider"
                    style={{ transform: `translateX(-${position}px)` }}
                    ref={sliderRef}
                    onMouseDown={dragStart}
                    onMouseMove={dragging}
                    onMouseUp={dragStop}
                >
                    {children}
                </div>
            </div>
            <div className="contentBTN next" onClick={handleNextClick}>
                <span className="btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z" />
                    </svg>
                </span>
            </div>
        </div>
    );
};

export default Carousel;