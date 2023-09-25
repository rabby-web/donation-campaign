import { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
const Statistics = () => {
  const [donateCount, setDonateCount] = useState(0);

  useEffect(() => {
    const donationsItem = JSON.parse(localStorage.getItem("donations"));
    setDonateCount(donationsItem);
  }, []);

  const data = [
    { name: "Group A", value: 12 },
    { name: "Group B", value: donateCount.length },
  ];

  const COLORS = ["#FF444A", "#00C49F"];
  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div>
      <div className="flex justify-center">
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
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
      </div>
      <div className="w-full text-center flex justify-center flex-col md:flex-row md:gap-10">
        <div className="flex gap-2 items-center justify-center">
          <span className="font-semibold">Your Donation</span>
          <img
            className="h-3 mt-1"
            src="../../../public/Rectangle1.png"
            alt=""
          />
        </div>
        <div className="flex gap-2 items-center justify-center">
          <span className="font-semibold">Total Donation</span>
          <img
            className="h-3 mt-1"
            src="../../../public/Rectangle2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
