import Carousel from "../../components/carousel/Carousel";


const CarouselPage = () => {

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

            {/* INFORMACIO PAGE */}
        </div>
    )
}

export default CarouselPage