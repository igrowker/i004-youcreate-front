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
import { useUser } from "../../context/UserContext"; // Importa el contexto de usuario

export const IncomeSection: React.FC = () => {
  const { user } = useUser(); // Obtén el usuario del contexto
  const userId = user?.id; // Usa el `id` del usuario actual
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [newIncome, setNewIncome] = useState<Partial<Income>>({
    amount: 0,
    origin: "",
    date: "",
    category: "",
  });
  const [filterMonth, setFilterMonth] = useState("");

  // Función para cargar los ingresos desde el backend
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

  // Función para crear un ingreso
  const handleCreateIncome = async () => {
    try {
      if (userId) {
        await createIncome({ ...newIncome, user_id: userId });
        toast.success("Ingreso creado exitosamente");
        await fetchIncomes(); // Sincroniza después de crear
        setNewIncome({ amount: 0, origin: "", date: "", category: "" });
      }
    } catch (error: any) {
      if (error.response) {
        toast.error(`Error: ${error.response.data.message}`);
      } else {
        toast.error("Error desconocido al crear el ingreso");
      }
    }
  };

  // Función para actualizar un ingreso
  const handleUpdateIncome = async (id: number, updatedIncome: Partial<Income>) => {
    try {
      if (userId) {
        await updateIncome(id, updatedIncome);
        toast.success("Ingreso actualizado exitosamente");
        await fetchIncomes(); // Sincroniza después de actualizar
      }
    } catch (error) {
      toast.error("Error al actualizar el ingreso");
    }
  };

  
  const handleDeleteIncome = async (id: number) => {
    try {
      if (userId) {
        await deleteIncome(id);
        toast.success("Ingreso eliminado exitosamente");
        await fetchIncomes(); // Sincroniza después de eliminar
      }
    } catch (error) {
      toast.error("Error al eliminar el ingreso");
    }
  };

  
  const handleFilterByMonth = async () => {
    try {
      if (userId) {
        const filtered = await filterIncomesByMonth(filterMonth);
        setIncomes(filtered);
      }
    } catch (error) {
      toast.error("Error al filtrar los ingresos");
    }
  };

  useEffect(() => {
    fetchIncomes(); 
  }, [userId]); 

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Mis ingresos</h1>

<div className="bg-white shadow-lg  rounded-lg">
  {/* Header */}
  <div className="grid grid-cols-4 bg-gray-200 text-gray-600 rounded-lg text-sm font-semibold">
    <div className="p-4">Descripción</div>
    <div className="p-4">Categoría</div>
    <div className="p-4">Fecha</div>
    <div className="p-4">Monto</div>
  </div>
  {/* Rows */}
  {incomes.map((income) => (
    <div key={income.id} className="grid grid-cols-4 rounded-lg border-b text-sm">
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
