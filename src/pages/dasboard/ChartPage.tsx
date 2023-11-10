import BarChart from "./chart/BarChart"
import BarChartH from "./chart/BarChartH"
import LineChart from "./chart/LineChart"
import PieChart from "./chart/PieChart"


const ChartPage = () => {

    const menses = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
    ];

    const beneficios = [10, 56, 30, 78, 90, 45, 78, 90, 45, 78, 90, 45,]

    const colors = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
    const cantidad = [12, 19, 3, 5, 2, 3];

    return (
        <div className="space-y-1 mx-auto">
            {/* CABECERA */}
            <div className="head-page">
                <h1 className="head-page-title">Chart</h1>

                <div className="head-page-button">

                </div>
            </div>
            {/* CABECERA */}

            {/* INFORMACIO PAGE */}
            <div className="px-1 py-1 md:px-2 md:py-2 w-full">
                <div className="grid mx-auto grid-cols-1 lg:grid-cols-2 gap-2 ">
                    <div className="w-full bg-white  rounded-md p-2 shadow border">
                        <h3>Grafico de lineas básico</h3>
                        <div className="w-full">
                            <LineChart dataNumbers={beneficios} dataLabels={menses} />
                        </div>
                    </div>
                    <div className="w-full bg-white  rounded-md p-2 shadow border">
                        <h3>Grafico de barras</h3>
                        <div className="w-full">
                            <BarChart dataNumbers={beneficios} dataLabels={menses} />
                        </div>
                    </div>
                    <div className="w-full bg-white  rounded-md p-2 shadow border">
                        <h3>Grafico de circular</h3>
                        <div className="w-full">
                            <PieChart dataNumbers={cantidad} dataLabels={colors} />
                        </div>
                    </div>
                    <div className="w-full bg-white  rounded-md p-2 shadow border">
                        <h3>Grafico de barras horizontal</h3>
                        <div className="w-full">
                            <BarChartH dataNumbers={beneficios} dataLabels={menses} />
                        </div>
                    </div>
                </div>
            </div>
            {/* INFORMACIO PAGE */}
        </div>
    )
}

export default ChartPage