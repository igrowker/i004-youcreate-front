import React, { useState, useEffect } from "react";
import {
  getIncomesByUser,
  createIncome,
  updateIncome,
  deleteIncome,
  filterIncomesByMonth,
  Income,
} from "../../services/Incomes/IncomesService";
import { toast } from "react-toastify";
import { useUser } from "../../context/UserContext";

export const IncomeSection: React.FC = () => {
  const { user } = useUser();
  const userId = user?.id;
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [newIncome, setNewIncome] = useState<Partial<Income>>({
    amount: 0,
    origin: "",
    date: "",
    category: "",
  });
  const [filterMonth, setFilterMonth] = useState("");

  const fetchIncomes = async () => {
    try {
      if (userId) {
        const data = await getIncomesByUser(userId);
        setIncomes(data);
      } else {
        toast.error("Usuario no identificado");
      }
    } catch (error) {
      toast.error("Error al cargar los ingresos");
    }
  };

  useEffect(() => {
    fetchIncomes();
  }, [userId]);

  return (
    <div>

  <div className="mb-2">
  <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-semibold">Mis ingresos</h2>
      <button className="bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition duration-200">
        Agregar ingreso
      </button>
    </div>
    <div className="bg-[#DDDEEC] shadow-md rounded-lg text-sm font-Nunito-bold text-gray-500 grid grid-cols-4">
        
      <div className="p-4">DESCRIPCIÓN</div>
      <div className="p-4">CATEGORÍA</div>
      <div className="p-4">FECHA</div>
      <div className="p-4">MONTO</div>
    </div>
  </div>

  
  <div className="space-y-2">
    {incomes.map((income, index) => (
      <div
        key={income.id}
        className={`bg-[#FFFFFF] shadow-md rounded-lg grid grid-cols-4  text-gray-700 text-sm`}
      >
        <div className="p-4">{income.origin}</div>
        <div className="p-4">{income.category}</div>
        <div className="p-4">{income.date}</div>
        <div className="p-4">${income.amount.toFixed(2)}</div>
      </div>
    ))}
  </div>
</div>
  )}
