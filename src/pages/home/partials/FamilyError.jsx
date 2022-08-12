import React, { useEffect, useState } from 'react';

import StackedBarChart from '../../../components/Charts/StackedBarChart01';
import { DashboardService } from '../../../services/mock';

function FamilyError() {
  const [percentage, setPercentage] = useState(0);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    DashboardService.getErrorComunity(1).then((payload) => {
      setPercentage(payload.percentageKO);
      const transform = payload.datasets.map((item) => ({
        label: item[0].labels[0],
        Initial: item[0].data[0],
        Rejeux: item[0].data[1],
        Prolongations: item[0].data[2],
      }));
      setChartData(transform);
    });
  }, []);

  return (
    <div className="card bg-primary-light">
      <div className="card-title">Erreurs</div>
      <div className="card-body">
        <div className="summary mb-2">
          <h3 className="summary-title">% de KO</h3>
          <div className="summary-content text-primary">{percentage} %</div>
        </div>

        <StackedBarChart data={chartData} />
      </div>
    </div>
  );
}

export default FamilyError;
