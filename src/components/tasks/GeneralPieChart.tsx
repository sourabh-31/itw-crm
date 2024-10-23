"use client";

import { Cell, Pie, PieChart } from "recharts";

import { useTaskStats } from "@/hooks/useTasks";
import { useTaskStore } from "@/store/useTaskStore";

// Define a type for your stats structure
interface TaskStats {
  totalTasks: number;
  percentageComposition: number;
}

interface Stats {
  GENERAL?: TaskStats;
  EVENT?: TaskStats;
  INVENTORY?: TaskStats;
  BRAND?: TaskStats;
}

// Rechart colors
const COLORS = ["#78E7F0", "#07747D", "#09949F", "#38C6D2"];

// Map keys to names (A, B, C, D) and services
const nameMapping: Record<string, string> = {
  GENERAL: "A",
  EVENT: "B",
  INVENTORY: "C",
  BRAND: "D",
};

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  name,
  percent,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  name: string;
  percent: number;
}) => {
  // Hide labels with 0% value
  if (percent === 0) return null;

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
      {name}
    </text>
  );
};

export default function GeneralPieChart() {
  const { timeFilter } = useTaskStore();
  const { data: openTaskData } = useTaskStats("PENDING", timeFilter, 0);

  const stats: Stats | undefined = openTaskData?.data?.stats;

  // Transform the stats into data for the pie chart with custom names
  const data = stats
    ? (Object.keys(stats) as Array<keyof Stats>).map((key) => ({
        name: nameMapping[key] || "Unknown Service",
        value: stats[key]?.totalTasks ?? 0,
      }))
    : [];

  return (
    <PieChart width={200} height={200} className="scale-75">
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
