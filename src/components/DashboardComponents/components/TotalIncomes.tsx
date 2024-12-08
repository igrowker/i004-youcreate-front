import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const TotalIncomes: React.FC = () => {
  const data = {
    labels: ["Colaboraciones", "Campañas"],
    datasets: [
      {
        data: [150000, 50000],
        backgroundColor: ["#56588C", "#A1597C"],
        borderColor: ["#FFFFFF"],
        borderWidth: 2,
      },
    ],
  };

  const opciones = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Oculta la leyenda dentro del gráfico
      },
    },
    cutout: "85%", // Hace que el gráfico sea tipo donut
  };

  return (
    <div className="w-[49%]">
      <h2 className="mb-5 font-semibold text-xl">Ingresos totales</h2>
      <div className="h-60 flex gap-4">
        {/* Gráfico */}
        <div className="w-6/12 h-full shadow-xl bg-gray-100 rounded-lg">
          <h3 className="text-center font-medium p-4">Noviembre</h3>
          <div className="h-[70%]">
            <Doughnut data={data} options={opciones} />
          </div>
        </div>

        {/* Leyenda */}
        <div className="w-1/2 flex flex-col justify-center space-y-4">
          {data.labels.map((label, index) => (
            <div key={index} className="bg-gray-200 p-5 rounded-full shadow-xl flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span
                  className="w-4 h-4 rounded-full"
                  style={{
                    backgroundColor: data.datasets[0].backgroundColor[index],
                  }}
                ></span>
                <span className="text-md">{label}</span>
              </div>
              <span className="text-sm font-bold text-gray-800">
                ${data.datasets[0].data[index].toLocaleString("es-CL")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TotalIncomes;
