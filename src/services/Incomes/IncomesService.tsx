// import axios from "axios";

// const baseUrl = import.meta.env.VITE_API_URL;

// export interface Income {
//   id: number;
//   amount: number;
//   origin: string;
//   date: string; // formato: YYYY-MM-DD
//   category: string;
//   user_id: number;
// }

// // Obtener ingreso por ID
// export const getIncomeById = async (id: number): Promise<Income> => {
//   const response = await axios.get(`${baseUrl}/income/${id}`);
//   return response.data.data; // Devuelve el objeto de ingreso
// };

// // Obtener ingresos de un usuario
// export const getIncomesByUser = async (userId: number): Promise<Income[]> => {
//   const response = await axios.get(`${baseUrl}/income/user/${userId}`);
//   return response.data.data; // Devuelve el array de ingresos
// };

// // Crear un nuevo ingreso
// export const createIncome = async (income: Partial<Income>): Promise<Income> => {
//   const response = await axios.post(`${baseUrl}/income/create`, income);
//   return response.data.data; // Devuelve el ingreso creado
// };

// // Actualizar un ingreso por ID
// export const updateIncome = async (
//   id: number,
//   updatedIncome: Partial<Income>
// ): Promise<Income> => {
//   const response = await axios.put(`${baseUrl}/income/${id}`, updatedIncome);
//   return response.data.data; // Devuelve el ingreso actualizado
// };

// // Eliminar un ingreso por ID
// export const deleteIncome = async (id: number): Promise<void> => {
//   await axios.delete(`${baseUrl}/income/${id}`);
// };

// // Filtrar ingresos por mes
// export const filterIncomesByMonth = async (month: string): Promise<Income[]> => {
//   const response = await axios.get(`${baseUrl}/income/filterByMonth`, {
//     params: { month },
//   });
//   return response.data.data; // Devuelve el array de ingresos filtrados
// };
