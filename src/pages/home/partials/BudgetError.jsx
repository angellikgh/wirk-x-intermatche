import React, { useEffect, useState } from 'react';
import StackedBarChart from '../../../components/Charts/StackedBarChart01';

function BudgetError() {
  const [percentage, setPercentage] = useState(0);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    setPercentage(13);
    setChartData([
      {
        name: '1200',
        uv: 10,
        pv: 20,
        amt: 45,
      },
      {
        name: '1011',
        uv: 12,
        pv: 45,
        amt: 28,
      },
      {
        name: '1001',
        uv: 10,
        pv: 25,
        amt: 19,
      },
    ]);
  }, []);

  return (
    <div className="card bg-warning-light">
      <div className="card-title">Erreurs</div>
      <div className="card-body">
        <div className="summary mb-2">
          <h3 className="summary-title">% de KO</h3>
          <div className="summary-content text-red-light">{percentage} %</div>
        </div>

        <StackedBarChart data={chartData} />
      </div>
    </div>
  );
}

export default BudgetError;
