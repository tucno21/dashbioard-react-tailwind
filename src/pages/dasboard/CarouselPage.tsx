import Carousel from "../../components/carousel/Carousel";
import CarouselC from "../../components/carousel/CarouselC";
import CarouselG from "../../components/carousel/CarouselG";
import CarouselH from "../../components/carousel/CarouselH";
import CarouselJ from "../../components/carousel/CarouselJ";
import CarouselK from "../../components/carousel/CarouselK";
import CarouselO from "../../components/carousel/CarouselO";
import CarouselP from "../../components/carousel/CarouselP";


const CarouselPage = () => {

    const items = [
        {
            id: 1,
            image: 'https://picsum.photos/id/1032/900/400',
            title: 'First Slide',
        },
        {
            id: 2,
            image: 'https://picsum.photos/id/1033/900/400',
            title: 'Second Slide',

        },
        {
            id: 3,
            image: 'https://picsum.photos/id/1037/900/400',
            title: 'Third Slide',
        },
        {
            id: 4,
            image: 'https://picsum.photos/id/1035/900/400',
            title: 'Fourth Slide',
        },
        {
            id: 5,
            image: 'https://picsum.photos/id/1036/900/400',
            title: 'Third Slide',
        },
        // {
        //     id: 6,
        //     image: 'https://picsum.photos/id/1040/900/400',
        //     title: 'Fourth Slide',
        // },
        // {
        //     id: 7,
        //     image: 'https://picsum.photos/id/1042/900/400',
        //     title: 'Third Slide',
        // },
    ];

    return (
        <div className="space-y-1 mx-auto">
            {/* CABECERA */}
            <div className="head-page">
                <h1 className="head-page-title">Carrusel</h1>

                <div className="head-page-button">

                </div>
            </div>
            {/* CABECERA */}

            {/* INFORMACIO PAGE */}
            <div className="px-1 py-1 md:px-2 md:py-2 w-full">
                <div className="">
                    <Carousel>
                        <div className="item p-2 rounded min-w-[8rem]  bg-green-600">1</div>
                        <div className="item p-2 rounded min-w-[8rem]  bg-green-600">2</div>
                        <div className="item p-2 rounded min-w-[8rem]  bg-green-600">3</div>
                        <div className="item p-2 rounded min-w-[8rem]  bg-green-600">4</div>
                        <div className="item p-2 rounded min-w-[8rem]  bg-green-600">5</div>
                    </Carousel>
                </div>

                {/* FUNCIONA BIEN */}
                <div className="mt-3">
                    <CarouselC>
                        {items.map(item => (
                            <div key={item.id} className="w-full flex-shrink-0">
                                <img src={item.image} alt="" className="w-full h-60 object-cover" />
                            </div>
                        ))}
                    </CarouselC>
                </div>

                {/* FUNCIONA BIEN */}
                {/* <div className="mt-3 p-2 ">
                    <CarouselG>
                        {items.map(item => (
                            <div key={item.id} className="w-full">
                                <img src={item.image} alt="" className="w-full h-48 object-cover" />
                            </div>
                        ))}
                    </CarouselG>
                </div> */}



                {/* FUNCIONA BIEN */}
                {/* <div className="mt-3 p-2 ">
                    <CarouselH>
                        {items.map(item => (
                            <div key={item.id} className="w-full h-full">
                                <img src={item.image} alt="" className="object-cover w-full h-full" />
                            </div>
                        ))}
                    </CarouselH>
                </div> */}

                {/* FUNCIONA BIEN */}
                {/* <div className="mt-3 p-2 ">
                    <CarouselJ controls indicators width={'900px'}>
                        {items.map(item => (
                            <div key={item.id} className="inline-block w-full">
                                <img src={item.image} alt="" className="w-full h-48 object-cover" />
                            </div>
                        ))}
                    </CarouselJ>
                </div> */}

                {/* FUNCIONA BIEN CON DESLIZAMIENTO TACTIL */}
                {/* <div className="mt-3 p-2 ">
                    <CarouselK>
                        {items.map(item => (
                            <div key={item.id} className="flex-shrink-0 w-full h-64 snap-center">
                                <img src={item.image} alt="" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </CarouselK>
                </div> */}


                {/* FUNCIONA BIEN */}
                {/* <div className="mt-3 p-2 ">
                    <CarouselO widthElement={16} gap={1} unitDimension='rem' width={90} controls>
                        {items.map(item => (
                            <div key={item.id} className="w-full h-full relative">
                                <p className=" absolute top-0 left-0 font-extrabold z-10 text-red-700">{item.id - 1}</p>
                                <img src={item.image} alt="" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </CarouselO>
                </div> */}

                {/* FUNCIONA BIEN */}
                <div className="mt-3 p-2 ">
                    <CarouselP controles>
                        {items.map(item => (
                            <div key={item.id} className=" min-w-full h-44 inline-block">
                                <img src={item.image} alt="" className="object-cover w-full h-full" />
                            </div>
                        ))}
                    </CarouselP>
                </div>


            </div>

            {/* INFORMACIO PAGE */}
        </div>
    )
}

export default CarouselPage