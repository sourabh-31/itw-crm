import { useRef } from "react";

import { useTasksData } from "@/hooks/useTasks";
import { useTaskStore } from "@/store/useTaskStore";

import Spinner from "../shared/Spinner";
import TaskCard from "./TaskCard";

export default function OpenTasks() {
  const containerRef = useRef(null);
  const { taskCategory, timeFilter, taskType, dueOn, sortBy, order } =
    useTaskStore();

  const { isPending, isError, data } = useTasksData(
    taskCategory,
    1,
    8,
    ["PENDING"],
    timeFilter,
    taskType === "All" ? [] : [taskType],
    dueOn,
    sortBy,
    order
  );

  // Handle loading state
  if (isPending) {
    return (
      <section className="mt-6" ref={containerRef}>
        <h3 className="font-recoletaAlt text-xl text-white">Open Tasks</h3>
        <div className="mt-24">
          <Spinner />
        </div>
      </section>
    );
  }

  // Handle error state or no tasks
  if (isError || !data?.data.tasks?.length) {
    return (
      <section className="mt-6" ref={containerRef}>
        <h3 className="font-recoletaAlt text-xl text-white">Open Tasks</h3>
        <div className="mt-8 font-recoletaAltReg text-xl font-bold tracking-[0.036em] text-[#FFFFFFcc]">
          No tasks found.
        </div>
      </section>
    );
  }

  // Render tasks
  return (
    <section className="mt-6" ref={containerRef}>
      <h3 className="font-recoletaAlt text-xl text-white">Open Tasks</h3>
      <div className="mt-3 flex flex-wrap gap-5">
        {data.data.tasks.map((task) => (
          <TaskCard
            key={task.id}
            createdAt={task.createdAt}
            dueOn={task.dueOn}
            profileImg={task.addedBy.profileImage || ""}
            taskId={task.id}
            serviceType={task.taskType}
            taskTitle={task.title}
            taskDescription={task.description || "No description found"}
            memberName={`${task.addedBy.firstName} ${task.addedBy.lastName}`}
            messageCount={task.commentsCount}
            tagCount={task.attachmentsCount}
            isCompleted={task.status === "COMPLETED"}
            assigneeId={task.taskAssignedTo[0]?.user?.id || 0}
            brandId={task.taskRelatedBrands?.[0]?.brand?.id || 0}
            eventId={task.taskRelatedEvents?.[0]?.event?.id || 0}
            inventoryId={task.taskRelatedInventory?.[0]?.inventory?.id || 0}
          />
        ))}
      </div>
    </section>
  );
}
