import { useEffect, useRef, useState } from "react";
// import CarouselJitem from "./CarouselJitem"

interface Props {
    children: React.ReactElement[];
    interval?: number;
    controls?: boolean;
    indicators?: boolean;
    autoPlay?: boolean;
    width?: string;
}


const CarouselJ = ({ children, interval = 5000, controls = false, indicators = false, autoPlay = true, width = '900' }: Props) => {

    const [currentSlide, setCurrentSlide] = useState(1);
    const slideInterval = useRef<number | undefined>();



    useEffect(() => {
        startSlideTimer()

        return () => stopSlideTimer()
    }, [])

    // iniciar desplazamiento automatico
    const startSlideTimer = () => {
        if (autoPlay) {
            stopSlideTimer();
            slideInterval.current = setInterval(() => {
                setCurrentSlide(currentSlide => currentSlide < children.length - 1 ? currentSlide + 1 : 0)
            }, interval)
        }
    }

    // detener desplazamiento automatico
    const stopSlideTimer = () => {
        if (autoPlay && slideInterval.current) {
            clearInterval(slideInterval.current)
        }
    }

    // cambiar slider anterior
    const handlePrev = () => {
        startSlideTimer();
        const index = currentSlide > 0 ? currentSlide - 1 : children.length - 1;
        setCurrentSlide(index);
    }

    // cambiar slider posterior
    const handleNext = () => {
        startSlideTimer();
        const index = currentSlide < children.length - 1 ? currentSlide + 1 : 0;
        setCurrentSlide(index);
    }

    // cambiar slider directamente por boton indicadores
    const switchIndex = (index: any) => {
        startSlideTimer()
        setCurrentSlide(index)
    }


    return (
        <div>
            <div className={`mx-auto relative overflow-hidden`} style={{ maxWidth: width }}>

                {indicators && (
                    <div className=" absolute -translate-x-1/2 left-1/2 bottom-3 z-50">
                        {children.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => switchIndex(index)}
                                className={`w-2 h-2 md:w-4 md:h-4 border-none bg-white mx-1 rounded-full md:cursor-pointer ${currentSlide === index ? ' opacity-100' : 'opacity-50'}`}
                            ></button>
                        ))}
                    </div>
                )}

                <div
                    className="whitespace-nowrap transition-transform ease-in-out duration-1000"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    //cuando entra detiene el desplazamiento automatico
                    onMouseEnter={stopSlideTimer}
                    //cuando sale inicia el desplazamiento automatico
                    onMouseOut={startSlideTimer}
                >
                    {children}
                </div>


                {controls && (
                    <div className="">
                        <button className="absolute top-1/2 -translate-y-1/2 left-0 bg-black/50 border-none inline-block  h-6 w-8 md:h-12 md:w-16 text-white md:cursor-pointer" onClick={handlePrev}>❮</button>
                        <button className="absolute top-1/2 -translate-y-1/2 right-0 bg-black/50 border-none inline-block  h-6 w-8 md:h-12 md:w-16 text-white md:cursor-pointer" onClick={handleNext}>❯</button>
                    </div>
                )}

            </div>
        </div>
    )
}

export default CarouselJ