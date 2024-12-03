import React from "react";

export const SocialSection: React.FC = () => {
    const socialAccounts = [
        { platform: "Facebook", status: "Conectado" },
        { platform: "Instagram", status: "Conectado" },
        { platform: "Twitter", status: "No conectado" },
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Mis Redes</h1>
            <ul className="divide-y divide-gray-200">
                {socialAccounts.map((account, index) => (
                    <li key={index} className="p-4 flex justify-between items-center bg-white shadow rounded-lg">
                        <p>{account.platform}</p>
                        <p className={account.status === "Conectado" ? "text-green-600" : "text-red-600"}>
                            {account.status}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
