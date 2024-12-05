import React from "react";

interface Collaborator {
    name: string;
    amount: string;
    date: string;
    campaign?: string;
    status: "Pendiente" | "Pagado";
}

interface CollaboratorsTableProps {
    collaborators: Collaborator[];
}

export const CollaboratorsSection: React.FC<CollaboratorsTableProps> = ({ collaborators }) => {
    return (
        <section>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Colaboradores</h2>
                <button className="flex items-center gap-2 bg-gray-200 text-gray-600 px-4 py-2 rounded hover:bg-gray-300">
                    <span>✏️</span>
                    Agregar colaborador
                </button>
            </div>
            <table className="w-full border border-gray-200 rounded">
                <thead>
                <tr className="bg-gray-100 text-left">
                    <th className="p-2">Nombre</th>
                    <th className="p-2">Monto</th>
                    <th className="p-2">Fecha</th>
                    <th className="p-2">Campaña</th>
                    <th className="p-2">Estado</th>
                    <th className="p-2">Pagar</th>
                </tr>
                </thead>
                <tbody>
                {collaborators.map((collaborator, index) => (
                    <tr key={index} className="border-t">
                        <td className="p-2">{collaborator.name}</td>
                        <td className="p-2">{collaborator.amount}</td>
                        <td className="p-2">{collaborator.date}</td>
                        <td className="p-2">{collaborator.campaign || "-"}</td>
                        <td className="p-2">
                <span
                    className={`px-2 py-1 rounded ${
                        collaborator.status === "Pendiente"
                            ? "bg-yellow-200 text-yellow-700"
                            : "bg-green-200 text-green-700"
                    }`}
                >
                  {collaborator.status}
                </span>
                        </td>
                        <td className="p-2">
                            <button className="bg-gray-200 px-4 py-1 rounded hover:bg-gray-300">Ir</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </section>
    );
};