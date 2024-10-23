import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import TaskDashboard from "@/components/tasks/TaskDashboard";
import { TASKSTATS } from "@/constants/queryKeys";
import { getTasksStats } from "@/server/task.actions";

export default async function Page() {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: [TASKSTATS, "PENDING", "TODAY", 0],
      queryFn: () => getTasksStats("PENDING", "TODAY", 0),
    }),
    queryClient.prefetchQuery({
      queryKey: [TASKSTATS, "COMPLETED", "TODAY", 0],
      queryFn: () => getTasksStats("COMPLETED", "TODAY", 0),
    }),
  ]);

  return (
    <section className="noiseBgSec min-h-[calc(100vh-160px)] rounded-b-2xl bg-[#292d38] px-6 py-5">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <TaskDashboard />
      </HydrationBoundary>
    </section>
  );
}
