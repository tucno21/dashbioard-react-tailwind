import Carousel from "../../components/carousel/Carousel";
import CarouselA from "../../components/carousel/CarouselA";
import CarouselB from "../../components/carousel/CarouselB";
import CarouselC from "../../components/carousel/CarouselC";
import CarouselE from "../../components/carousel/CarouselE";
import CarouselF from "../../components/carousel/CarouselF";


const CarouselPage = () => {

    const imagenes = [
        'https://cdn.pixabay.com/photo/2023/10/15/15/29/pumpkins-8317227_1280.jpg',
        'https://cdn.pixabay.com/photo/2023/09/17/16/02/crab-8258856_1280.jpg',
        'https://cdn.pixabay.com/photo/2023/10/21/18/34/grapes-8331973_1280.jpg',
        'https://cdn.pixabay.com/photo/2023/10/20/08/00/bird-8328806_1280.jpg'
    ];


    const items = [
        {
            id: 1,
            image: 'https://cdn.pixabay.com/photo/2023/10/15/15/29/pumpkins-8317227_1280.jpg',
            title: 'First Slide',
            description: 'This is the first slide of the carousel',
        },
        {
            id: 2,
            image: 'https://cdn.pixabay.com/photo/2023/09/17/16/02/crab-8258856_1280.jpg',
            title: 'Second Slide',
            description: 'This is the second slide of the carousel',
        },
        {
            id: 3,
            image: 'https://cdn.pixabay.com/photo/2023/10/21/18/34/grapes-8331973_1280.jpg',
            title: 'Third Slide',
            description: 'This is the third slide of the carousel',
        }
    ];

    // const itemsOther = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
                        <div className="item p-2 rounded min-w-[8rem]  bg-green-600">
                            1
                        </div>
                        <div className="item p-2 rounded min-w-[8rem]  bg-green-600">2</div>
                        <div className="item p-2 rounded min-w-[8rem]  bg-green-600">3</div>
                        <div className="item p-2 rounded min-w-[8rem]  bg-green-600">4</div>
                        <div className="item p-2 rounded min-w-[8rem]  bg-green-600">5</div>
                    </Carousel>
                </div>
                <div className="mt-3 p-2 ">
                    <CarouselF />
                </div>
                <div className="mt-3 p-2 ">
                    <CarouselE />
                </div>
                {/* <div className="mt-3 p-2 mb-28">
                    <CarouselD items={itemsOther} active={0} />
                </div> */}
                <div className="mt-3">
                    <CarouselC images={imagenes} />
                </div>
                <div className="mt-3">
                    <CarouselA items={items} />
                </div>
                <div className="mt-3">
                    <CarouselB images={imagenes} />
                </div>
            </div>

            {/* INFORMACIO PAGE */}
        </div>
    )
}

export default CarouselPage