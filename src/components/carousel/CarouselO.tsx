import { useState, Children, ReactNode, useEffect, useRef } from 'react';

interface CarouselProps {
    children: ReactNode;
    height?: number;
    heightUnit?: 'rem' | 'px' | '%';
    width?: number;
    widthUnit?: 'rem' | 'px' | '%';
    widthElement?: number;
    gap?: number;
    unitDimension?: 'rem' | 'px' | '%';
    scaleFactor?: number;
    direction?: 'leftToRight' | 'rightToLeft';
    interval?: number;
    controls?: boolean;
    indicators?: boolean;
    autoPlay?: boolean;
}

const CarouselO = ({ children, height = 12, heightUnit = 'rem', width = 100, widthUnit = '%', widthElement = 8, gap = 1, unitDimension = 'rem', scaleFactor = 0.3, direction = 'rightToLeft', interval = 5000, controls = false, indicators = false, autoPlay = true }: CarouselProps) => {

    //almacenar los estilos para los elementos de children
    const [positions, setPositions] = useState<Record<number, string>>({});
    //almacenar el indice actual del carousel
    const [index, setIndex] = useState(0);
    //almacenar el indice del carousel en base al indice actual y la cantidad de children
    const slideInterval = useRef<number | undefined>();
    //saber si estamos encima del componente o fuera
    const [isMouseOver, setIsMouseOver] = useState(true);


    //calcular el indice del carousel en base al indice actual y la cantidad de children
    const calculateCarouselIndex = (currentIndex: number, cantChildren: number) => {
        let result = currentIndex % cantChildren;
        return result >= 0 ? result : result + cantChildren;
    };

    //contar la cantidad de children
    let numChildren = Children.count(children);
    //preguntar si numChildren es numero par aumentar 1
    if (numChildren % 2 === 0) {
        numChildren++;
    }

    useEffect(() => {
        // obtenmos el punto medio de la cantidad de children redondeando a mayor 0.5
        const puntoMedio = Math.ceil(numChildren / 2);
        //almacenamos las medidas de los elementos de children
        const medidasTranslateX: Record<number, number> = {};
        // creamos un objeto vacio para almacenar los estilos de los elementos de children
        const styleTransform: Record<number, string> = {};

        for (let i = 0; i < numChildren; i++) {
            //obtenemos el fator para la escala que varia en cada recorrido
            const scale = 1 - (Math.min(i, numChildren - i) / puntoMedio) * scaleFactor;
            //obtenemos el ancho del elemento de children multiplicado por la escala
            const currentWidth = widthElement * scale;

            if (i === 0) {
                medidasTranslateX[i] = 0;
            } else if (i < puntoMedio) {
                // obtenemos el valor de translateX del elemento posterior
                medidasTranslateX[i] = medidasTranslateX[i - 1] + currentWidth + gap;
            } else {
                // obtenemos el valor de translateX del elemento anterior
                const mirrorIndex = numChildren - i;
                medidasTranslateX[i] = medidasTranslateX[mirrorIndex] + gap;
            }


            if (i < puntoMedio) {
                styleTransform[i] = direction === 'leftToRight'
                    ? `translateX(${medidasTranslateX[i]}${unitDimension}) scale(${scale})`
                    : `translateX(-${medidasTranslateX[i]}${unitDimension}) scale(${scale})`;
            } else {
                styleTransform[i] = direction === 'leftToRight'
                    ? `translateX(-${medidasTranslateX[i] - gap}${unitDimension}) scale(${scale})`
                    : `translateX(${medidasTranslateX[i] - gap}${unitDimension}) scale(${scale})`;
            }
        }

        setPositions(styleTransform);
    }, []);



    useEffect(() => {
        if (isMouseOver) {
            // solo se activa si el mause esta fuera del componente
            startSlideTimer();
        }

        return () => {
            stopSlideTimer();
        }
    }, [index, isMouseOver]);


    // iniciar desplazamiento automatico
    const startSlideTimer = () => {
        if (autoPlay) {
            stopSlideTimer();
            slideInterval.current = setInterval(() => {
                setIndex((index + 1) % numChildren);
            }, interval);
        }
    }

    // detener desplazamiento automatico
    const stopSlideTimer = () => {
        if (autoPlay && slideInterval.current) {
            clearInterval(slideInterval.current);
        }
    }

    const handleOnMouseEnter = () => {
        setIsMouseOver(false);
        stopSlideTimer();
    }

    const handleOnMouseLeave = () => {
        setIsMouseOver(true);
        startSlideTimer();
    }


    const handleNext = () => {
        setIndex((index + 1) % numChildren);
    };

    const handlePrev = () => {
        setIndex((index - 1 + numChildren) % numChildren);
    };

    // cambiar slider directamente por boton indicadores
    const switchIndex = (index: any) => {
        startSlideTimer()
        setIndex(index)
    }

    return (
        <div
            className="relative mx-auto overflow-hidden"
            style={{
                height: `${height}${heightUnit}`,
                width: `${width}${widthUnit}`,
            }}
            // //cuando entra detiene el desplazamiento automatico
            onMouseEnter={handleOnMouseEnter}
            // //cuando sale inicia el desplazamiento automatico
            onMouseLeave={handleOnMouseLeave}
        >
            {Children.map(children, (child, i) => {
                // veridicamos si estamos en el centro
                const isCenter = calculateCarouselIndex(index + i, numChildren) === 0;

                return (
                    <div
                        key={i}
                        className={`absolute top-0 left-0 bottom-0 right-0 mx-auto bg-green-600 h-full transition-all duration-1000 `}
                        style={{
                            width: `${widthElement}${unitDimension}`,
                            transform: `${positions[calculateCarouselIndex(index + i, numChildren)]}`,
                            opacity: isCenter ? 1 : 0.4,
                            zIndex: isCenter ? 20 : 0,
                        }}

                    >
                        {child}
                    </div>
                )
            })}

            {/* BOTON INDICADORES */}
            {indicators && (
                <div className=" absolute -translate-x-1/2 left-1/2 bottom-2 z-50">
                    {Children.map(children, (_, i) => (
                        <button
                            key={i}
                            onClick={() => switchIndex(i)}
                            className={`w-2 h-2 md:w-4 md:h-4 border-none bg-white mx-1 rounded-full md:cursor-pointer ${index === i ? 'opacity-100' : 'opacity-50'}`}
                        ></button>
                    ))}
                </div>
            )}

            {/* BOTONOS */}
            {controls && (
                <div className="">
                    <button className="absolute top-1/2 -translate-y-1/2 left-0 bg-black/50 border-none z-20 inline-block  h-6 w-8 md:h-12 md:w-16 text-white md:cursor-pointer" onClick={handlePrev}>❮</button>
                    <button className="absolute top-1/2 -translate-y-1/2 right-0 bg-black/50 border-none z-20 inline-block  h-6 w-8 md:h-12 md:w-16 text-white md:cursor-pointer" onClick={handleNext}>❯</button>
                </div>
            )}
        </div>
    )
}

export default CarouselO