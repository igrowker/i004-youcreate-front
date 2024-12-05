import React, { useState } from "react";

interface AddTaxModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (data: { type: string; amount: string; dueDate: string }) => void;
}

export const AddTaxModal: React.FC<AddTaxModalProps> = ({ isOpen, onClose, onSave }) => {
    const [type, setType] = useState("");
    const [amount, setAmount] = useState("");
    const [dueDate, setDueDate] = useState("");

    if (!isOpen) return null; // No renderizar si el modal está cerrado

    const handleSave = () => {
        onSave({ type, amount, dueDate });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded shadow-lg p-6 w-96">
                <h2 className="text-lg font-semibold mb-4">Nuevo impuesto</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Tipo de impuesto</label>
                    <input
                        type="text"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        placeholder="Ingresar tipo de impuesto"
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
                    <label className="block text-sm font-medium">Vencimiento</label>
                    <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
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

