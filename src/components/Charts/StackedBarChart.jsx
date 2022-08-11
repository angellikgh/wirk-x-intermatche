import React, { useRef, useEffect, useState } from 'react';

import {
  Chart,
  CategoryScale,
  BarController,
  BarElement,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend,
} from 'chart.js';
import 'chartjs-adapter-moment';

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend
);

function BarChart01({ data, width, height }) {
  const canvas = useRef(null);

  useEffect(() => {
    const ctx = canvas.current;
    const chart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        indexAxis: 'y',
        scales: {
          y: {
            stacked: true,
            grid: {
              display: false,
              drawBorder: false,
            },
          },
          x: {
            stacked: true,
            grid: {
              display: false,
              drawBorder: false,
            },
            barRadius: '8px',
          },
        },
        plugins: {
          tooltip: {
            callbacks: {
              title: () => false, // Disable tooltip title
            },
          },
        },
        interaction: {
          intersect: false,
          mode: 'nearest',
        },
        animation: {
          duration: 500,
        },
        maintainAspectRatio: false,
        resizeDelay: 200,
      },
    });

    return () => {
      chart.destroy();
    };
  }, [data]);

  return (
    <div className="grow">
      <canvas ref={canvas} width={width} height={height}></canvas>
    </div>
  );
}

export default BarChart01;
