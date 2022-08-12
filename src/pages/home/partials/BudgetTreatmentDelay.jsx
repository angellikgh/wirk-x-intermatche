import React, { useEffect, useState } from 'react';

import BarChart from '../../../components/Charts/BarChart';
import { DashboardService } from '../../../services/mock';

function BudgetTreatmentDelay() {
  const [averageTime, setAverageTime] = useState();
  const [percentageOnTime, setPercentageOnTime] = useState();
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
    DashboardService.getTreatmentDelay(2).then((payload) => {
      setAverageTime(payload.averageTime);
      setPercentageOnTime(payload.percentageOnTime);
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
      <div className="card-title">Délais de traitement</div>
      <div className="card-body">
        <div className="flex justify-between gap-4">
          <div className="summary">
            <h3 className="summary-title">Temps moyen de traitement</h3>
            <div className="summary-content text-red-light">{averageTime}</div>
          </div>
          <div className="summary">
            <h3 className="summary-title">% inferieur à 5j</h3>
            <div className="summary-content text-red-light">
              {percentageOnTime}%
            </div>
          </div>
        </div>
        <BarChart data={chartData} fill="#5C80FF" height={200} />
      </div>
    </div>
  );
}

export default BudgetTreatmentDelay;
