
import React from "react";
import Incomeschart from "./components/Incomescharts";
import BalanceChart from "./components/BalanceChart";
import ExpenseChart from "./components/TotalExpensesChart";
import LastMoves from "./components/LastMoves";
import TotalIncomes from "./components/TotalIncomes";


const DashboardSection: React.FC = () => {
  return (
    <div className="space-y-10">
      {/* ACA VA A IR IMPORTADOS LOS COMPONENTES QUE VAYA A UTILIZAR COMO LOS GRAFICOS ETC */}
      <div className="flex gap-x-10">
      <TotalIncomes />
      <Incomeschart />
      </div>
      <div className="flex gap-x-10">
      <ExpenseChart />
      <BalanceChart />
      <LastMoves />
      </div>

      

    </div>
  );
};


export default DashboardSection;

