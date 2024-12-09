import React, { useEffect, useState } from "react";

import axios from "axios";
import { AddCollaboratorModal } from "./AddCollaboratorModal.tsx";

interface Tax {
  
  taxDue: number;
  status: "PENDING" | "PAID" | "EXPIRED";
  category: string;
  collaborator_id: number;
  deadline: string;
  
 taxName: string;
}

interface Collaborator {
  name: string;
  amount: string;
  date: string;
  
 service?: string;
}



export const PaymentsSection: React.FC = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const [isModalCollaboratorsOpen, setIsModalCollaboratorsOpen] = useState(false);
  const [taxList, setTaxList] = useState<Tax[]>([]);
  const [collaboratorsList, setCollaboratorsList] = useState<Collaborator[]>([]);
  

  const addTaxes = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("loginData") as string);
  
      if (user?.id) {
        const response = await axios.post(`${baseUrl}/api/v1/taxes/initialize-balance/${user.id}`);
        const data = response.data;
  
        console.log("Impuestos calculados: ", data);
  
        // Vuelve a obtener los impuestos después de calcularlos
        await getTaxes();
      } else {
        console.error("Usuario no encontrado en localStorage.");
      }
    } catch (error) {
      console.error("Error al calcular impuestos: ", error);
    }
  };
  
  

  const getTaxes = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("loginData") as string);
      const response = await axios.get(`${baseUrl}/api/v1/taxes/taxes/${user.id}`);
      const data = response.data;
      console.log("taxes: ", data);
      setTaxList(data);
    } catch (e) {
      console.error(e);
    }
  };

   // Función para obtener la lista de colaboradores
  const getCollaborators = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("loginData") as string);
      if (user.id) {
        const response = await axios.get(`${baseUrl}/api/v1/collaborator/all/${user.id}`);
        const data = response.data.data;
        console.log("Colaboradores: ", data);
        setCollaboratorsList(data);
      }
    } catch (e) {
      console.error("Error al obtener los colaboradores:", e);
    }
  };

  const addCollaborator = async (collaboratorData: Collaborator) => {
    try {
      const user = JSON.parse(localStorage.getItem("loginData") as string);
  
      if (user?.id) {
        const response = await axios.post(`${baseUrl}/api/v1/collaborator/create`, {
          ...collaboratorData,
          user_id: user.id, // Incluye el ID del usuario en el cuerpo de la solicitud
        });
  
        const newCollaborator = response.data; // La respuesta de la API
        console.log("Colaborador agregado: ", newCollaborator);
  
        // Actualiza la lista de colaboradores inmediatamente
      
        await getCollaborators();
        setIsModalCollaboratorsOpen(false); // Cierra el modal después de agregar
      }
    } catch (error) {
      console.error("Error al agregar el colaborador:", error);
    }
  };
  
  
  useEffect(() => {
    getTaxes();
    getCollaborators();
  }, []);

  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-nunito font-bold">Impuestos</h2>
        <button
          className="bg-[#56588C] shadow-full text-white px-4 py-3 rounded-lg hover:bg-[#56587C]"
           onClick={addTaxes}
        >
         Calcular impuestos
        </button>
      </div>

      <div className="relative">
        {/* Encabezado */}
        <div className="bg-[#DDDEEC] shadow-lg rounded-lg text-sm font-semibold text-gray-500 grid grid-cols-5 mb-2">
          <div className="p-4">TIPO DE IMPUESTO</div>
          <div className="p-4">MONTO</div>
          <div className="p-4">VENCIMIENTO</div>
          <div className="p-4">ESTADO</div>
          <div className="p-4">PAGAR</div>
        </div>

        {/* Lista de Impuestos */}
        <div className="space-y-2 relative">
          {taxList?.map((tax, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg text-sm font-nunito text-gray-700 grid grid-cols-5 mb-2"
            >
              <div className="p-4 font-medium text-gray-700">{tax.taxName}</div>
              <div className="p-4 font-medium text-gray-700">${tax.taxDue}</div>
              <div className="p-4 font-medium text-gray-700">{tax.deadline}</div>
           
              
              <div className="p-4 font-medium">
                <span
                  className={`px-2 py-1 rounded ${
                    tax.status === "PENDING"
                      ? "bg-yellow-200 text-gray-900"
                      : tax.status === "EXPIRED"
                      ? "bg-red-200 text-gray-900"
                      : "bg-green-200 text-gray-900"
                  }`}
                >
                  {tax.status}
                </span>
              </div>
              <div className="p-4">
                <button className="bg-gray-200 px-4  rounded hover:bg-gray-300">
                  Ir
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <div className="flex justify-between items-center mb-4 pt-5">
        <h3 className="text-2xl font-nunito font-bold">Colaboradores</h3>
        <button
          className="bg-[#56588C] shadow-full text-white px-4 py-3 rounded-lg hover:bg-[#56587C]"
          onClick={() => setIsModalCollaboratorsOpen(true)}
        >
          Agregar colaborador
        </button>
      </div>

      <div className="relative">
        {/* Encabezado */}
        <div className="bg-[#DDDEEC] shadow-lg rounded-lg text-sm font-nunito font-bold text-gray-500 grid grid-cols-5 mb-2">
          <div className="p-4">NOMBRE</div>
          <div className="p-4">MONTO</div>
          <div className="p-4">FECHA</div>
          <div className="p-4">SERVICIO</div>
          <div className="p-4">ESTADO</div>
        </div>

        {/* Lista de Colaboradores */}
        <div className="space-y-2 relative">
          {collaboratorsList?.map((collaborator, index) => (
            <div
              key={index}
              className="bg-white  shadow-lg rounded-lg text-sm font-nunito text-gray-500 grid grid-cols-5 mb-2"
            >
              <div className="p-4 font-medium text-gray-700">{collaborator.name}</div>
              <div className="p-4 font-medium text-gray-700">${collaborator.amount}</div>
              <div className="p-4 font-medium text-gray-700">{collaborator.date}</div>
              <div className="p-4 font-medium text-gray-700">
                {collaborator.service || "-"}
               
              </div>
             <div className="p-4 font-medium text-gray-700">🟢Pagado</div>
            </div>
          ))}
        </div>
      </div>

      <AddCollaboratorModal
  isOpen={isModalCollaboratorsOpen}
  onClose={() => setIsModalCollaboratorsOpen(false)}
  addCollaborator={addCollaborator} // Pasa la función aquí
/>
    </section>
  );
};
