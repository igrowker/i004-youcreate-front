import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube, faTwitch } from "@fortawesome/free-brands-svg-icons";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
} from "chart.js";
import { useUser } from "../../context/UserContext";

// Registramos los componentes necesarios de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export const SocialSection: React.FC = () => {
    const socialAccounts = [
        {
            platform: "Instagram",
            username: "@usuario",
            followers: 250000,
            growth: "4.5%",
            icon: faInstagram,
        
        },
        {
            platform: "Twitch",
            username: "@usuario",
            followers: 120000,
            growth: "3.8%",
            icon: faTwitch,
        },
        {
            platform: "YouTube",
            username: "@usuario",
            followers: 80000,
            growth: "5.2%",
            icon: faYoutube,
        },
    ];

    const totalFollowers = socialAccounts.reduce(
        (total, account) => total + account.followers,
        0
    );
    const {user}=useUser()
    console.log(user)

    


    // Configuración del gráfico
    const data = {
        labels: socialAccounts.map((account) => account.platform),
        datasets: [
            {
                label: "Seguidores",
                data: socialAccounts.map((account) => account.followers),
                backgroundColor: ["#6573C3", "#A066C5", "#D67E91"],
                borderWidth: 1,
            },
        ],
    };

    

    return (
        <div className="p-6 space-y-6">
            {/* Título principal */}
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-nunito font-bold"> Mis Redes - {user?.email}</h1>
                <span className="text-lg font-nunito font-bold text-gray-600">
                    Seguidores Totales:{" "}
                    <span className="text-black">{totalFollowers.toLocaleString()}</span>
                </span>
            </div>

            {/* Redes conectadas */}
            <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4">Redes Conectadas</h2>
                <ul className="space-y-4">
                    {socialAccounts.map((account, index) => (
                        <li
                            key={index}
                            className="p-4 bg-[#DDDEEC] rounded-lg flex items-center justify-between shadow-lg"
                        >
                            <div className="flex items-center space-x-4">
                                <FontAwesomeIcon
                                    icon={account.icon}
                                    className="text-2xl text-gray-700"
                                />
                                <div>
                                    <p className="font-bold text-gray-800">{account.platform}</p>
                                    <p className="text-sm text-gray-500">{account.username}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-8">
                                <p className="text-sm">
                                    <span className="font-bold">
                                        {account.followers.toLocaleString()}
                                    </span>{" "}
                                    Seguidores
                                </p>
                                <p className="text-sm text-gray-500">{account.growth} Crecimiento</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Gráfico de seguidores */}
            <div className="bg-white shadow-lg rounded-lg p-4">
    <h2 className="text-lg font-semibold mb-4">Seguidores</h2>
    <div style={{ width: "400px", height: "200px", margin: "0 auto" }}>
        <Bar
            data={data}
            options={{
                responsive: true,
                maintainAspectRatio: false, // Permite ajustar el tamaño al contenedor
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function (context: any) {
                                return ` ${context.raw.toLocaleString()} Seguidores`;
                            },
                        },
                    },
                    legend: {
                        display: false, // Oculta la leyenda
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            font: {
                                size: 10, // Reduce el tamaño de las etiquetas
                            },
                        },
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            font: {
                                size: 10, // Reduce el tamaño de los números en el eje Y
                            },
                            callback: function (value: any) {
                                return value.toLocaleString(); // Formato de número
                            },
                        },
                    },
                },
            }}
        />
    </div>
</div>

        </div>
    );
};
