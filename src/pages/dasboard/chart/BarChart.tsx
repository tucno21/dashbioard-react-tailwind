import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
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
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        //   {
        //     label: 'Dataset 2',
        //     data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
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
            text: 'Titulo Barras',
        },
    },
};


const BarChart = () => {
    return (
        <Bar options={options} data={data} />
    )
}

export default BarChart