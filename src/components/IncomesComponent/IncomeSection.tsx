import React, { useState, useEffect } from "react";
import {
  getIncomesByUser,
  createIncome,
  Income,
} from "../../services/Incomes/IncomesService";
import { toast } from "react-toastify";
import { useUser } from "../../context/UserContext";
import { AddIncome } from "./AddIncome";
import Edit from "../../assets/vectors/edit.svg";

export const IncomeSection: React.FC = () => {
  const { user } = useUser();
  const userId = user?.id;
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [isAddingIncome, setIsAddingIncome] = useState(false);
  const [newIncome, setNewIncome] = useState<Partial<Income>>({
    origin: "",
    category: "",
    date: "",
    amount: 0,
  });

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

  const handleCreateIncome = async () => {
    try {
      if (userId) {
        if (!newIncome.origin || !newIncome.category || !newIncome.date || !newIncome.amount) {
          toast.error("Todos los campos son obligatorios");
          return;
        }

        await createIncome({ ...newIncome, user_id: userId });
        toast.success("Ingreso creado exitosamente");
        setIsAddingIncome(false);
        fetchIncomes();
      }
    } catch (error: any) {
      toast.error("Error al agregar el ingreso");
    }
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-Nunito-bold ">Mis ingresos</h2>

        <div className="flex items-center space-x-4">
          <button>
            <img
              className="w-8 h-8 hover:bg-gray-300 shadow-md rounded-full bg-gray-200"
              src={Edit}
              alt="Editar"
            />
          </button>

          <button
            onClick={() => setIsAddingIncome(!isAddingIncome)}
            className="bg-[#56588C] shadow-full text-white px-4 py-3 rounded-lg hover:bg-[#56587C] "
          >
            Agregar ingreso
          </button>
        </div>
      </div>

      {isAddingIncome && (
        <AddIncome
          newIncome={newIncome}
          setNewIncome={setNewIncome}
          onCancel={() => setIsAddingIncome(false)}
          onSave={handleCreateIncome}
        />
      )}

      <div className="bg-[#DDDEEC] shadow-md rounded-lg text-sm font-semibold text-gray-500 grid grid-cols-4 mb-2">
        <div className="p-4">DESCRIPCIÓN</div>
        <div className="p-4">CATEGORÍA</div>
        <div className="p-4">FECHA</div>
        <div className="p-4">MONTO</div>
      </div>
      <div className="space-y-2">
        {incomes.map((income) => (
          <div
            key={income.id}
            className="bg-white shadow-md rounded-lg grid grid-cols-4 text-gray-700 text-sm"
          >
            <div className="p-4">{income.origin}</div>
            <div className="p-4">{income.category}</div>
            <div className="p-4">{income.date}</div>
            <div className="p-4">${income.amount.toFixed(2)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
