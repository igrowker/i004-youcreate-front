import React, { useState, useEffect } from "react";
import {
  getIncomesByUser,
  createIncome,
  updateIncome,
  deleteIncome,
  Income,
} from "../../services/Incomes/IncomesService";
import { toast } from "react-toastify";
import { useUser } from "../../context/UserContext";
import { AddIncome } from "./AddIncome";
import Edit from "../../assets/vectors/edit.svg";
import DeleteIcon from "../../assets/vectors/delete.svg";

export const IncomeSection: React.FC = () => {
  const { user } = useUser();
  const userId = user?.id;
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [isAddingIncome, setIsAddingIncome] = useState(false);
  const [editRowId, setEditRowId] = useState<number | null>(null);
  const [newIncome, setNewIncome] = useState<Partial<Income>>({
    origin: "",
    category: "",
    date: "",
    amount: 0,
  });
  const [editedIncome, setEditedIncome] = useState<Partial<Income>>({});

  // Fetch incomes from the server
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

  // Handle income creation
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

  // Handle income update
  const handleUpdateIncome = async (id: number) => {
    try {
      await updateIncome(id, editedIncome);
      toast.success("Ingreso actualizado exitosamente");
      setEditRowId(null);
      fetchIncomes();
    } catch (error) {
      toast.error("Error al actualizar el ingreso");
    }
  };

  // Handle income deletion
  const handleDeleteIncome = async (id: number) => {
    try {
      await deleteIncome(id);
      setIncomes((prev) => prev.filter((income) => income.id !== id));
      toast.success("Ingreso eliminado exitosamente");
    } catch (error) {
      toast.error("Error al eliminar el ingreso");
    }
  };

  return (
    <div className="relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-Nunito-bold">Mis ingresos</h2>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsAddingIncome(!isAddingIncome)}
            className="bg-[#56588C] shadow-full text-white px-4 py-3 rounded-lg hover:bg-[#56587C]"
          >
            Agregar ingreso
          </button>
        </div>
      </div>

      {/* Add income form */}
      {isAddingIncome && (
        <AddIncome
          newIncome={newIncome}
          setNewIncome={setNewIncome}
          onCancel={() => setIsAddingIncome(false)}
          onSave={handleCreateIncome}
        />
      )}

      {/* Income Table */}
      <div className="relative">
        <div className="bg-[#DDDEEC] shadow-md rounded-lg text-sm font-semibold text-gray-500 grid grid-cols-4 mb-2">
          <div className="p-4">DESCRIPCIÓN</div>
          <div className="p-4">CATEGORÍA</div>
          <div className="p-4">FECHA</div>
          <div className="p-4">MONTO</div>
        </div>

        <div className="space-y-2 relative">
          {incomes.map((income) => (
            <div
              key={income.id}
              className="bg-white shadow-md rounded-lg grid grid-cols-4 text-gray-700 text-sm relative"
            >
              {editRowId === income.id ? (
                <>
                  <input
                    className="p-4 border  border-gray-300 rounded-md"
                    value={editedIncome.origin || income.origin}
                    onChange={(e) =>
                      setEditedIncome((prev) => ({ ...prev, origin: e.target.value }))
                    }
                  />
                  <select
                    className={`p-4 border border-gray-300 rounded-md ${newIncome.category ? "text-black" : "text-gray-500"
                      }`}
                    name="category"
                    value={newIncome.category || ""}
                    onChange={(e) =>
                      setNewIncome((prev) => ({ ...prev, category: e.target.value }))
                    }
                  >
                    <option value="" disabled>
                      Seleccionar categoría
                    </option>
                    <option value="colaboracion">Colaboración</option>
                    <option value="campaña">Campaña</option>
                  </select>
                  <input
                    className="p-4 border border-gray-300 rounded-md"
                    type="date"
                    value={editedIncome.date || income.date}
                    onChange={(e) =>
                      setEditedIncome((prev) => ({ ...prev, date: e.target.value }))
                    }
                  />
                  <input
                    className="p-4 border border-gray-300 rounded-md"
                    type="number"
                    value={editedIncome.amount || income.amount}
                    onChange={(e) =>
                      setEditedIncome((prev) => ({
                        ...prev,
                        amount: parseFloat(e.target.value) || 0,
                      }))
                    }
                  />
                </>
              ) : (
                <>
                  <div className="p-4">{income.origin}</div>
                  <div className="p-4">{income.category}</div>
                  <div className="p-4">{income.date}</div>
                  <div className="p-4">${income.amount.toFixed(2)}</div>
                </>
              )}

              {/* Edit button */}
              <button
                onClick={() => {
                  if (editRowId === income.id) {
                    handleUpdateIncome(income.id);
                  } else {
                    setEditRowId(income.id);
                    setEditedIncome(income);
                  }
                }}
                className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 shadow-md rounded-full p-2"
              >
                <img className="w-4 h-4" src={Edit} alt="Editar" />
              </button>

              {/* Delete button */}
              <button
                onClick={() => handleDeleteIncome(income.id)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 shadow-md rounded-full p-2"
              >
                <img className="w-4 h-4" src={DeleteIcon} alt="Eliminar" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
