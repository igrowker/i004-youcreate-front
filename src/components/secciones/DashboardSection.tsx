import React from "react";

export const DashboardSection: React.FC = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Resumen del Dashboard</h1>
            <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-lg shadow">
                    <h2 className="text-xl font-bold">Usuarios Activos</h2>
                    <p className="text-4xl font-semibold">1234</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                    <h2 className="text-xl font-bold">Ingresos Totales</h2>
                    <p className="text-4xl font-semibold">$45,678</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                    <h2 className="text-xl font-bold">Nuevas Órdenes</h2>
                    <p className="text-4xl font-semibold">89</p>
                </div>
            </div>
        </div>
    );
};
