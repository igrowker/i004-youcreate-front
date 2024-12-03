import React from "react";

export const CollaboratorsSection: React.FC = () => {
    const collaborators = [
        { id: 1, name: "Juan Pérez", role: "Gerente" },
        { id: 2, name: "María Gómez", role: "Asistente" },
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Colaboradores</h1>
            <ul className="divide-y divide-gray-200">
                {collaborators.map((colab) => (
                    <li key={colab.id} className="p-4 flex justify-between items-center bg-white shadow rounded-lg">
                        <div>
                            <p className="text-lg font-semibold">{colab.name}</p>
                            <p className="text-sm text-gray-600">{colab.role}</p>
                        </div>
                        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
