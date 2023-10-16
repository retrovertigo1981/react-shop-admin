import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = ({ chartData }) => {
  return (
    <>
      <Bar
        type="bar"
        data={chartData}
        options={{
          title: {
            text: 'Grafico de Barra',
            display: true,
            fontSize: 30,
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
        className="mb-20 mt-20"
      />
    </>
  );
};

export default Chart;
