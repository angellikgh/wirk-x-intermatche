import React, { useEffect, useState } from 'react';

import BarChart from '../../../components/Charts/BarChart';
import { DashboardService } from '../../../services/mock';

function BudgetVolumn() {
  const [volumnNumber, setVolumnNumber] = useState(0);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: '#FF89BB',
        barPercentage: 0.7,
        categoryPercentage: 0.8,
        borderRadius: 4,
        borderSkipped: false,
      },
    ],
  });

  useEffect(() => {
    DashboardService.getVolumnComunity(2).then((payload) => {
      setVolumnNumber(payload.volumn);
      setChartData((prevData) => {
        prevData.labels = payload.dataset.labels;
        prevData.datasets[0].data = payload.dataset.data;
        return {
          ...prevData,
        };
      });
    });
  }, []);

  return (
    <div className="card bg-warning-light">
      <div className="card-title">Volume traité</div>
      <div className="card-body">
        <div className="summary">
          <h3 className="summary-title">Nombre de dossiers</h3>
          <div className="summary-content text-red-light">{volumnNumber}</div>
        </div>

        <BarChart data={chartData} height={200} />
      </div>
    </div>
  );
}

export default BudgetVolumn;
