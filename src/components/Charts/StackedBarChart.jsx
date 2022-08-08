import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
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
];

export default function StackedBarChart(props) {
  return (
    <BarChart width={500} height={260} data={data} layout="vertical">
      <Legend
        verticalAlign="top"
        align="left"
        wrapperStyle={{ borderRadius: '4px' }}
      />
      <XAxis type="number" tickLine={false} axisLine={false} />
      <YAxis type="category" dataKey="name" tickLine={false} axisLine={false} />
      <Tooltip />
      <Bar
        dataKey="pv"
        stackId="v"
        fill="#0263FF"
        radius={5}
        barSize={28}
        gapSize={4}
      />
      <Bar
        dataKey="uv"
        stackId="v"
        fill="#FF7723"
        radius={5}
        barSize={28}
        gapSize={4}
        style={{ transform: 'translate(4px, 0)' }}
      />
      <Bar
        dataKey="amt"
        stackId="v"
        fill="#8E30FF"
        radius={5}
        barSize={28}
        gapSize={4}
        style={{ transform: 'translate(8px, 0)' }}
      />
    </BarChart>
  );
}
