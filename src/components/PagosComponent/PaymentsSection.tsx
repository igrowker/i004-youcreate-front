import React from "react";

interface Tax {
    type: string;
    amount: string;
    dueDate: string;
    status: "Pendiente" | "Vencido" | "Pagado";
}
interface TaxTableProps {
    taxes: Tax[];
}

export const PaymentsSection: React.FC<TaxTableProps> = ({ taxes }) => {
    const payments = [
        { id: 1, date: "2024-12-01", amount: "$120.00", status: "Completado" },
        { id: 2, date: "2024-12-02", amount: "$85.50", status: "Pendiente" },
        { id: 3, date: "2024-12-03", amount: "$200.00", status: "Rechazado" },
    ];

    return (
        <section className="mb-8">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Impuestos</h2>
                <button className="flex items-center gap-2 bg-gray-200 text-gray-600 px-4 py-2 rounded hover:bg-gray-300">
                    <span>✏️</span>
                    Agregar impuesto
                </button>
            </div>
            <table className="w-full border border-gray-200 rounded">
                <thead>
                <tr className="bg-gray-100 text-left">
                    <th className="p-2">Tipo de Impuesto</th>
                    <th className="p-2">Monto</th>
                    <th className="p-2">Vencimiento</th>
                    <th className="p-2">Estado</th>
                    <th className="p-2">Pagar</th>
                </tr>
                </thead>
                <tbody>
                {taxes.map((tax, index) => (
                    <tr key={index} className="border-t">
                        <td className="p-2">{tax.type}</td>
                        <td className="p-2">{tax.amount}</td>
                        <td className="p-2">{tax.dueDate}</td>
                        <td className="p-2">
                <span
                    className={`px-2 py-1 rounded ${
                        tax.status === "Pendiente"
                            ? "bg-yellow-200 text-yellow-700"
                            : tax.status === "Vencido"
                                ? "bg-red-200 text-red-700"
                                : "bg-green-200 text-green-700"
                    }`}
                >
                  {tax.status}
                </span>
                        </td>
                        <td className="p-2">
                            <button className="bg-gray-200 px-4 py-1 rounded hover:bg-gray-300">Ir</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="mt-8">
                <h2 className="text-xl font-semibold">Pagos</h2>
                <table className="w-full border border-gray-200 rounded mt-4">
                    <thead>
                    <tr className="bg-gray-100 text-left">
                        <th className="p-2">Fecha</th>
                        <th className="p-2">Monto</th>
                        <th className="p-2">Estado</th>
                    </tr>
                    </thead>
                    <tbody>
                    {payments.map((payment) => (
                        <tr key={payment.id} className="border-t">
                            <td className="p-2">{payment.date}</td>
                            <td className="p-2">{payment.amount}</td>
                            <td className="p-2">{payment.status}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};