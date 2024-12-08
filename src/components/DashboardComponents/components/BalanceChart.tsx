import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrar componentes de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const IncomesAndExpensesChart: React.FC = () => {
  // Datos hardcodeados
  const data = {
    labels: ["Jun", "Jul", "Ago", "Sep", "Oct", "Nov"], // Meses
    datasets: [
      {
        label: "Ingresos",
        data: [450000, 300000, 500000, 400000, 600000, 750000], // Datos de ingresos
        backgroundColor: "#56588C", // Color de barras de ingresos
        borderRadius: 5,
        barPercentage: 0.5,
      },
      {
        label: "Egresos",
        data: [200000, 150000, 250000, 300000, 350000, 400000], // Datos de egresos
        backgroundColor: "#D98F9D", // Color de barras de egresos
        borderRadius: 5,
        barPercentage: 0.5,
      },
    ],
  };

  // Opciones del gráfico
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const, // Leyenda en la parte superior
        align: "end" as const,
        labels: {
          usePointStyle: true, // Usar estilo de punto (círculos)
          boxWidth: 15, // Ajustar el tamaño de los círculos
          padding: 10,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Ocultar líneas de la cuadrícula en eje X
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: number | string) => Number(value).toLocaleString(), // Formato de miles
        },
        grid: {
          display: true,
        },
      },
    },
  };

  return (
    <div className="w-[50%] max-w-[450px] h-auto">
      <h2 className="mb-5 font-semibold text-xl">Balance</h2>
      <div className="bg-gray-100 border-[1px] p-4 rounded-lg shadow-xl min-h-80 max-h-96">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default IncomesAndExpensesChart;
