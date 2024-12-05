import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";

// Registrar componentes de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Incomeschart: React.FC = () => {
  // Tipos para los datos del gráfico
  const chartData: ChartData<"line", number[], string> = {
    labels: ["Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], // Meses
    datasets: [
      {
        label: "Ingresos",
        data: [200000, 600000, 400000, 800000, 500000], // Valores de ingresos
        borderColor: "#5B21B6", // Color de la línea
        backgroundColor: "rgba(91, 33, 182, 0.1)", // Fondo debajo de la línea
        pointBackgroundColor: "#5B21B6", // Color de los puntos
        pointBorderColor: "#ffffff",
        pointRadius: 6,
        borderWidth: 2, // Grosor de la línea
      },
    ],
  };

  // Tipos para las opciones del gráfico
  const chartOptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 200000, // Define el salto entre valores del eje Y
          callback: (value: number | string) =>
            `$${Number(value).toLocaleString()}`, // Formato $ en el eje Y
        },
      },
    },
    plugins: {
      legend: { display: false }, // Ocultar la leyenda
    },
  };

  return (
    <div className="max-w-[500px] h-auto">
      <h2 className="mb-5 font-semibold text-xl">Evolución de ingresos</h2>
      <div className="bg-gray-100 p-4 rounded-lg shadow-xl min-h-60 max-h-64">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Incomeschart;
