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
      <div className="absolute -top-3 right-20 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-white"></div>
      <h2 className="text-2xl text-center text-stone-700 font-Nunito-bold mb-6">Nuevo ingreso</h2>
      <div className=" text-zinc-800  space-y-4">
        <div>
          <label className="block text-sm font-medium ">Descripción</label>
          <input
            type="text"
            name="origin"
            value={newIncome.origin || ""}
            onChange={(e) => setNewIncome({ ...newIncome, origin: e.target.value })}
            placeholder="Describir el ingreso"
            className="w-full border  border-gray-300 rounded-lg p-2 placeholder-neutral-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Categoría</label>
          <select
            name="category"
            value={newIncome.category || ""}
            onChange={(e) => setNewIncome({ ...newIncome, category: e.target.value })}
            className={`w-full border border-gray-300 rounded-lg p-2 ${newIncome.category ? "text-black" : "text-neutral-500"
              }`}
          >
            <option value="" disabled >
              Seleccionar categoría
            </option>
            <option value="colaboracion">
              Colaboración
            </option>
            <option value="campaña" >
              Campaña
            </option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium ">Fecha</label>
          <input
            type="date"
            name="date"
            value={newIncome.date || ""}
            onChange={(e) => setNewIncome({ ...newIncome, date: e.target.value })}
            className={`w-full border border-gray-300 rounded-lg p-2 ${newIncome.date ? "text-black" : "text-neutral-500"
              }`}
          />
        </div>

        <div>
          <label className="block text-sm font-medium ">Monto</label>
          <input
            type="number"
            name="amount"
            value={newIncome.amount}
            onChange={(e) => setNewIncome({ ...newIncome, amount: parseFloat(e.target.value) })}
            placeholder="Monto"
            className="w-full border border-gray-300  rounded-lg p-2"
          />
        </div>
      </div>
      <div className="mt-8 flex justify-end space-x-4">
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-[#F3F3F3] text-gray-700 rounded-lg hover:bg-zinc-200 border border-[#56588C]"
        >
          Cancelar
        </button>


        <button
          onClick={onSave}
          className="px-4 py-2 bg-[#56588C] text-zinc-100 rounded-lg hover:bg-[#56587C]"
        >
          Guardar
        </button>
      </div>
    </div>
  </div>
);
