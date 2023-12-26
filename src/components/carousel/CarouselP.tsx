import { useEffect, useRef, useCallback } from 'react';


interface Props {
    children: JSX.Element[];
    controles?: boolean;
    autoPlay?: boolean;
    velocidad?: string;
    intervalo?: number;
}


const CarouselP = ({ children, controles = false, autoPlay = true, velocidad = "500", intervalo = 5000 }: Props) => {

    const slideshow = useRef<HTMLDivElement>(null);
    const slideInterval = useRef<number | undefined>();

    useEffect(() => {
        startSlideTimer()

        return () => stopSlideTimer()
    }, [])

    const startSlideTimer = () => {
        if (autoPlay) {
            slideInterval.current = setInterval(() => {
                siguiente()
            }, intervalo)
        }
    }

    // detener desplazamiento automatico
    const stopSlideTimer = () => {
        if (autoPlay && slideInterval.current) {
            clearInterval(slideInterval.current)
        }
    }


    const siguiente = useCallback(() => {
        if (slideshow.current && slideshow.current.children.length > 0) {
            //obtner el primer elemento
            const primerElemento = slideshow.current.children[0];
            //establecemos la transicion para el slideshow
            slideshow.current.style.transition = `${velocidad}ms ease-out all`;

            const tamanoItem = slideshow.current.children[0].clientWidth;
            //mover el slideshow
            slideshow.current.style.transform = `translateX(-${tamanoItem}px)`;

            const eliminarTransision = () => {
                //reiniciamos la posicion del slideshow
                slideshow.current!.style.transition = 'none';
                slideshow.current!.style.transform = `translateX(0)`;
                //tomamos el primer elemento y los mandamos al final
                slideshow.current?.appendChild(primerElemento);

                slideshow.current?.removeEventListener('transitionend', eliminarTransision);
            }

            //Eventlistener para cuando termina la animacion
            slideshow.current.addEventListener('transitionend', eliminarTransision);
        }
    }, [velocidad])

    const anterior = () => {
        if (slideshow.current && slideshow.current.children.length > 0) {
            const index = slideshow.current.children.length - 1;
            const ultimoElemento = slideshow.current.children[index];
            slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);

            slideshow.current.style.transition = 'none';
            const tamanoItem = slideshow.current.children[0].clientWidth;
            slideshow.current.style.transform = `translateX(-${tamanoItem}px)`;

            requestAnimationFrame(() => {
                slideshow.current!.style.transition = `${velocidad}ms ease-out all`;
                slideshow.current!.style.transform = 'translateX(0)';
            });
        }
    }


    return (
        <div className="ContenedorPrincipal w-3/4 mx-auto relative overflow-hidden"
            onMouseEnter={stopSlideTimer}
            onMouseLeave={startSlideTimer}
        >
            <div
                className="ContenedorSlideShow flex flex-nowrap"
                ref={slideshow}
            >
                {children}
            </div>

            {controles && (
                <div className="absolute top-0 left-0 h-full w-full flex justify-between items-center pointer-events-none">
                    <button onClick={anterior} className="bg-slate-800/10 hover:bg-slate-800/40 px-2 py-1 h-full text-white pointer-events-auto">prev</button>
                    <button onClick={siguiente} className="bg-slate-800/10 hover:bg-slate-800/40 px-2 py-1 h-full text-white pointer-events-auto">Next</button>
                </div>
            )}

        </div>
    )
}

export default CarouselP