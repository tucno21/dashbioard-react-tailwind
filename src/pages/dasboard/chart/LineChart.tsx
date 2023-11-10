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

const data = {
    labels: menses,
    datasets: [
        {
            label: 'beneficios-2023',
            data: beneficios,
            fill: true, //si se coloca false no se dibuja el area
            tension: 0.1, //para curvar las lineas por los puntos
            borderColor: 'rgb(255, 99, 132)', // color de la linea
            backgroundColor: 'rgba(255, 99, 132, 0.5)', //color de fondo de la leyenda
            pointRadius: 3, //para que no se vea el punto
            pointBackgroundColor: 'rgb(255, 99, 132)', //color del punto
            pointBorderColor: 'rgb(255, 99, 132)', //color del borde del punto
        },
        //   {
        //     label: 'Dataset 2',
        //     data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        //     borderColor: 'rgb(53, 162, 235)',
        //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
        //   },
    ],
};

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


const LineChart = () => {
    return (
        <Line options={options} data={data} />
    )
}

export default LineChart