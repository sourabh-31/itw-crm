"use client";

import { useTaskStore } from "@/store/useTaskStore";

import CompletedDashboardCount from "./CompletedDashboardCount";
import CompletedTasks from "./CompletedTasks";
import OpenDashboardCount from "./OpenDashboardCount";
import OpenTasks from "./OpenTasks";

export default function TaskDashboard() {
  const { activeTab } = useTaskStore();

  return activeTab === "open" ? (
    // Pending tasks
    <div>
      <OpenDashboardCount />
      <OpenTasks />
    </div>
  ) : (
    // Completed tasks
    <div>
      <CompletedDashboardCount />
      <CompletedTasks />
    </div>
  );
}
