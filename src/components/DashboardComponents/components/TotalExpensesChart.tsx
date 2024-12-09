import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Registrar componentes de Chart.js
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const ExpenseChart: React.FC = () => {
  // Datos hardcodeados
  const data = {
    labels: ["Impuestos", "Colaboradores"], // Etiquetas de las categorías
    datasets: [
      {
        data: [30000, 40000], // Datos de cada categoría
        backgroundColor: ["#56588C", "#A65974"], // Colores de las secciones
        borderColor: ["#56588C", "#A65974"], // Color del borde
        borderWidth: 2, // Grosor del borde
      },
    ],
  };

  // Opciones del gráfico
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const, // Leyenda en la parte inferior
        labels: {
          usePointStyle: true, // Estilo de punto en lugar de cuadros
          boxWidth: 20, // Ajustar el tamaño de los círculos en la leyenda
          padding: 20,
        },
      },
    },
    elements: {
        arc: {
          // Aplica offset para separar las secciones
          offset: 15, // Ajusta el valor según el espaciado que desees
        },
      },
  };

  return (
      <div className="w-[25%] md:h-80">
      <h2 className="mb-5 font-nunito font-bold text-xl">Egresos totales: $180.000</h2>

      <div className="bg-gray-100 border-[1px] p-8 rounded-lg shadow-xl h-full max-h-96">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default ExpenseChart;