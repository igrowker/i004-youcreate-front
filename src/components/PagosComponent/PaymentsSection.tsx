import React from "react";

export const PaymentsSection: React.FC = () => {
    const payments = [
        { id: 1, date: "2024-12-01", amount: "$120.00", status: "Completado" },
        { id: 2, date: "2024-12-02", amount: "$85.50", status: "Pendiente" },
        { id: 3, date: "2024-12-03", amount: "$200.00", status: "Rechazado" },
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Pagos Recientes</h1>
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
                <thead>
                    <tr className="bg-gray-200 text-left text-sm font-semibold">
                        <th className="p-4">Fecha</th>
                        <th className="p-4">Monto</th>
                        <th className="p-4">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment) => (
                        <tr key={payment.id} className="border-t">
                            <td className="p-4">{payment.date}</td>
                            <td className="p-4">{payment.amount}</td>
                            <td className="p-4">{payment.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
