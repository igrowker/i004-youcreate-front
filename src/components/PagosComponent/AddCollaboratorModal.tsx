import React, { useState } from "react";

interface AddCollaboratorModalProps {
    isOpen: boolean;
    onClose: () => void;
    addCollaborator: (collaboratorData: Collaborator) => void; // Recibe la función como prop
}

interface Collaborator {
    name: string;
    amount: string;
    date: string;
    status: "Pendiente" | "Pagado";
    service?: string;
}

export const AddCollaboratorModal: React.FC<AddCollaboratorModalProps> = ({ isOpen, onClose, addCollaborator }) => {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [service, setService] = useState("");

    const handleSave = () => {
        const newCollaborator: Collaborator = {
            name,
            amount,
            date,
            service,
            status: "Pendiente",
        };

        addCollaborator(newCollaborator); // Llama a la función para enviar los datos
        setName("");
        setAmount("");
        setDate("");
        setService("");
        onClose(); // Cierra el modal
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                <h2 className="text-lg font-nunito font-bold mb-4">Agregar Colaborador</h2>

                <input
                    type="text"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full mb-3 p-2 border rounded-lg"
                />
                <input
                    type="text"
                    placeholder="Monto"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full mb-3 p-2 border rounded-lg"
                />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full mb-3 p-2 border rounded-lg"
                />
                <input
                    type="text"
                    placeholder="Servicio"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full mb-3 p-2 border rounded-lg"
                />
                <button onClick={onClose} className="bg-gray-500 text-white ml-14 w-30 py-2 px-4 rounded-lg">
                    Cancelar
                </button>
                <button onClick={handleSave} className="bg-[#56588C] text-white w-30 ml-10 py-2 px-4 rounded-lg">
                    Guardar
                </button>

            </div>
        </div>
    );
};
