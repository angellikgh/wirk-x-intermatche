import React, { useEffect, useState } from 'react';

import PieChart from '../../../components/Charts/PieChart';
import { DashboardService } from '../../../services/mock';

function TotalError() {
  const [pendingRequest, setPendingRequest] = useState(0);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    DashboardService.getConsommation().then((payload) => {
      setPendingRequest(payload.pendingRequest);
      const transform = payload.datasets.labels.map((label, i) => ({
        label,
        value: payload.datasets.data[i],
      }));
      setChartData(transform);
    });
  }, []);

  return (
    <div className="card">
      <div className="card-title">Consommation</div>
      <div className="card-body">
        <div className="summary">
          <h3 className="summary-title">Dossiers restants</h3>
          <div className="summary-content text-primary">{pendingRequest}</div>
        </div>

        <PieChart data={chartData} />
      </div>
    </div>
  );
}

export default TotalError;
