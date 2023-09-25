import { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
const Statistics = () => {
  const [donateCount, setDonateCount] = useState([]);

  useEffect(() => {
    const donationsItem = JSON.parse(localStorage.getItem("donations"));
    setDonateCount(donationsItem);
  }, []);
  const donatePai = donateCount.length;

  const data = [
    { name: "Group A", value: (donatePai / 12) * 100 },
    { name: "Group B", value: 100 - (donatePai / 12) * 100 },
  ];

  const COLORS = ["#00C49F", "#FF444A"];
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
