import React, { PureComponent, memo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mois en cours', value: 400 },
  { name: 'Restants', value: 300 },
  { name: 'Consommé', value: 300 },
];

const COLORS = ['#8E30FF', '#0263FF', '#FF7723'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  name,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      fontSize={12}
      dominantBaseline="central"
    >
      {name}
    </text>
  );
};

class CustomizedPieChart extends PureComponent {
  render() {
    // const { data, width, height } = this.props;
    const { width, height } = this.props;

    return (
      <ResponsiveContainer width={width} height={height}>
        <PieChart className="m-auto">
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={125}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

CustomizedPieChart.defaultProps = {
  width: '100%',
  height: 300,
};

export default memo(CustomizedPieChart);
