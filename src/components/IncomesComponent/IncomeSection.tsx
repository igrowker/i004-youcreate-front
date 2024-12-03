// import React, { useState, useEffect } from "react";
// import {
//   getIncomesByUser,
//   createIncome,
//   updateIncome,
//   deleteIncome,
//   filterIncomesByMonth,
//   Income,
// } from "../../services/Incomes/IncomesService";
// import { toast } from "react-toastify";

// export const IncomeSection: React.FC = () => {
//   const [incomes, setIncomes] = useState<Income[]>([]);
//   const [newIncome, setNewIncome] = useState<Partial<Income>>({
//     amount: 0,
//     origin: "",
//     date: "",
//     category: "",
//   });
//   const [filterMonth, setFilterMonth] = useState("");
//   const [userId] = useState(1); // Cambia esto según el ID del usuario actual

//   const fetchIncomes = async () => {
//     try {
//       const data = await getIncomesByUser(userId);
//       setIncomes(data);
//     } catch (error) {
//       toast.error("Error al cargar los ingresos");
//     }
//   };

//   const handleCreateIncome = async () => {
//     try {
//       if (!newIncome.amount || !newIncome.origin || !newIncome.date || !newIncome.category) {
//         toast.error("Todos los campos son obligatorios para crear un ingreso");
//         return;
//       }
//       const created = await createIncome({ ...newIncome, user_id: userId });
//       setIncomes((prev) => [...prev, created]);
//       toast.success("Ingreso creado exitosamente");
//       setNewIncome({ amount: 0, origin: "", date: "", category: "" });
//     } catch (error) {
//       toast.error("Error al crear el ingreso");
//     }
//   };

//   const handleUpdateIncome = async (id: number, updatedIncome: Partial<Income>) => {
//     try {
//       const updated = await updateIncome(id, updatedIncome);
//       setIncomes((prev) =>
//         prev.map((income) => (income.id === id ? updated : income))
//       );
//       toast.success("Ingreso actualizado exitosamente");
//     } catch (error) {
//       toast.error("Error al actualizar el ingreso");
//     }
//   };

//   const handleDeleteIncome = async (id: number) => {
//     try {
//       await deleteIncome(id);
//       setIncomes((prev) => prev.filter((income) => income.id !== id));
//       toast.success("Ingreso eliminado exitosamente");
//     } catch (error) {
//       toast.error("Error al eliminar el ingreso");
//     }
//   };

//   const handleFilterByMonth = async () => {
//     try {
//       const filtered = await filterIncomesByMonth(filterMonth);
//       setIncomes(filtered);
//     } catch (error) {
//       toast.error("Error al filtrar los ingresos");
//     }
//   };

//   useEffect(() => {
//     fetchIncomes();
//   }, []);

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold mb-6">Mis Ingresos</h1>

//       {/* Crear nuevo ingreso */}
//       <div className="mb-6">
//         <h2 className="text-lg font-semibold mb-2">Nuevo Ingreso</h2>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           <input
//             type="number"
//             placeholder="Monto"
//             value={newIncome.amount || ""}
//             className="border p-2 rounded w-full"
//             onChange={(e) =>
//               setNewIncome((prev) => ({ ...prev, amount: parseFloat(e.target.value) }))
//             }
//           />
//           <input
//             type="text"
//             placeholder="Origen"
//             value={newIncome.origin || ""}
//             className="border p-2 rounded w-full"
//             onChange={(e) =>
//               setNewIncome((prev) => ({ ...prev, origin: e.target.value }))
//             }
//           />
//           <input
//             type="text"
//             placeholder="Categoría"
//             value={newIncome.category || ""}
//             className="border p-2 rounded w-full"
//             onChange={(e) =>
//               setNewIncome((prev) => ({ ...prev, category: e.target.value }))
//             }
//           />
//           <input
//             type="date"
//             value={newIncome.date || ""}
//             className="border p-2 rounded w-full"
//             onChange={(e) =>
//               setNewIncome((prev) => ({ ...prev, date: e.target.value }))
//             }
//           />
//         </div>
//         <button
//           className="bg-blue-500 text-white p-2 mt-4 rounded"
//           onClick={handleCreateIncome}
//         >
//           Crear Ingreso
//         </button>
//       </div>

//       {/* Filtrar ingresos por mes */}
//       <div className="mb-6">
//         <h2 className="text-lg font-semibold mb-2">Filtrar por Mes</h2>
//         <input
//           type="month"
//           value={filterMonth}
//           className="border p-2 rounded w-full"
//           onChange={(e) => setFilterMonth(e.target.value)}
//         />
//         <button
//           className="bg-green-500 text-white p-2 mt-2 rounded"
//           onClick={handleFilterByMonth}
//         >
//           Filtrar
//         </button>
//       </div>

//       {/* Lista de ingresos */}
//       <div>
//         <h2 className="text-lg font-semibold mb-4">Lista de Ingresos</h2>
//         {incomes.length === 0 ? (
//           <p className="text-gray-500">No hay ingresos registrados.</p>
//         ) : (
//           <ul className="space-y-4">
//             {incomes.map((income) => (
//               <li
//                 key={income.id}
//                 className="border p-4 rounded flex justify-between items-center bg-white shadow"
//               >
//                 <div>
//                   <p className="font-bold">Monto: ${income.amount}</p>
//                   <p>Origen: {income.origin}</p>
//                   <p>Categoría: {income.category}</p>
//                   <p className="text-sm text-gray-500">Fecha: {income.date}</p>
//                 </div>
//                 <div className="flex space-x-2">
//                   <button
//                     className="bg-yellow-500 text-white p-2 rounded"
//                     onClick={() =>
//                       handleUpdateIncome(income.id, { amount: income.amount + 10 })
//                     }
//                   >
//                     Actualizar
//                   </button>
//                   <button
//                     className="bg-red-500 text-white p-2 rounded"
//                     onClick={() => handleDeleteIncome(income.id)}
//                   >
//                     Eliminar
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };
