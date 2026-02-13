import { PieChart, Pie, Cell } from "recharts";

export default function CapacityDonut() {
  const data = [
    { name: "Used", value: 35 },
    { name: "Unused", value: 65 },
  ];

  const COLORS = ["#8ec9f5", "#d9e6f7"];

  return (
    <PieChart width={90} height={90}>
      <Pie
        data={data}
        innerRadius={28}
        outerRadius={40}
        dataKey="value"
        stroke="none"
      >
        {data.map((_, index) => (
          <Cell key={index} fill={COLORS[index]} />
        ))}
      </Pie>
    </PieChart>
  );
}
