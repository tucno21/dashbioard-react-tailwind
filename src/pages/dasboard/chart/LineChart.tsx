import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface Props {
    dataNumbers: number[];
    dataLabels: string[];
}


const LineChart = ({ dataNumbers, dataLabels }: Props) => {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Beneficios de los meses',
            },
        },
    };

    const dataConfig = {
        labels: dataLabels,
        datasets: [
            {
                label: 'beneficios-2023',
                data: dataNumbers,
                fill: true, //si se coloca false no se dibuja el area
                tension: 0.1, //para curvar las lineas por los puntos
                borderColor: 'rgb(255, 99, 132)', // color de la linea
                backgroundColor: 'rgba(255, 99, 132, 0.5)', //color de fondo de la leyenda
                pointRadius: 3, //para que no se vea el punto
                pointBackgroundColor: 'rgb(255, 99, 132)', //color del punto
                pointBorderColor: 'rgb(255, 99, 132)', //color del borde del punto
            },
        ],
    };

    return (
        <Line options={options} data={dataConfig} />
    )
}

export default LineChart