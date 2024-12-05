import React, { useState } from "react";

interface AddCollaboratorModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (data: { name: string; amount: string; date: string; campaign: string }) => void;
}

const AddCollaboratorModal: React.FC<AddCollaboratorModalProps> = ({ isOpen, onClose, onSave }) => {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [campaign, setCampaign] = useState("");

    if (!isOpen) return null; // No renderizar si el modal está cerrado

    const handleSave = () => {
        onSave({ name, amount, date, campaign });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded shadow-lg p-6 w-96">
                <h2 className="text-lg font-semibold mb-4">Nuevo colaborador</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Nombre</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ingresar nombre del colaborador"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Monto</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Ingresar monto"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Fecha</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Campaña</label>
                    <input
                        type="text"
                        value={campaign}
                        onChange={(e) => setCampaign(e.target.value)}
                        placeholder="Indicar campaña"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>
                <div className="flex justify-end gap-4">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                        Cancelar
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddCollaboratorModal;
