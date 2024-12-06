import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { filterIncomesByMonth } from "../../../services/Incomes/IncomesService";
import { useUser } from "../../../context/UserContext";
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

interface Income {
  id: number; // ID del ingreso
  amount: number; // Monto del ingreso
  date: string; // Fecha del ingreso
}

const Incomeschart: React.FC = () => {
  const { user } = useUser(); // Obtener el usuario actual del contexto
  const userId = user?.id;
  const [chartData, setChartData] = useState<ChartData<"line", number[], string>>({
    labels: [], // Inicialmente vacío
    datasets: [
      {
        label: "Ingresos",
        data: [], // Inicialmente vacío
        borderColor: "#5B21B6",
        backgroundColor: "rgba(91, 33, 182, 0.1)",
        pointBackgroundColor: "#5B21B6",
        pointBorderColor: "#ffffff",
        pointRadius: 6,
        borderWidth: 2,
      },
    ],
  });

  const chartOptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: number | string) =>
            `$${Number(value).toLocaleString()}`,
        },
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  // Función para obtener los datos y actualizar el gráfico
  const fetchData = async () => {
    if (!user) return; // Asegúrate de que haya un usuario logueado

    const currentYear = new Date().getFullYear().toString();
    const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    const labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const monthlySums: number[] = [];

    for (let i = 0; i < months.length; i++) {
      try {
        // Llamada a la API para cada mes
        const incomes: Income[] = await filterIncomesByMonth(user.id, months[i], currentYear);
  
        // Verifica que incomes sea un array antes de usar reduce
        const totalIncome = Array.isArray(incomes) && incomes.length > 0
          ? incomes.reduce((sum, income) => sum + income.amount, 0)
          : 0;
  
        monthlySums.push(totalIncome);
      } catch (error) {
        console.error(`Error obteniendo los ingresos para ${labels[i]}:`, error);
        monthlySums.push(0); // Si hay un error, se agrega 0 para el mes
      }
    }

    // Actualizar los datos del gráfico
    setChartData({
      labels: labels.slice(7, 12), // Mostrar solo de Agosto a Diciembre
      datasets: [
        {
          label: "Ingresos",
          data: monthlySums.slice(7, 12), // Mostrar datos de los últimos 5 meses
          borderColor: "#5B21B6",
          backgroundColor: "rgba(91, 33, 182, 0.1)",
          pointBackgroundColor: "#5B21B6",
          pointBorderColor: "#ffffff",
          pointRadius: 6,
          borderWidth: 2,
        },
      ],
    });
  };

  useEffect(() => {
    fetchData();
  }, [user]); // Llamar a la API cuando el usuario cambie

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
