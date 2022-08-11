import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, LabelList } from 'recharts';

const data = [
  {
    name: '01/09',
    pv: 40,
  },
  {
    name: '02/09',
    pv: 88,
  },
  {
    name: '03/09',
    pv: 60,
  },
  {
    name: '04/09',
    pv: 79,
  },
  {
    name: '05/09',
    pv: 70,
  },
  {
    name: '06/09',
    pv: 93,
  },
  {
    name: '07/09',
    pv: 8,
  },
];

const renderCustomizedLabel = (props) => {
  const { x, y, width, value } = props;
  const radius = 10;

  return (
    <g>
      <text
        x={x + width / 2}
        y={y - radius}
        fill="#333333"
        textAnchor="middle"
        fontSize={12}
        dominantBaseline="middle"
      >
        {value}
      </text>
    </g>
  );
};

export default function (props) {
  return (
    <BarChart
      width={500}
      height={200}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 5,
        bottom: 5,
      }}
    >
      <XAxis dataKey="name" tickLine={false} axisLine={false} fontSize={10} />
      <YAxis tickLine={false} axisLine={false} fontSize={10} />
      <Tooltip />
      <Bar dataKey="pv" radius={5} barSize={28} fill={props.fill || '#000'}>
        <LabelList dataKey="pv" content={renderCustomizedLabel} />
      </Bar>
    </BarChart>
  );
}
