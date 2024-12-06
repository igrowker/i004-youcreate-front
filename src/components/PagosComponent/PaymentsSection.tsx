import React, {useEffect, useState} from "react";
import { AddTaxModal } from "./AddTaxModal.tsx";
import axios from "axios";
import {AddCollaboratorModal} from "./AddCollaboratorModal.tsx";

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

    const [isModalTaxesOpen, setIsModalTaxesOpen] = useState(false);
    const [isModalCollaboratorsOpen, setIsModalCollaboratorsOpen] = useState(false);
    const [taxList, setTaxList] = useState<Tax[]>();
    const [collaboratorsList, setCollaboratorsList] = useState<Collaborator[]>();

    const getTaxes = async () => {
       try {
           const response = await axios.get(`${baseUrl}/payments`);
              const data = response.data;
           console.log('taxes: ',data);
           setTaxList(data);
       } catch (e) {
           console.error(e);
       }
    }

    const getCollaborators = async () => {
        try {

            const user = JSON.parse(localStorage.getItem('loginData') as string);

            if (user.id) {
                const response = await axios.get(`${baseUrl}/api/v1/collaborator/all/${user.id}`);
                const data = response.data.data;
                console.log('collabs: ',data);
                setCollaboratorsList(data);
            }

        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getTaxes();
        getCollaborators();
    }, []);

    return (
        <section className="mb-8">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Impuestos</h2>
                <button
                    className="flex items-center gap-2 bg-gray-200 text-gray-600 px-4 py-2 rounded hover:bg-gray-300"
                    onClick={() => setIsModalTaxesOpen(true)}
                >
                    Agregar impuesto
                </button>
            </div>
            <table className="w-full border border-gray-200 rounded">
                <thead>
                <tr className="bg-gray-100 text-left">
                    <th className="p-2">Tipo de Impuesto</th>
                    <th className="p-2">Monto</th>
                    <th className="p-2">Vencimiento</th>
                    <th className="p-2">Estado</th>
                    <th className="p-2">Pagar</th>
                </tr>
                </thead>
                <tbody>
                {taxList?.map((tax, index) => (
                    <tr key={index} className="border-t">
                        <td className="p-2">{tax.category}</td>
                        <td className="p-2">$ {tax.amount}</td>
                        <td className="p-2">{tax.expired_date}</td>
                        <td className="p-2">
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
                        </td>
                        <td className="p-2">
                            <button className="bg-gray-200 px-4 py-1 rounded hover:bg-gray-300">Ir</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <AddTaxModal isOpen={isModalTaxesOpen} onClose={() => setIsModalTaxesOpen(false)}/>

            <div className="flex justify-between items-center mb-4 pt-5">
                <h2 className="text-xl font-semibold">Colaboradores</h2>
                <button
                    className="flex items-center gap-2 bg-gray-200 text-gray-600 px-4 py-2 rounded hover:bg-gray-300"
                    onClick={() => setIsModalCollaboratorsOpen(true)}
                >
                    Agregar colaborador
                </button>
            </div>
            <table className="w-full border border-gray-200 rounded">
                <thead>
                <tr className="bg-gray-100 text-left">
                    <th className="p-2">Nombre</th>
                    <th className="p-2">Monto</th>
                    <th className="p-2">Fecha</th>
                    <th className="p-2">Campaña</th>
                    <th className="p-2">Estado</th>
                    <th className="p-2">Pagar</th>
                </tr>
                </thead>
                <tbody>
                {collaboratorsList?.map((collaborator, index) => (
                    <tr key={index} className="border-t">
                        <td className="p-2">{collaborator.name}</td>
                        <td className="p-2">$ {collaborator.amount}</td>
                        <td className="p-2">{collaborator.date}</td>
                        <td className="p-2">{collaborator.campaign || "-"}</td>
                        <td className="p-2">
                                <span
                                    className={`px-2 py-1 rounded ${
                                        collaborator.status === "Pendiente"
                                            ? "bg-yellow-200 text-yellow-700"
                                            : "bg-green-200 text-green-700"
                                    }`}
                                >
                                    {collaborator.status}
                                </span>
                        </td>
                        <td className="p-2">
                            <button className="bg-gray-200 px-4 py-1 rounded hover:bg-gray-300">Ir</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <AddCollaboratorModal
                isOpen={isModalCollaboratorsOpen}
                onClose={() => setIsModalCollaboratorsOpen(false)}/>

        </section>
    );
};