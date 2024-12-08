import React from "react";


interface DeleteIncomeConfirmationProps {
  incomeId: number;
  onCancel: () => void;
  onConfirm: () => void;
}

export const DeleteIncomeConfirmation: React.FC<DeleteIncomeConfirmationProps> = ({
  
  onCancel,
  onConfirm,
}) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-sm mx-auto">
      
      <p className="text-gray-700 mb-6">
        ¿Estás seguro de que deseas eliminar este ingreso? Esta acción no se puede deshacer.
      </p>
      <div className="flex justify-end space-x-4">
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
        >
          Cancelar
        </button>
        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center justify-center space-x-2"
        >
          elimi
        </button>
      </div>
    </div>
  );
};
