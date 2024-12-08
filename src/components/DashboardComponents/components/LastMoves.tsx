import React from "react";

interface LastMoves {
  descripcion: string;
  fecha: string;
  monto: number;
}

const LastMoves: React.FC = () => {
  const LastMoves: LastMoves[] = [
    {
      descripcion: "Pago de impuesto X",
      fecha: "28 noviembre 2024",
      monto: -8550,
    },
    { descripcion: "Campaña Adidas", fecha: "27 noviembre 2024", monto: 80000 },
    { descripcion: "Colaboración", fecha: "20 noviembre 2024", monto: 15000 },
    {
      descripcion: "Pago de impuesto Y",
      fecha: "19 noviembre 2024",
      monto: -2500,
    },
    {
      descripcion: "Colaborador PSD",
      fecha: "18 noviembre 2024",
      monto: -11000,
    },
  ];

  return (
    <div className="w-[25%]">
      <h2 className="mb-5 font-semibold text-xl text-center">Últimos movimientos</h2>
      <div className="px-6 py-3 bg-slate-100 rounded-lg shadow-xl max-w-md mx-auto h-auto">
        <ul className="space-y-2">
          {LastMoves.map((mov, index) => (
            <li
              key={index}
              className="flex justify-between items-center py-2 border-b last:border-none gap-x-8"
            >
              <div>
                <p className="text-sm font-medium">{mov.descripcion}</p>
                <p className="text-xs text-gray-500">{mov.fecha}</p>
              </div>
              <p
                className={`text-sm font-bold ${
                  mov.monto < 0 ? "text-red-500" : "text-green-500"
                }`}
              >
                {mov.monto < 0 ? `-$${Math.abs(mov.monto)}` : `+$${mov.monto}`}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LastMoves;
