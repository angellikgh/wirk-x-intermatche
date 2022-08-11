import React, { useEffect, useState } from 'react';
import StackedBarChart from '../../../components/Charts/StackedBarChart01';

function FamilyError() {
  const [percentage, setPercentage] = useState(0);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Initial',
        data: [],
        backgroundColor: '#5C80FF',
        // borderRadius: 4,
        borderSkipped: false,
      },
      {
        label: 'Rejeux',
        data: [],
        backgroundColor: '#FF7723',
        // borderRadius: 4,
        borderSkipped: false,
      },
      {
        label: 'Prolongation',
        data: [],
        backgroundColor: '#8E30FF',
        // borderRadius: 4,
        borderSkipped: false,
      },
    ],
  });

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
