import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

export interface Income {
  id: number;
  amount: number;
  origin: string;
  date: string; // formato: YYYY-MM-DD
  category: string;
  user_id: number;
}

export const getIncomeById = async (id: number): Promise<Income> => {
  const response = await axios.get(`${baseUrl}/api/income/${id}`);
  return response.data.data;
};

export const getIncomesByUser = async (userId: number): Promise<Income[]> => {
  const response = await axios.get(`${baseUrl}/api/income/user/${userId}`);
  return response.data.data;
};

export const createIncome = async (income: Partial<Income>): Promise<Income> => {
  try {
    console.log("Datos enviados al backend:", income);
    const response = await axios.post(`${baseUrl}/api/income/create`, income);
    return response.data.data;
  } catch (error: any) {
    console.error("Error al crear ingreso:", error.response?.data || error.message);
    throw error;
  }
};
export const updateIncome = async (
  id: number,
  updatedIncome: Partial<Income>
): Promise<Income> => {
  const response = await axios.put(`${baseUrl}/api/income/${id}`, updatedIncome);
  return response.data.data;
};

export const deleteIncome = async (id: number): Promise<void> => {
  await axios.delete(`${baseUrl}/api/income/${id}`);
};

export const filterIncomesByMonth = async (month: string): Promise<Income[]> => {
  const response = await axios.get(`${baseUrl}/api/income/filterByMonth`, {
    params: { month },
  });
  return response.data.data;
};
