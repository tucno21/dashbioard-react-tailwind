import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
    dataNumbers: number[];
    dataLabels: string[];
}

const PieChart = ({ dataNumbers, dataLabels }: Props) => {

    const backgroundColor = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'];
    const borderColor = ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'];
    const hoverBackgroundColor = ['rgba(255, 99, 132, 0.4)', 'rgba(54, 162, 235, 0.4)', 'rgba(255, 206, 86, 0.4)', 'rgba(75, 192, 192, 0.4)', 'rgba(153, 102, 255, 0.4)', 'rgba(255, 159, 64, 0.4)'];


    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Resultado de colores',
            },
        },

    };


    const data = {
        labels: dataLabels,
        datasets: [
            {
                // label: '# Votos',
                data: dataNumbers,
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                borderWidth: 1,
                hoverOffset: 8,
                hoverBackgroundColor: hoverBackgroundColor
            },
        ],
    };

    return (
        <Pie options={options} data={data} />
    )
}

export default PieChart