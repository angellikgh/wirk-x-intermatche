import React, { useEffect, useState } from 'react';
import BarChart from '../../../components/Charts/BarChart';

function FamilyTreatmentDelay() {
  const [averageTime, setAverageTime] = useState();
  const [percentageOnTime, setPercentageOnTime] = useState();

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: '#5C80FF',
        barPercentage: 0.7,
        categoryPercentage: 0.8,
        borderRadius: 4,
        borderSkipped: false,
      },
    ],
  });

  useEffect(() => {
    setAverageTime('1,3 j');
    setPercentageOnTime(95.7);
    setChartData((prevData) => {
      prevData.labels = ['<1h', '<6h', '<12h', '<1j', '<2j', '<5j', '>5j'];
      prevData.datasets[0].data = [90, 88, 60, 79, 70, 93, 8];
      return {
        ...prevData,
      };
    });
  }, []);

  return (
    <div className="card bg-primary-light">
      <div className="card-title">Délais de traitement</div>
      <div className="card-body">
        <div className="grid grid-cols-2 gap-4">
          <div className="summary">
            <h3 className="summary-title">Temps moyen de traitement</h3>
            <div className="summary-content text-primary">{averageTime}</div>
          </div>
          <div className="summary">
            <h3 className="summary-title">% inferieur à 5j</h3>
            <div className="summary-content text-primary">
              {percentageOnTime}%
            </div>
          </div>
        </div>
        <BarChart data={chartData} height={200} />
      </div>
    </div>
  );
}

export default FamilyTreatmentDelay;
