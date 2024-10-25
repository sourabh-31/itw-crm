"use client";

import Image from "next/image";

import { useTasksData } from "@/hooks/useTasks";
import { useTaskStore } from "@/store/useTaskStore";

import Container from "../shared/Container";
import Spinner from "../shared/Spinner";
import TaskLine from "./TaskLine";

export default function Tasks() {
  const { taskCategory, timeFilter, taskType, dueOn, sortBy, order } =
    useTaskStore();

  const { isPending, isError, data } = useTasksData(
    taskCategory,
    1,
    4,
    ["PENDING"],
    timeFilter,
    taskType === "All" ? [] : [taskType],
    dueOn,
    sortBy,
    order
  );

  return (
    <Container
      name="Your Tasks"
      className="mx-4 text-white lg:mx-0"
      linkTo="/tasks"
    >
      {isPending ? (
        <div className="mt-28">
          <Spinner />
        </div>
      ) : isError || (!isPending && (!data || data.data.tasks.length === 0)) ? (
        <div className="mb-8 flex h-full flex-col items-center justify-center gap-2 text-center font-mulish lg:mb-0 lg:mt-16">
          <Image
            src="/assets/png/empty.png"
            alt="empty-img"
            width={150}
            height={150}
          />
          <span className="font-recoletaAlt text-xl">Coming Soon!</span>
          <div className="mt-2 flex flex-col gap-1 text-sm">
            <span>The task management feature will be available soon.</span>
            <span>Stay tuned for updates!</span>
          </div>
        </div>
      ) : (
        <div className="space-y-4 px-2">
          {data?.data.tasks.map((task) => (
            <TaskLine task={task} key={task.id} />
          ))}
        </div>
      )}
    </Container>
  );
}
