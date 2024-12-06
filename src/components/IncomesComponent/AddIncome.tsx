import React from "react";
import { Income } from "../../services/Incomes/IncomesService";

interface AddIncomeProps {
  newIncome: {
    origin?: string;
    category?: string;
    date?: string;
    amount?: number;
  };
  setNewIncome: React.Dispatch<React.SetStateAction<Partial<Income>>>;
  onCancel: () => void;
  onSave: () => void;
}

export const AddIncome: React.FC<AddIncomeProps> = ({
  newIncome,
  setNewIncome,
  onCancel,
  onSave,
}) => (
  <div className="absolute top-20 left-0 right-0 flex justify-center z-50">
    <div className="bg-white rounded-lg shadow-lg w-[97%] max-w-5xl mx-auto p-8">
      <h2 className="text-2xl text-center font-Nunito-bold mb-6">Nuevo ingreso</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Descripción</label>
          <input
            type="text"
            name="origin"
            value={newIncome.origin || ""}
            onChange={(e) => setNewIncome({ ...newIncome, origin: e.target.value })}
            placeholder="Describir el ingreso"
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Categoría</label>
          <select
            name="category"
            value={newIncome.category || ""}
            onChange={(e) => setNewIncome({ ...newIncome, category: e.target.value })}
            className="w-full border border-gray-300 rounded-lg p-2"
          >
            <option value="">Seleccionar categoría</option>
            <option value="colaboracion">Colaboración</option>
            <option value="campaña">Campaña</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Fecha</label>
          <input
            type="date"
            name="date"
            value={newIncome.date || ""}
            onChange={(e) => setNewIncome({ ...newIncome, date: e.target.value })}
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Monto</label>
          <input
            type="number"
            name="amount"
            value={newIncome.amount || 0}
            onChange={(e) => setNewIncome({ ...newIncome, amount: parseFloat(e.target.value) })}
            placeholder="Monto"
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>
      </div>
      <div className="mt-8 flex justify-end space-x-4">
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
        >
          Cancelar
        </button>
        <button
          onClick={onSave}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Guardar
        </button>
      </div>
    </div>
  </div>
);
