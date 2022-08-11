import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function StackedBarChart({ data, width, height }) {
  return (
    <ResponsiveContainer width={width} height={height}>
      <BarChart layout="vertical" data={data}>
        <Legend
          verticalAlign="top"
          align="left"
          wrapperStyle={{ borderRadius: '4px' }}
        />
        <XAxis type="number" tickLine={false} axisLine={false} />
        <YAxis
          type="category"
          dataKey="name"
          tickLine={false}
          axisLine={false}
        />
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
    </ResponsiveContainer>
  );
}

StackedBarChart.defaultProps = {
  width: '100%',
  height: 240,
};

export default StackedBarChart;
