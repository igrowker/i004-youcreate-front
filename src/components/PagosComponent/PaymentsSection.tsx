import React, { useEffect, useState } from "react";

import axios from "axios";
import { AddCollaboratorModal } from "./AddCollaboratorModal.tsx";

interface Tax {
  id: number;
  amount: number;
  status: "PENDING" | "PAID" | "EXPIRED";
  category: string;
  collaborator_id: number;
  date: string;
  expired_date: string;
  service: string;
}

interface Collaborator {
  name: string;
  amount: string;
  date: string;
  status: "Pendiente" | "Pagado";
  campaign?: string;
}

export const PaymentsSection: React.FC = () => {
  const baseUrl = import.meta.env.VITE_API_URL;

 
  const [isModalCollaboratorsOpen, setIsModalCollaboratorsOpen] = useState(false);
  const [taxList, setTaxList] = useState<Tax[]>();
  const [collaboratorsList, setCollaboratorsList] = useState<Collaborator[]>();

  const getTaxes = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/taxes`);
      const data = response.data;
      console.log("taxes: ", data);
      setTaxList(data);
    } catch (e) {
      console.error(e);
    }
  };

  const getCollaborators = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("loginData") as string);

      if (user.id) {
        const response = await axios.get(
          `${baseUrl}/api/v1/collaborator/all/${user.id}`
        );
        const data = response.data.data;
        console.log("collabs: ", data);
        setCollaboratorsList(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getTaxes();
    getCollaborators();
  }, []);

  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Impuestos</h2>
       
      </div>

      <div className="relative">
        {/* Encabezado */}
        <div className="bg-[#DDDEEC] shadow-md rounded-lg text-sm font-semibold text-gray-500 grid grid-cols-5 mb-2">
          <div className="p-4">Tipo de Impuesto</div>
          <div className="p-4">Monto</div>
          <div className="p-4">Vencimiento</div>
          <div className="p-4">Estado</div>
          <div className="p-4">Pagar</div>
        </div>

        {/* Lista de Impuestos */}
        <div className="space-y-2 relative">
          {taxList?.map((tax, index) => (
            <div
              key={index}
              className="bg-[#DDDEEC] shadow-md rounded-lg text-sm font-semibold text-gray-500 grid grid-cols-5 mb-2"
            >
              <div className="p-4 font-medium text-gray-900">{tax.category}</div>
              <div className="p-4 font-medium text-indigo-400">${tax.amount}</div>
              <div className="p-4 font-medium text-gray-900">{tax.expired_date}</div>
              <div className="p-4 font-medium">
                <span
                  className={`px-2 py-1 rounded ${
                    tax.status === "PENDING"
                      ? "bg-yellow-200 text-yellow-700"
                      : tax.status === "EXPIRED"
                      ? "bg-red-200 text-red-700"
                      : "bg-green-200 text-green-700"
                  }`}
                >
                  {tax.status}
                </span>
              </div>
              <div className="p-4">
                <button className="bg-gray-200 px-4 py-1 rounded hover:bg-gray-300">
                  Ir
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <div className="flex justify-between items-center mb-4 pt-5">
        <h3 className="text-xl font-semibold">Colaboradores</h3>
        <button
          className="bg-[#56588C] shadow-full text-white px-4 py-3 rounded-lg hover:bg-[#56587C]"
          onClick={() => setIsModalCollaboratorsOpen(true)}
        >
          Agregar colaborador
        </button>
      </div>

      <div className="relative">
        {/* Encabezado */}
        <div className="bg-[#DDDEEC] shadow-md rounded-lg text-sm font-semibold text-gray-500 grid grid-cols-5 mb-2">
          <div className="p-4">Nombre</div>
          <div className="p-4">Monto</div>
          <div className="p-4">Fecha</div>
          <div className="p-4">Campaña</div>
          <div className="p-4">Estado</div>
        </div>

        {/* Lista de Colaboradores */}
        <div className="space-y-2 relative">
          {collaboratorsList?.map((collaborator, index) => (
            <div
              key={index}
              className="bg-white  shadow-md rounded-lg text-sm font-semibold text-gray-500 grid grid-cols-5 mb-2"
            >
              <div className="p-4 font-medium text-gray-900">{collaborator.name}</div>
              <div className="p-4 font-medium text-indigo-400">${collaborator.amount}</div>
              <div className="p-4 font-medium text-gray-900">{collaborator.date}</div>
              <div className="p-4 font-medium text-gray-900">
                {collaborator.campaign || "-"}
              </div>
              <div className="p-4 font-medium">
                <span
                  className={`px-2 py-1 rounded ${
                    collaborator.status === "Pendiente"
                      ? "bg-yellow-200 text-yellow-700"
                      : "bg-green-200 text-green-700"
                  }`}
                >
                  {collaborator.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AddCollaboratorModal
        isOpen={isModalCollaboratorsOpen}
        onClose={() => setIsModalCollaboratorsOpen(false)}
      />
    </section>
  );
};
