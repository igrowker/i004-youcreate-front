
import React from "react";
import Incomeschart from "./components/Incomescharts";
import BalanceChart from "./components/BalanceChart";
import ExpenseChart from "./components/TotalExpensesChart";


const DashboardSection: React.FC = () => {
  return (
    <div className="pb-10 flex flex-wrap gap-x-10">
      {/* ACA VA A IR IMPORTADOS LOS COMPONENTES QUE VAYA A UTILIZAR COMO LOS GRAFICOS ETC */}

      <Incomeschart />
      <BalanceChart />
      <ExpenseChart />

      

    </div>
  );
};


export default DashboardSection;

