"use client";

import { Bar, BarChart, XAxis } from "recharts";

import { useTaskStats } from "@/hooks/useTasks";
import { useTaskStore } from "@/store/useTaskStore";

export default function OpenTaskChart() {
  const { timeFilter } = useTaskStore();

  const { data: openTaskData } = useTaskStats("PENDING", timeFilter, 0);
  const { data: completedTaskData } = useTaskStats("COMPLETED", timeFilter, 0);

  const data = [
    {
      name: "Open",
      uv: openTaskData?.data.openTasks.totalCount || 0,
      fill: "#559CFF",
    },
    {
      name: "Completed",
      uv: completedTaskData?.data.completedTasks.totalCount || 0,
      fill: "#8FD18E",
    },
  ];

  return (
    <BarChart width={96} height={100} data={data}>
      <XAxis dataKey="name" />
      <Bar dataKey="uv" fill="fill" radius={2} isAnimationActive={false} />
    </BarChart>
  );
}
