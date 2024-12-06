import React from 'react';
import Incomeschart from './components/IncomesCharts';


const DashboardSection: React.FC = () => {
  return (
    <div>
      {/* ACA VA A IR IMPORTADOS LOS COMPONENTES QUE VAYA A UTILIZAR COMO LOS GRAFICOS ETC */}
      <Incomeschart/>
    </div>
  )
}

export default DashboardSection